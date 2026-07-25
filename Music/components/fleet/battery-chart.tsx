"use client"

import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { batteryTrend } from "@/lib/fleet-data"

export function BatteryChart() {
  return (
    <div className="h-56 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={batteryTrend} margin={{ top: 8, right: 12, left: -12, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
          <XAxis
            dataKey="time"
            tick={{ fontSize: 11, fill: "var(--color-muted-foreground)" }}
            tickLine={false}
            axisLine={{ stroke: "var(--color-border)" }}
          />
          <YAxis
            domain={[0, 100]}
            ticks={[20, 40, 60, 80, 100]}
            tick={{ fontSize: 11, fill: "var(--color-muted-foreground)" }}
            tickLine={false}
            axisLine={{ stroke: "var(--color-border)" }}
          />
          <Line
            type="linear"
            dataKey="battery"
            stroke="var(--color-danger)"
            strokeWidth={2.5}
            dot={{ r: 4, fill: "var(--color-danger)", strokeWidth: 0 }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
