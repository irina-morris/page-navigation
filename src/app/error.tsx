"use client";

import { useEffect } from "react";

interface ErrorBoundaryProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("ErrorBoundary caught an error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6 text-center">
        <h2 className="text-white text-2xl font-bold">Something went wrong!</h2>
        <p className="text-slate-400">
          {error.message || "An unexpected error occurred. Please try again."}
        </p>
        <div className="space-y-3">
          <button
            type="button"
            onClick={() => reset()}
            className="block w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-medium px-6 py-2 rounded-lg transition-colors"
          >
            Try Again
          </button>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="block w-full bg-slate-600 hover:bg-slate-500 text-white font-medium px-6 py-2 rounded-lg transition-colors"
          >
            Refresh Page
          </button>
        </div>
      </div>
    </div>
  );
}
