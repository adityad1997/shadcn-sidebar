// components/StatisticsSection.js
'use client'

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { PieChart, Pie, Label } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../components/ui/chart"

// Data for statistics and chart
const statsData = [
  { name: "Total Entries", count: 1000 },
  { name: "Accepted", count: 700 },
  { name: "Rejected", count: 300 },
]

// Pie chart data with colors for each entry
const chartData = [
  { name: "Total Entries", count: 1000, fill: "#4A90E2" }, // Blue
  { name: "Accepted", count: 700, fill: "#7ED321" },       // Green
  { name: "Rejected", count: 300, fill: "#D0021B" },       // Red
]

// Minimal chartConfig to avoid TypeError in ChartContainer
const chartConfig = {
  totalEntries: { label: "Total Entries", color: "#4A90E2" },
  accepted: { label: "Accepted", color: "#7ED321" },
  rejected: { label: "Rejected", color: "#D0021B" },
}

export function StatisticsSection() {
  const totalEntries = React.useMemo(() => {
    return statsData.reduce((acc, curr) => acc + curr.count, 0)
  }, [])

  return (
    <div className="flex gap-8 items-start mb-8">
      {/* Left column - Statistics table */}
      <div className="w-1/2">
        <Card className="h-[350px]"> {/* Set fixed height here */}
          <CardHeader>
            <CardTitle>Statistics Overview</CardTitle>
            <CardDescription>Summary of entry statuses</CardDescription>
          </CardHeader>
          <CardContent>
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="py-2">Status</th>
                  <th className="py-2">Count</th>
                </tr>
              </thead>
              <tbody>
                {statsData.map((stat) => (
                  <tr key={stat.name}>
                    <td className="py-2">{stat.name}</td>
                    <td className="py-2">{stat.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>

      {/* Right column - Pie chart */}
      <div className="w-1/2">
        <Card className="h-[350px] flex flex-col"> {/* Set fixed height here */}
          <CardHeader className="items-center pb-0">
            <CardTitle>Entries Status Chart</CardTitle>
            <CardDescription>Visualization of entry statuses</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 pb-0">
            <ChartContainer
              config={chartConfig} // Minimal config to prevent TypeError
              className="mx-auto aspect-square max-h-[250px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={chartData}
                  dataKey="count"
                  nameKey="name"
                  innerRadius={60}
                  strokeWidth={5}
                >
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground text-3xl font-bold"
                            >
                              {totalEntries.toLocaleString()}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="fill-muted-foreground"
                            >
                              Entries
                            </tspan>
                          </text>
                        )
                      }
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col gap-2 text-sm">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
