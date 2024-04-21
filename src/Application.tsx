import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import LoginPage from "./components/pages/LoginPage/LoginPage";
import ComingSoonPage from "./components/common/ErrorScreens/ComingSoonPage/ComingSoonPage";
import PageNotFound from "./components/pages/PageNotFound/PageNotFound";
import AuthLayout from "./components/layouts/AuthLayout/AuthLayout";

const Application = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          path: "auth", // Relative to the parent path "/"
          element: <AuthLayout />,
          children: [
            {
              index: true,
              element: <Dashboard />,
            },
            {
              path: "earn", // Relative to the parent path "/auth"
              element: <ComingSoonPage />,
            },
            {
              path: "portfolio", // Relative to the parent path "/auth"
              element: <ComingSoonPage />,
            },
            {
              path: "governance", // Relative to the parent path "/auth"
              element: <ComingSoonPage />,
            },
            {
              path: "analytics", // Relative to the parent path "/auth"
              element: <ComingSoonPage />,
            },
            {
              path: "education", // Relative to the parent path "/auth"
              element: <ComingSoonPage />,
            },
            {
              path: "support", // Relative to the parent path "/auth"
              element: <ComingSoonPage />,
              children: [
                {
                  path: "subcategory4", // Relative to the parent path "/auth/support"
                  element: <ComingSoonPage />,
                },
                {
                  path: "subcategory5", // Relative to the parent path "/auth/support"
                  element: <ComingSoonPage />,
                },
              ],
            },
          ],
        },
        {
          path: "category/:id", // Relative to the parent path "/"
          element: <ComingSoonPage />,
        },
        {
          path: "subcategory/:subId", // Relative to the parent path "/"
          element: <ComingSoonPage />,
        },
        {
          path: "*", // Relative to the parent path "/"
          element: <PageNotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} fallbackElement={<h1>Loading</h1>} />;
};

export default Application;
