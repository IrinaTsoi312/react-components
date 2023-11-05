import { useRef } from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import ErrorBoundary from "./features/ErrorBoundary";
import NotFound from "./pages/NotFound";
import RootLayout from "./pages/RootLayout";
import "./App.scss";

const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [],
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
