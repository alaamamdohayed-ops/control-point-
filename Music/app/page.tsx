import { DashboardHeader } from "@/components/fleet/dashboard-header"
import { MetricCards } from "@/components/fleet/metric-cards"
import { StatusBreakdown } from "@/components/fleet/status-breakdown"
import { VehiclesTable } from "@/components/fleet/vehicles-table"
import { VanDetail } from "@/components/fleet/van-detail"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      {/* Screen 1: Fleet Dashboard */}
      <section id="fleet-dashboard" className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 md:px-6">
        <DashboardHeader />
        <MetricCards />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_2fr]">
          <StatusBreakdown />
          <VehiclesTable />
        </div>
      </section>

      <div className="h-2 bg-muted" />

      {/* Screen 2: Van Detail */}
      <section className="mx-auto max-w-6xl px-4 py-8 md:px-6">
        <VanDetail />
      </section>
    </main>
  )
}
