import { useRef } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import NotFound from "./pages/NotFound";
import ErrorBoundary from "./features/ErrorBoundary";
import "./App.scss";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default function WrapperApp() {
  const errorBoundaryRef = useRef<ErrorBoundary>(null);
  return (
    <ErrorBoundary fallback="There is an Error!" ref={errorBoundaryRef}>
      <HashRouter>
        <App />
      </HashRouter>
    </ErrorBoundary>
  );
}
