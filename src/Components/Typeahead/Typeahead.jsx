import React, { useEffect, useState } from "react";

const Typeahead = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortControlar = new AbortController();

    const { signal } = abortControlar;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${query}&limit=10`,
          { signal }
        );
        const data = await res.json();
        if (data.products.length === 0) {
          setError("No products found");
          setResult([]);
        } else {
          setResult(data.products);
        }
        setLoading(false);
      } catch (err) {
        console.log(err);
        if (err.name === "AbortError") {
          setError("Request was aborted");
        } else {
          setError("Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    };

    const timerId = setTimeout(fetchData, 1000);

    return () => {
      clearTimeout(timerId);
      abortControlar.abort();
    };
  }, [query]);

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1>Typehead</h1>
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading ? (
        <h4>Loading</h4>
      ) : (
        <ul>
          {result?.map((product) => (
            <li key={product.id}> {product.title} </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Typeahead;
