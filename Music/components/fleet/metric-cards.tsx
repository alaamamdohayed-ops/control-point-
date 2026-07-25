import { fleetSummary } from "@/lib/fleet-data"
import { AlertTriangle } from "lucide-react"

export function MetricCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <MetricCard label="Total Vans" value={`${fleetSummary.total}`} sub="100% Active Fleet" />
      <MetricCard
        label="Operational"
        value={`${fleetSummary.operational}`}
        sub="67.5% Ready"
        valueClass="text-success"
        subClass="text-success"
      />
      <MetricCard
        label="Needs Service"
        value={`${fleetSummary.needsService}`}
        sub="22.5% Scheduled"
        valueClass="text-warning"
        subClass="text-warning"
      />
      <div className="flex flex-col justify-between rounded-2xl border border-danger/40 bg-danger-muted p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-wide text-danger/80">Urgent Alerts</p>
          <AlertTriangle className="size-4 text-danger" aria-hidden="true" />
        </div>
        <p className="mt-2 text-2xl font-bold text-danger">{fleetSummary.urgentAlerts} Action Needed</p>
        <p className="mt-1 text-xs font-medium text-danger/80">
          {fleetSummary.broken} Broken | {fleetSummary.lowBattery} Battery &lt;15%
        </p>
      </div>
    </div>
  )
}

function MetricCard({
  label,
  value,
  sub,
  valueClass = "text-foreground",
  subClass = "text-muted-foreground",
}: {
  label: string
  value: string
  sub: string
  valueClass?: string
  subClass?: string
}) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-5 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className={`mt-2 text-3xl font-bold ${valueClass}`}>{value}</p>
      <p className={`mt-1 text-xs font-medium ${subClass}`}>{sub}</p>
    </div>
  )
}
