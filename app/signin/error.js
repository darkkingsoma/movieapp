"use client";

export default function Error({ error, reset }) {
  return (
    <div style={{ background: '#1a1a1a', color: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h2>Sign In Error</h2>
      <pre style={{ color: '#ff5555', margin: '1em 0' }}>{error?.message || String(error)}</pre>
      <button
        style={{ padding: '0.5em 1.5em', background: '#ff5555', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
} 