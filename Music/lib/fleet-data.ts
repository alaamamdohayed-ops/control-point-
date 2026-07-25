export type VanStatus = "Operational" | "Needs Service" | "Broken Down"

export type Van = {
  id: string
  driver: string
  status: VanStatus
  battery: number
  zone: string
}

export const fleetSummary = {
  total: 40,
  operational: 27,
  needsService: 9,
  urgentAlerts: 7,
  broken: 4,
  lowBattery: 3,
}

export const fleetVans: Van[] = [
  { id: "VAN-01", driver: "Amir Hassan", status: "Operational", battery: 82, zone: "North" },
  { id: "VAN-03", driver: "Omar Farouk", status: "Needs Service", battery: 54, zone: "South" },
  { id: "VAN-07", driver: "Khaled Wael", status: "Broken Down", battery: 12, zone: "South" },
  { id: "VAN-12", driver: "Tariq Aziz", status: "Broken Down", battery: 14, zone: "Central" },
  { id: "VAN-16", driver: "Ziad Ramzy", status: "Operational", battery: 11, zone: "North" },
  { id: "VAN-30", driver: "Ramy Fouad", status: "Operational", battery: 13, zone: "West" },
  { id: "VAN-40", driver: "Hazem Fekry", status: "Operational", battery: 9, zone: "West" },
]

export const statusBreakdown = [
  { name: "Operational", value: 27, color: "var(--color-success)" },
  { name: "Needs Service", value: 9, color: "var(--color-warning)" },
  { name: "Broken Down", value: 4, color: "var(--color-danger)" },
]

// Battery trend over the last 24 hours for VAN-16
export const batteryTrend = [
  { time: "00:00", battery: 100 },
  { time: "04:00", battery: 84 },
  { time: "08:00", battery: 68 },
  { time: "12:00", battery: 52 },
  { time: "16:00", battery: 34 },
  { time: "NOW", battery: 11 },
]

export const vanDetail = {
  id: "VAN-16",
  model: "Ford E-Transit (2023)",
  driver: "Ziad Ramzy",
  zone: "North (Route N-Loop 3)",
  cargo: "380 kg",
  currentBattery: 11,
  odometer: "48,210 km",
  cargoLoad: "380 kg / 600 kg (63%)",
  lastCheck: "4 minutes ago",
}

export const eventLogs = [
  {
    date: "Today, 08:15 AM",
    detail: "Battery dropped below 15% - System Alert Generated",
  },
  {
    date: "Yesterday, 05:30 PM",
    detail: "Completed Route N-Loop 2 - 110 km traveled",
  },
  {
    date: "15 Jul 2026",
    detail: "Scheduled Brake Pad & Tire Inspection - Passed",
  },
  {
    date: "02 Jun 2026",
    detail: "Routine EV Battery Health Diagnostic - 96% Health",
  },
]
