"use client"

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"
import { statusBreakdown, fleetSummary } from "@/lib/fleet-data"

const legend = [
  { label: "Operational", value: 27, pct: "67.5%", color: "text-success" },
  { label: "Needs Service", value: 9, pct: "22.5%", color: "text-warning" },
  { label: "Broken Down", value: 4, pct: "10.0%", color: "text-danger" },
]

export function StatusBreakdown() {
  return (
    <section className="flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm">
      <h2 className="text-sm font-semibold text-foreground">Fleet Status Breakdown</h2>

      <div className="relative mx-auto mt-4 h-52 w-52">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={statusBreakdown}
              dataKey="value"
              nameKey="name"
              innerRadius={62}
              outerRadius={92}
              paddingAngle={2}
              startAngle={90}
              endAngle={-270}
              stroke="none"
            >
              {statusBreakdown.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-foreground">{fleetSummary.total}</span>
          <span className="text-sm font-medium text-muted-foreground">Total</span>
        </div>
      </div>

      <ul className="mt-6 space-y-2">
        {legend.map((item) => (
          <li key={item.label} className={`text-sm font-semibold ${item.color}`}>
            {item.label} {item.value} ({item.pct})
          </li>
        ))}
      </ul>
    </section>
  )
}
