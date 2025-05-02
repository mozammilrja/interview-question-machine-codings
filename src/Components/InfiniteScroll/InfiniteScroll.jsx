import React, { useEffect, useRef, useState } from "react";

function InfiniteScroll() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const limit = 10;
  const observer = useRef(); // observer ref
  const lastImageRef = useRef(); // will hold reference to last image

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://picsum.photos/v2/list?page=${page}&limit=${limit}`
      );
      const newData = await res.json();
      setData((prev) => [...prev, ...newData]);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prev) => prev + 1);
      }
    });

    if (lastImageRef.current) {
      observer.current.observe(lastImageRef.current);
    }
  }, [data, loading]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>InfiniteScroll</h1>

      <div style={{ display: "inline-block" }}>
        {data.map((item, index) => {
          const isLast = index === data.length - 1;
          return (
            <img
              key={item.id}
              ref={isLast ? lastImageRef : null}
              src={item?.download_url}
              alt={`Image ${index}`}
              style={{
                width: "100%",
                maxWidth: "400px",
                margin: "10px 0",
                display: "flex",
              }}
            />
          );
        })}
      </div>

      {loading && (
        <p style={{ margin: "20px", fontSize: "18px" }}>Loading...</p>
      )}
    </div>
  );
}

export default InfiniteScroll;
