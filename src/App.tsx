import { useRef } from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import ErrorBoundary from "./features/ErrorBoundary";
import NotFound from "./pages/NotFound";
import RootLayout from "./pages/RootLayout";
import SearchResult from "./features/SearchResult";
import "./App.scss";

const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "result/?page=",
        element: <SearchResult />,
      },
    ],
  },
]);

export default function App() {
  const errorBoundaryRef = useRef<ErrorBoundary>(null);
  return (
    <ErrorBoundary fallback="There is an Error!" ref={errorBoundaryRef}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}
