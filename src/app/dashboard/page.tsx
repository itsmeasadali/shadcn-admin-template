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
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CalendarDays, DollarSign, Users, TrendingUp, Activity, CreditCard, Download, ArrowUpRight } from "lucide-react"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
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

// Revenue data for area chart
const revenueData = [
  { month: "Jan", revenue: 42000, subscriptions: 28000, sales: 14000 },
  { month: "Feb", revenue: 45000, subscriptions: 31000, sales: 14000 },
  { month: "Mar", revenue: 48000, subscriptions: 33000, sales: 15000 },
  { month: "Apr", revenue: 52000, subscriptions: 36000, sales: 16000 },
  { month: "May", revenue: 55000, subscriptions: 38000, sales: 17000 },
  { month: "Jun", revenue: 58000, subscriptions: 40000, sales: 18000 },
]

const revenueChartConfig = {
  revenue: {
    label: "Total Revenue",
    theme: {
      light: "hsl(var(--chart-1))",
      dark: "hsl(var(--chart-1))",
    },
  },
  subscriptions: {
    label: "Subscriptions",
    theme: {
      light: "hsl(var(--chart-2))",
      dark: "hsl(var(--chart-2))",
    },
  },
  sales: {
    label: "One-time Sales",
    theme: {
      light: "hsl(var(--chart-3))",
      dark: "hsl(var(--chart-3))",
    },
  },
} satisfies ChartConfig

// Activity data for bar chart
const activityData = [
  { day: "Mon", users: 186, sessions: 245, pageViews: 892 },
  { day: "Tue", users: 205, sessions: 267, pageViews: 1024 },
  { day: "Wed", users: 237, sessions: 298, pageViews: 1156 },
  { day: "Thu", users: 173, sessions: 221, pageViews: 823 },
  { day: "Fri", users: 209, sessions: 276, pageViews: 1089 },
  { day: "Sat", users: 214, sessions: 285, pageViews: 1134 },
  { day: "Sun", users: 178, sessions: 234, pageViews: 876 },
]

const activityChartConfig = {
  users: {
    label: "Users",
    theme: {
      light: "hsl(var(--chart-1))",
      dark: "hsl(var(--chart-1))",
    },
  },
  sessions: {
    label: "Sessions",
    theme: {
      light: "hsl(var(--chart-2))",
      dark: "hsl(var(--chart-2))",
    },
  },
  pageViews: {
    label: "Page Views",
    theme: {
      light: "hsl(var(--chart-3))",
      dark: "hsl(var(--chart-3))",
    },
  },
} satisfies ChartConfig

export default function DashboardPage() {
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
                <BreadcrumbLink href="#">
                  Dashboard
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Overview</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">
                Welcome back! Here's what's happening with your business.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button size="sm">
                <TrendingUp className="h-4 w-4 mr-2" />
                View Reports
              </Button>
            </div>
          </div>

          {/* Metrics Cards */}
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
                <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2,350</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+180.1%</span> from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Sales</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12,234</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+19%</span> from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+573</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+201</span> since last hour
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Charts and Data Section */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
                <div className="grid flex-1 gap-1">
                  <CardTitle>Revenue Overview</CardTitle>
                  <CardDescription>Monthly revenue performance and trends</CardDescription>
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
                  config={revenueChartConfig}
                  className="aspect-auto h-[250px] w-full"
                >
                  <AreaChart data={revenueData}>
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
                      <linearGradient id="fillSubscriptions" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="var(--color-subscriptions)"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="var(--color-subscriptions)"
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
                      dataKey="subscriptions"
                      type="natural"
                      fill="url(#fillSubscriptions)"
                      stroke="var(--color-subscriptions)"
                      stackId="a"
                    />
                    <Area
                      dataKey="sales"
                      type="natural"
                      fill="var(--color-sales)"
                      stroke="var(--color-sales)"
                      stackId="a"
                    />
                    <ChartLegend content={<ChartLegendContent />} />
                  </AreaChart>
                </ChartContainer>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Weekly Activity</CardTitle>
                <CardDescription>User engagement metrics for this week</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={activityChartConfig}
                  className="aspect-auto h-[250px] w-full"
                >
                  <BarChart data={activityData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="day"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent indicator="dashed" />}
                    />
                    <Bar dataKey="users" fill="var(--color-users)" radius={4} />
                    <Bar dataKey="sessions" fill="var(--color-sessions)" radius={4} />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          {/* Additional Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Revenue Breakdown</CardTitle>
                <CardDescription>
                  Revenue sources and distribution
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">Subscriptions</span>
                    </div>
                    <span className="text-sm font-medium">$28,450</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">One-time Sales</span>
                    </div>
                    <span className="text-sm font-medium">$12,650</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm">Services</span>
                    </div>
                    <span className="text-sm font-medium">$4,120</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Quick Actions</CardTitle>
                <CardDescription>
                  Common tasks and shortcuts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="h-4 w-4 mr-2" />
                    Add New Customer
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Process Payment
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Generate Report
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Recent Transactions</CardTitle>
                <CardDescription>
                  Latest payment activities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="text-xs">AC</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">Acme Corp</span>
                    </div>
                    <span className="text-sm font-medium text-green-600">+$2,500</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="text-xs">TC</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">Tech Co</span>
                    </div>
                    <span className="text-sm font-medium text-green-600">+$1,200</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="text-xs">DS</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">Design Studio</span>
                    </div>
                    <span className="text-sm font-medium text-green-600">+$800</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Performance</CardTitle>
                <CardDescription>
                  Key performance indicators
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span>Customer Satisfaction</span>
                      <span>94%</span>
                    </div>
                    <Progress value={94} className="h-2" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span>Revenue Target</span>
                      <span>78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span>User Retention</span>
                      <span>87%</span>
                    </div>
                    <Progress value={87} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
