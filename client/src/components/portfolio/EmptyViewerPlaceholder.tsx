export function EmptyViewerPlaceholder() {
  return (
    <div className="bg-muted rounded-lg border-2 border-dashed h-full flex items-center justify-center">
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2">3D Model Viewer</h3>
        <p className="text-muted-foreground">
          STEP/STP file will appear here once uploaded.
        </p>
      </div>
    </div>
  );
}
