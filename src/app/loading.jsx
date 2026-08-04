export default function Loading() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center gap-4 bg-background">
      <div
        className="h-12 w-12 animate-spin rounded-full border-4 border-accent-soft border-t-accent"
        role="status"
        aria-label="Loading"
      />
      <p className="text-sm text-muted">Loading ReSell Hub...</p>
    </div>
  );
}