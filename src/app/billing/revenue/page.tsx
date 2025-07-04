"use client"

import * as React from "react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DollarSign, TrendingUp, TrendingDown, Calendar } from "lucide-react"
import { Area, AreaChart, Line, LineChart, Pie, PieChart, Cell, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Revenue trends data
const revenueTrendsData = [
  { month: "Jan", revenue: 42000, mrr: 28000, arr: 336000, growth: 8.5 },
  { month: "Feb", revenue: 45000, mrr: 31000, arr: 372000, growth: 7.1 },
  { month: "Mar", revenue: 48000, mrr: 33000, arr: 396000, growth: 6.7 },
  { month: "Apr", revenue: 52000, mrr: 36000, arr: 432000, growth: 8.3 },
  { month: "May", revenue: 55000, mrr: 38000, arr: 456000, growth: 5.8 },
  { month: "Jun", revenue: 58000, mrr: 40000, arr: 480000, growth: 5.5 },
]

const revenueTrendsConfig = {
  revenue: {
    label: "Total Revenue",
    theme: {
      light: "hsl(var(--chart-1))",
      dark: "hsl(var(--chart-1))",
    },
  },
  mrr: {
    label: "Monthly Recurring Revenue",
    theme: {
      light: "hsl(var(--chart-2))",
      dark: "hsl(var(--chart-2))",
    },
  },
  arr: {
    label: "Annual Recurring Revenue",
    theme: {
      light: "hsl(var(--chart-3))",
      dark: "hsl(var(--chart-3))",
    },
  },
} satisfies ChartConfig

// Revenue breakdown data
const revenueBreakdownData = [
  { source: "Subscriptions", revenue: 35000, fill: "hsl(var(--chart-1))" },
  { source: "One-time Sales", revenue: 15000, fill: "hsl(var(--chart-2))" },
  { source: "Services", revenue: 8000, fill: "hsl(var(--chart-3))" },
  { source: "Partnerships", revenue: 5000, fill: "hsl(var(--chart-4))" },
]

const revenueBreakdownConfig = {
  revenue: {
    label: "Revenue",
  },
  subscriptions: {
    label: "Subscriptions",
    theme: {
      light: "hsl(var(--chart-1))",
      dark: "hsl(var(--chart-1))",
    },
  },
  sales: {
    label: "One-time Sales",
    theme: {
      light: "hsl(var(--chart-2))",
      dark: "hsl(var(--chart-2))",
    },
  },
  services: {
    label: "Services",
    theme: {
      light: "hsl(var(--chart-3))",
      dark: "hsl(var(--chart-3))",
    },
  },
  partnerships: {
    label: "Partnerships",
    theme: {
      light: "hsl(var(--chart-4))",
      dark: "hsl(var(--chart-4))",
    },
  },
} satisfies ChartConfig

// Growth rate data
const growthRateData = [
  { month: "Jan", growthRate: 8.5, target: 10 },
  { month: "Feb", growthRate: 7.1, target: 10 },
  { month: "Mar", growthRate: 6.7, target: 10 },
  { month: "Apr", growthRate: 8.3, target: 10 },
  { month: "May", growthRate: 5.8, target: 10 },
  { month: "Jun", growthRate: 5.5, target: 10 },
]

const growthRateConfig = {
  growthRate: {
    label: "Growth Rate",
    theme: {
      light: "hsl(var(--chart-1))",
      dark: "hsl(var(--chart-1))",
    },
  },
  target: {
    label: "Target",
    theme: {
      light: "hsl(var(--chart-2))",
      dark: "hsl(var(--chart-2))",
    },
  },
} satisfies ChartConfig

export default function RevenuePage() {
  const [timeRange, setTimeRange] = React.useState("6m")

  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/billing">
                  Billing
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Revenue</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Revenue</h1>
              <p className="text-muted-foreground">
                Track and analyze your revenue performance
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button size="sm">
                <TrendingUp className="h-4 w-4 mr-2" />
                Generate Report
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+20.1%</span> from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Monthly Recurring Revenue</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$12,234</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+15.3%</span> from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Annual Recurring Revenue</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$146,808</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+18.7%</span> from last year
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Revenue Growth</CardTitle>
                <TrendingDown className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12.5%</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-red-600">-2.3%</span> from last quarter
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Revenue Trends Chart */}
          <Card>
            <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
              <div className="grid flex-1 gap-1">
                <CardTitle>Revenue Trends</CardTitle>
                <CardDescription>Monthly revenue performance and growth metrics</CardDescription>
              </div>
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger
                  className="w-[160px] rounded-lg sm:ml-auto"
                  aria-label="Select a value"
                >
                  <SelectValue placeholder="Last 6 months" />
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                  <SelectItem value="6m" className="rounded-lg">
                    Last 6 months
                  </SelectItem>
                  <SelectItem value="3m" className="rounded-lg">
                    Last 3 months
                  </SelectItem>
                  <SelectItem value="1m" className="rounded-lg">
                    Last month
                  </SelectItem>
                </SelectContent>
              </Select>
            </CardHeader>
            <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
              <ChartContainer
                config={revenueTrendsConfig}
                className="aspect-auto h-[350px] w-full"
              >
                <AreaChart data={revenueTrendsData}>
                  <defs>
                    <linearGradient id="fillRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="5%"
                        stopColor="var(--color-revenue)"
                        stopOpacity={0.8}
                      />
                      <stop
                        offset="95%"
                        stopColor="var(--color-revenue)"
                        stopOpacity={0.1}
                      />
                    </linearGradient>
                    <linearGradient id="fillMrr" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="5%"
                        stopColor="var(--color-mrr)"
                        stopOpacity={0.8}
                      />
                      <stop
                        offset="95%"
                        stopColor="var(--color-mrr)"
                        stopOpacity={0.1}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    minTickGap={32}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={
                      <ChartTooltipContent
                        indicator="dot"
                        labelFormatter={(value) => `${value} 2024`}
                      />
                    }
                  />
                  <Area
                    dataKey="mrr"
                    type="natural"
                    fill="url(#fillMrr)"
                    stroke="var(--color-mrr)"
                    stackId="a"
                  />
                  <Area
                    dataKey="revenue"
                    type="natural"
                    fill="url(#fillRevenue)"
                    stroke="var(--color-revenue)"
                    stackId="a"
                  />
                  <ChartLegend content={<ChartLegendContent />} />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Revenue Breakdown and Growth Rate */}
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Breakdown</CardTitle>
                <CardDescription>Revenue distribution by source</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={revenueBreakdownConfig}
                  className="mx-auto aspect-square max-h-[300px]"
                >
                  <PieChart>
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent hideLabel />}
                    />
                    <Pie
                      data={revenueBreakdownData}
                      dataKey="revenue"
                      nameKey="source"
                      innerRadius={60}
                      strokeWidth={5}
                    >
                      {revenueBreakdownData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <ChartLegend
                      content={<ChartLegendContent nameKey="source" />}
                      className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
                    />
                  </PieChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Growth Rate</CardTitle>
                <CardDescription>Monthly growth rate vs target</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={growthRateConfig}
                  className="aspect-auto h-[300px] w-full"
                >
                  <LineChart data={growthRateData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                    />
                    <YAxis
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                      tickFormatter={(value) => `${value}%`}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent />}
                    />
                    <Line
                      dataKey="growthRate"
                      type="monotone"
                      stroke="var(--color-growthRate)"
                      strokeWidth={2}
                      dot={{ fill: "var(--color-growthRate)" }}
                    />
                    <Line
                      dataKey="target"
                      type="monotone"
                      stroke="var(--color-target)"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      dot={{ fill: "var(--color-target)" }}
                    />
                  </LineChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
} 