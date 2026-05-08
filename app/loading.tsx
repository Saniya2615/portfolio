export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-6">
          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary border-r-primary animate-spin" />
          
          {/* Inner Ring */}
          <div 
            className="absolute inset-2 rounded-full border-2 border-transparent border-b-accent border-l-accent animate-spin"
            style={{ animationDirection: 'reverse', animationDuration: '1s' }}
          />
          
          {/* Center */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">S</span>
          </div>
        </div>

        <h2 className="text-xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
          Saniya S
        </h2>
        <p className="text-muted-foreground">Loading...</p>
      </div>
    </div>
  )
}
