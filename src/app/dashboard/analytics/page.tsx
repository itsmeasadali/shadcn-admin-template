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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  Users, 
  DollarSign, 
  ShoppingCart, 
  Target,
  Calendar,
  Download,
  Filter,
  RefreshCw,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Eye,
  MousePointer,
  Clock,
  Zap
} from "lucide-react"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis, YAxis, Pie, PieChart, Cell } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// Visitor trends data
const visitorTrendsData = [
  { month: "Jan", visitors: 12543, sessions: 18765, pageViews: 45632 },
  { month: "Feb", visitors: 13876, sessions: 20234, pageViews: 52143 },
  { month: "Mar", visitors: 15234, sessions: 22876, pageViews: 58976 },
  { month: "Apr", visitors: 14567, sessions: 21543, pageViews: 54321 },
  { month: "May", visitors: 16789, sessions: 24567, pageViews: 62345 },
  { month: "Jun", visitors: 18234, sessions: 26789, pageViews: 68754 },
]

const visitorTrendsConfig = {
  visitors: {
    label: "Visitors",
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

// Device breakdown data
const deviceData = [
  { device: "Desktop", users: 15234, fill: "hsl(var(--chart-1))" },
  { device: "Mobile", users: 12876, fill: "hsl(var(--chart-2))" },
  { device: "Tablet", users: 4567, fill: "hsl(var(--chart-3))" },
  { device: "Other", users: 2345, fill: "hsl(var(--chart-4))" },
]

const deviceConfig = {
  users: {
    label: "Users",
  },
  desktop: {
    label: "Desktop",
    theme: {
      light: "hsl(var(--chart-1))",
      dark: "hsl(var(--chart-1))",
    },
  },
  mobile: {
    label: "Mobile",
    theme: {
      light: "hsl(var(--chart-2))",
      dark: "hsl(var(--chart-2))",
    },
  },
  tablet: {
    label: "Tablet",
    theme: {
      light: "hsl(var(--chart-3))",
      dark: "hsl(var(--chart-3))",
    },
  },
  other: {
    label: "Other",
    theme: {
      light: "hsl(var(--chart-4))",
      dark: "hsl(var(--chart-4))",
    },
  },
} satisfies ChartConfig

// Conversion funnel data
const conversionData = [
  { stage: "Visitors", count: 35776, percentage: 100 },
  { stage: "Leads", count: 8944, percentage: 25 },
  { stage: "Prospects", count: 3578, percentage: 10 },
  { stage: "Customers", count: 1789, percentage: 5 },
]

const conversionConfig = {
  count: {
    label: "Count",
    theme: {
      light: "hsl(var(--chart-1))",
      dark: "hsl(var(--chart-1))",
    },
  },
} satisfies ChartConfig

const trafficData = [
  { source: 'Organic Search', visitors: 12543, percentage: 35 },
  { source: 'Direct', visitors: 8976, percentage: 25 },
  { source: 'Social Media', visitors: 6234, percentage: 17 },
  { source: 'Email', visitors: 4567, percentage: 13 },
  { source: 'Paid Ads', visitors: 3456, percentage: 10 }
]

export default function AnalyticsPage() {
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
                <BreadcrumbLink href="/dashboard">
                  Dashboard
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Analytics</BreadcrumbPage>
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
              <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
              <p className="text-muted-foreground">
                Comprehensive insights into your business performance and growth metrics.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Select defaultValue="30d">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7d">Last 7 days</SelectItem>
                  <SelectItem value="30d">Last 30 days</SelectItem>
                  <SelectItem value="90d">Last 90 days</SelectItem>
                  <SelectItem value="1y">Last year</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button variant="outline" size="sm">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$765,000</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                  <span className="text-green-600">+12.5%</span> from last month
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24.8%</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                  <span className="text-green-600">+2.1%</span> from last month
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Visitors</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">35,776</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                  <span className="text-green-600">+18.2%</span> from last month
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Bounce Rate</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">32.4%</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendingDown className="h-3 w-3 mr-1 text-green-500" />
                  <span className="text-green-600">-5.1%</span> from last month
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Analytics Charts */}
          <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
            <Card>
              <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
                <div className="grid flex-1 gap-1">
                  <CardTitle>Visitor Trends</CardTitle>
                  <CardDescription>Monthly visitor analytics and engagement metrics</CardDescription>
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
                  config={visitorTrendsConfig}
                  className="aspect-auto h-[250px] w-full"
                >
                  <AreaChart data={visitorTrendsData}>
                    <defs>
                      <linearGradient id="fillVisitors" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="var(--color-visitors)"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="var(--color-visitors)"
                          stopOpacity={0.1}
                        />
                      </linearGradient>
                      <linearGradient id="fillSessions" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="var(--color-sessions)"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="var(--color-sessions)"
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
                      dataKey="visitors"
                      type="natural"
                      fill="url(#fillVisitors)"
                      stroke="var(--color-visitors)"
                      stackId="a"
                    />
                    <Area
                      dataKey="sessions"
                      type="natural"
                      fill="url(#fillSessions)"
                      stroke="var(--color-sessions)"
                      stackId="a"
                    />
                    <ChartLegend content={<ChartLegendContent />} />
                  </AreaChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Device Breakdown</CardTitle>
                <CardDescription>Visitor distribution by device type</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={deviceConfig}
                  className="mx-auto aspect-square max-h-[250px]"
                >
                  <PieChart>
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent hideLabel />}
                    />
                    <Pie
                      data={deviceData}
                      dataKey="users"
                      nameKey="device"
                      innerRadius={60}
                      strokeWidth={5}
                    >
                      {deviceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <ChartLegend
                      content={<ChartLegendContent nameKey="device" />}
                      className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
                    />
                  </PieChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          {/* Conversion Funnel */}
          <Card>
            <CardHeader>
              <CardTitle>Conversion Funnel</CardTitle>
              <CardDescription>
                User journey from visitor to customer
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={conversionConfig}
                className="aspect-auto h-[300px] w-full"
              >
                <BarChart data={conversionData} layout="horizontal">
                  <CartesianGrid horizontal={false} />
                  <XAxis type="number" tickLine={false} axisLine={false} />
                  <YAxis
                    dataKey="stage"
                    type="category"
                    tickLine={false}
                    axisLine={false}
                    width={80}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="line" />}
                  />
                  <Bar dataKey="count" fill="var(--color-count)" radius={4} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Traffic Sources */}
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Traffic Sources</CardTitle>
                <CardDescription>
                  Where your visitors are coming from
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trafficData.map((source, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" style={{ backgroundColor: `var(--chart-${index + 1})` }}></div>
                        <span className="text-sm font-medium">{source.source}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">{source.visitors.toLocaleString()}</div>
                        <div className="text-xs text-muted-foreground">{source.percentage}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top Pages</CardTitle>
                <CardDescription>
                  Most visited pages on your site
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">/dashboard</span>
                    <div className="text-right">
                      <div className="text-sm font-medium">12,543</div>
                      <div className="text-xs text-muted-foreground">28%</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">/products</span>
                    <div className="text-right">
                      <div className="text-sm font-medium">8,976</div>
                      <div className="text-xs text-muted-foreground">20%</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">/pricing</span>
                    <div className="text-right">
                      <div className="text-sm font-medium">6,234</div>
                      <div className="text-xs text-muted-foreground">14%</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">/about</span>
                    <div className="text-right">
                      <div className="text-sm font-medium">4,567</div>
                      <div className="text-xs text-muted-foreground">10%</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">/contact</span>
                    <div className="text-right">
                      <div className="text-sm font-medium">3,456</div>
                      <div className="text-xs text-muted-foreground">8%</div>
                    </div>
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