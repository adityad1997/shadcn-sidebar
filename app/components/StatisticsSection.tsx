'use client'

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { PieChart, Pie, Label, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
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
  { name: "Accepted", count: 790, fill: "#7ED321" },       // Green
  { name: "Rejected", count: 115, fill: "#D0021B" },       // Red
]

// Bar chart data for 7 days (Accepted vs. Rejected)
const barChartData = [
  { day: "Day 1", accepted: 108, rejected: 17 },
  { day: "Day 2", accepted: 119, rejected: 21 },
  { day: "Day 3", accepted: 131, rejected: 22 },
  { day: "Day 4", accepted: 99, rejected: 9 },
  { day: "Day 5", accepted: 106, rejected: 13 },
  { day: "Day 6", accepted: 116, rejected: 18 },
  { day: "Day 7", accepted: 111, rejected: 15 },
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
    <div className="flex flex-col gap-8 items-start mb-8">
      {/* Right column - Pie chart */}
      <div className="flex gap-8 w-full">
        <div className="w-1/3">
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
                Accepted entries up by 5.2% from last week <TrendingUp className="h-4 w-4" />
              </div>
            </CardFooter>
          </Card>
        </div>

        {/* New Card - 7 Day Bar Chart */}
        <div className="w-2/3">
          <Card className="h-[350px]"> {/* Set fixed height here */}
            <CardHeader>
              <CardTitle>7-Day Entries Status</CardTitle>
              <CardDescription>Accepted vs Rejected entries over the last 7 days</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={barChartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="accepted" fill="#7ED321" />
                  <Bar dataKey="rejected" fill="#D0021B" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
