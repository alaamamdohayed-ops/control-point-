import { fleetVans, type VanStatus } from "@/lib/fleet-data"
import { Download } from "lucide-react"

const statusColor: Record<VanStatus, string> = {
  Operational: "text-success",
  "Needs Service": "text-warning",
  "Broken Down": "text-danger",
}

export function VehiclesTable() {
  return (
    <section className="flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-foreground">Fleet Vehicles List (40 Vans)</h2>
        <button
          type="button"
          className="inline-flex items-center gap-1.5 rounded-lg border border-info/30 bg-info/5 px-3 py-1.5 text-xs font-semibold text-info transition-colors hover:bg-info/10"
        >
          <Download className="size-3.5" aria-hidden="true" />
          Export CSV
        </button>
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-border text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">
              <th scope="col" className="pb-3 pr-4 font-medium">Van ID</th>
              <th scope="col" className="pb-3 pr-4 font-medium">Driver</th>
              <th scope="col" className="pb-3 pr-4 font-medium">Status</th>
              <th scope="col" className="pb-3 pr-4 font-medium">Battery %</th>
              <th scope="col" className="pb-3 font-medium">Zone</th>
            </tr>
          </thead>
          <tbody>
            {fleetVans.map((van) => {
              const low = van.battery < 15
              return (
                <tr key={van.id} className="border-b border-border/60 last:border-0">
                  <td className="py-3 pr-4 font-semibold text-foreground">{van.id}</td>
                  <td className="py-3 pr-4 text-muted-foreground">{van.driver}</td>
                  <td className={`py-3 pr-4 font-semibold ${statusColor[van.status]}`}>{van.status}</td>
                  <td className={`py-3 pr-4 font-semibold ${low ? "text-danger" : "text-foreground"}`}>
                    {String(van.battery).padStart(2, "0")}%{low ? " [ALERT]" : ""}
                  </td>
                  <td className="py-3 text-muted-foreground">{van.zone}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <nav className="mt-4 flex items-center justify-between text-sm" aria-label="Table pagination">
        <button type="button" className="font-medium text-muted-foreground transition-colors hover:text-foreground">
          &lt; Previous
        </button>
        <span className="font-semibold text-foreground">Page 1 of 6</span>
        <button type="button" className="font-medium text-muted-foreground transition-colors hover:text-foreground">
          Next &gt;
        </button>
      </nav>
    </section>
  )
}
