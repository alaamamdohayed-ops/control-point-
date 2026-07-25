import { Search, SlidersHorizontal } from "lucide-react"

export function DashboardHeader() {
  return (
    <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <div className="relative w-full md:max-w-sm">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
        <input
          type="search"
          placeholder="Search Van ID, Driver.."
          aria-label="Search Van ID or Driver"
          className="w-full rounded-xl border border-border bg-card py-2.5 pl-9 pr-3 text-sm text-foreground shadow-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-info/40"
        />
      </div>

      <div className="flex items-center gap-2 rounded-xl border border-info/30 bg-info/5 px-3 py-2 text-xs font-medium text-info">
        <SlidersHorizontal className="size-3.5" aria-hidden="true" />
        <span>Status: All</span>
        <span className="text-info/40">|</span>
        <span>Zone: All</span>
        <span className="text-info/40">|</span>
        <span>Battery: Any</span>
      </div>

      <div className="flex items-center gap-2 text-sm font-medium text-success">
        <span className="relative flex size-2.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-70" />
          <span className="relative inline-flex size-2.5 rounded-full bg-success" />
        </span>
        Live • Updated 2m ago
      </div>
    </header>
  )
}
