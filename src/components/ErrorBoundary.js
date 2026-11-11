import React from "react";

const DEFAULT_STYLE = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
  padding: "2rem",
  textAlign: "center",
  fontFamily: "Georgia, serif",
  color: "#4b3b3b",
  background: "#f1f0e8",
};

function DefaultFallback() {
  return (
    <div role="alert" style={DEFAULT_STYLE}>
      <h1 style={{ fontSize: "2rem", margin: 0 }}>Something went wrong</h1>
      <p style={{ margin: 0 }}>Please reload the page. If it keeps happening, message us on Instagram.</p>
      <button type="button" onClick={() => window.location.reload()} style={{ padding: "0.6rem 1.4rem", fontSize: "1rem" }}>
        Reload
      </button>
    </div>
  );
}

/**
 * Catches render errors (including a failed lazy-chunk load after a redeploy)
 * so one broken component can't blank the whole site.
 *
 * `fallback` may be a node or a function `(error) => node`.
 */
export default class ErrorBoundary extends React.Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error(error, info && info.componentStack);
  }

  render() {
    const { error } = this.state;
    if (!error) return this.props.children;

    const { fallback } = this.props;
    if (typeof fallback === "function") return fallback(error);
    return fallback === undefined ? <DefaultFallback /> : fallback;
  }
}
