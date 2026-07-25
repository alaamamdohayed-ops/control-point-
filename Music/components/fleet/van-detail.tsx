"use client"

import { useState } from "react"
import { ChevronLeft, Download, BatteryLow, CalendarPlus } from "lucide-react"
import { BatteryChart } from "@/components/fleet/battery-chart"
import { vanDetail, eventLogs } from "@/lib/fleet-data"

const tabs = ["Overview", "Maintenance History", "Activity Timeline"] as const

export function VanDetail() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Overview")

  return (
    <section className="flex flex-col gap-6">
      <a
        href="#fleet-dashboard"
        className="inline-flex w-fit items-center gap-1 text-sm font-semibold text-info transition-colors hover:text-info/80"
      >
        <ChevronLeft className="size-4" aria-hidden="true" />
        Back to Fleet Dashboard
      </a>

      {/* Info banner */}
      <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-lg font-bold text-foreground">
            {vanDetail.id} • {vanDetail.model}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Driver: {vanDetail.driver} | Zone: {vanDetail.zone} | Cargo: {vanDetail.cargo}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-lg border border-success/30 bg-success/5 px-3 py-1.5 text-xs font-semibold text-success transition-colors hover:bg-success/10"
          >
            <Download className="size-3.5" aria-hidden="true" />
            Export CSV
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-lg bg-danger px-3 py-1.5 text-xs font-semibold text-danger-foreground transition-colors hover:opacity-90"
          >
            <BatteryLow className="size-3.5" aria-hidden="true" />
            LOW BATTERY ALERT
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-lg bg-info px-3 py-1.5 text-xs font-semibold text-info-foreground transition-colors hover:opacity-90"
          >
            <CalendarPlus className="size-3.5" aria-hidden="true" />
            Schedule Service
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <LeftColumn />
        <RightColumn activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </section>
  )
}

function LeftColumn() {
  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-5 shadow-sm">
      <div>
        <h3 className="text-sm font-semibold text-foreground">Battery Trend Chart - Last 24 Hours</h3>
        <div className="mt-3">
          <BatteryChart />
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold text-danger">
          Current Battery Level: {vanDetail.currentBattery}% (Critical)
        </p>
        <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-danger"
            style={{ width: `${vanDetail.currentBattery}%` }}
            role="progressbar"
            aria-valuenow={vanDetail.currentBattery}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Current battery level"
          />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-foreground">Key Metrics Overview</h3>
        <dl className="mt-3 space-y-2 text-sm">
          <MetricRow label="Odometer Mileage" value={vanDetail.odometer} />
          <MetricRow label="Cargo Load" value={vanDetail.cargoLoad} />
          <MetricRow label="Last Diagnostic Check" value={vanDetail.lastCheck} />
        </dl>
      </div>
    </div>
  )
}

function MetricRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-border/60 pb-2 last:border-0 last:pb-0">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="font-medium text-foreground">{value}</dd>
    </div>
  )
}

function RightColumn({
  activeTab,
  setActiveTab,
}: {
  activeTab: (typeof tabs)[number]
  setActiveTab: (tab: (typeof tabs)[number]) => void
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
        <div role="tablist" className="flex flex-wrap items-center gap-6 border-b border-border pb-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={activeTab === tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm font-semibold transition-colors ${
                activeTab === tab ? "text-info" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              [ {tab} ]
            </button>
          ))}
        </div>

        <div className="mt-4">
          <h3 className="text-center text-sm font-bold text-foreground">Recent Maintenance &amp; Event Logs:</h3>
          <ul className="mt-4 space-y-3">
            {eventLogs.map((log) => (
              <li key={log.date}>
                <p className="text-sm font-bold text-foreground">{log.date}:</p>
                <p className="text-xs text-muted-foreground">{log.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ScheduleServiceForm />
    </div>
  )
}

function ScheduleServiceForm() {
  return (
    <form className="rounded-2xl border-2 border-info/40 bg-info/5 p-5">
      <h3 className="text-sm font-bold text-info">MODAL DIALOG: Schedule Service Form</h3>

      <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
        <label className="flex items-center gap-2 font-medium text-foreground">
          Select Date:
          <select
            defaultValue="23 Jul 2026"
            className="rounded-md border border-border bg-card px-2 py-1 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-info/40"
          >
            <option>23 Jul 2026</option>
            <option>24 Jul 2026</option>
            <option>25 Jul 2026</option>
          </select>
        </label>
        <label className="flex items-center gap-2 font-medium text-foreground">
          Priority:
          <select
            defaultValue="High"
            className="rounded-md border border-border bg-card px-2 py-1 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-info/40"
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </label>
      </div>

      <input
        type="text"
        aria-label="Service notes"
        defaultValue="Emergency battery charge & system review."
        placeholder="Service Notes"
        className="mt-4 w-full rounded-md border border-border bg-card px-3 py-2 text-sm text-muted-foreground outline-none focus-visible:ring-2 focus-visible:ring-info/40"
      />

      <div className="mt-4 flex items-center gap-4">
        <button
          type="submit"
          className="rounded-lg bg-success px-4 py-2 text-xs font-semibold text-success-foreground transition-colors hover:opacity-90"
        >
          [ Confirm Schedule ]
        </button>
        <button type="button" className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground">
          [ Cancel ]
        </button>
      </div>
    </form>
  )
}
