import React from "react";
import { IErrorBoundaryProps, IErrorBoundaryState } from "../shared/interfaces";

export default class ErrorBoundary extends React.Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  state = { hasError: false };

  errorBoundaryRef = React.createRef<ErrorBoundary>();

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    throw new Error(`${error}, ${errorInfo}`);
  }

  triggerError() {
    throw new Error("Manually triggered error");
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}
