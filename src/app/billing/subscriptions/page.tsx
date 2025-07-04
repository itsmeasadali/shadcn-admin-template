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
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { 
  MoreHorizontal,
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  Users, 
  CreditCard, 
  Calendar, 
  Search, 
  Filter, 
  Plus, 
  Eye, 
  Edit, 
  Trash2, 
  Download,
  RefreshCw,
  Receipt,
  Mail,
  Pause,
  XCircle,
  BarChart3
} from "lucide-react"
import { Area, AreaChart, Line, LineChart, Pie, PieChart, Cell, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const subscriptions = [
  {
    id: 1,
    customer: "Acme Corporation",
    email: "billing@acme.com",
    plan: "Enterprise",
    status: "Active",
    amount: 299.00,
    billing: "Monthly",
    nextBilling: "2024-02-15",
    startDate: "2023-02-15",
    mrr: 299.00,
    seats: 50,
    usage: 85,
    paymentMethod: "Credit Card",
    lastPayment: "2024-01-15"
  },
  {
    id: 2,
    customer: "Tech Startup Inc",
    email: "finance@techstartup.com",
    plan: "Professional",
    status: "Active",
    amount: 99.00,
    billing: "Monthly",
    nextBilling: "2024-02-20",
    startDate: "2023-08-20",
    mrr: 99.00,
    seats: 15,
    usage: 92,
    paymentMethod: "Credit Card",
    lastPayment: "2024-01-20"
  },
  {
    id: 3,
    customer: "Global Solutions Ltd",
    email: "accounts@globalsolutions.com",
    plan: "Enterprise",
    status: "Past Due",
    amount: 299.00,
    billing: "Monthly",
    nextBilling: "2024-01-25",
    startDate: "2023-01-25",
    mrr: 299.00,
    seats: 75,
    usage: 78,
    paymentMethod: "Bank Transfer",
    lastPayment: "2023-12-25"
  },
  {
    id: 4,
    customer: "Creative Agency",
    email: "billing@creativeagency.com",
    plan: "Professional",
    status: "Cancelled",
    amount: 99.00,
    billing: "Monthly",
    nextBilling: "2024-02-10",
    startDate: "2023-05-10",
    mrr: 0,
    seats: 10,
    usage: 45,
    paymentMethod: "Credit Card",
    lastPayment: "2024-01-10"
  },
  {
    id: 5,
    customer: "E-commerce Plus",
    email: "support@ecommerceplus.com",
    plan: "Basic",
    status: "Active",
    amount: 29.00,
    billing: "Monthly",
    nextBilling: "2024-02-18",
    startDate: "2023-11-18",
    mrr: 29.00,
    seats: 5,
    usage: 67,
    paymentMethod: "Credit Card",
    lastPayment: "2024-01-18"
  },
  {
    id: 6,
    customer: "Marketing Pro",
    email: "billing@marketingpro.com",
    plan: "Professional",
    status: "Trial",
    amount: 0,
    billing: "Monthly",
    nextBilling: "2024-02-05",
    startDate: "2024-01-22",
    mrr: 0,
    seats: 8,
    usage: 34,
    paymentMethod: "None",
    lastPayment: "N/A"
  }
]

// MRR growth data
const mrrGrowthData = [
  { month: "Jan", mrr: 22000, newMrr: 3500, churnMrr: 800, netMrr: 2700 },
  { month: "Feb", mrr: 24700, newMrr: 4200, churnMrr: 950, netMrr: 3250 },
  { month: "Mar", mrr: 27950, newMrr: 3800, churnMrr: 750, netMrr: 3050 },
  { month: "Apr", mrr: 31000, newMrr: 4500, churnMrr: 1200, netMrr: 3300 },
  { month: "May", mrr: 34300, newMrr: 3900, churnMrr: 600, netMrr: 3300 },
  { month: "Jun", mrr: 37600, newMrr: 4100, churnMrr: 800, netMrr: 3300 },
]

const mrrGrowthConfig = {
  mrr: {
    label: "Total MRR",
    theme: {
      light: "hsl(var(--chart-1))",
      dark: "hsl(var(--chart-1))",
    },
  },
  newMrr: {
    label: "New MRR",
    theme: {
      light: "hsl(var(--chart-2))",
      dark: "hsl(var(--chart-2))",
    },
  },
  churnMrr: {
    label: "Churned MRR",
    theme: {
      light: "hsl(var(--chart-3))",
      dark: "hsl(var(--chart-3))",
    },
  },
} satisfies ChartConfig

// Subscription plans data
const subscriptionPlansData = [
  { plan: "Basic", subscribers: 245, fill: "hsl(var(--chart-1))" },
  { plan: "Professional", subscribers: 387, fill: "hsl(var(--chart-2))" },
  { plan: "Enterprise", subscribers: 156, fill: "hsl(var(--chart-3))" },
  { plan: "Custom", subscribers: 59, fill: "hsl(var(--chart-4))" },
]

const subscriptionPlansConfig = {
  subscribers: {
    label: "Subscribers",
  },
  basic: {
    label: "Basic",
    theme: {
      light: "hsl(var(--chart-1))",
      dark: "hsl(var(--chart-1))",
    },
  },
  professional: {
    label: "Professional",
    theme: {
      light: "hsl(var(--chart-2))",
      dark: "hsl(var(--chart-2))",
    },
  },
  enterprise: {
    label: "Enterprise",
    theme: {
      light: "hsl(var(--chart-3))",
      dark: "hsl(var(--chart-3))",
    },
  },
  custom: {
    label: "Custom",
    theme: {
      light: "hsl(var(--chart-4))",
      dark: "hsl(var(--chart-4))",
    },
  },
} satisfies ChartConfig

// Churn analysis data
const churnAnalysisData = [
  { month: "Jan", churnRate: 5.2, targetChurn: 5.0, newSubscribers: 45, cancelledSubscribers: 18 },
  { month: "Feb", churnRate: 4.8, targetChurn: 5.0, newSubscribers: 52, cancelledSubscribers: 21 },
  { month: "Mar", churnRate: 3.9, targetChurn: 5.0, newSubscribers: 48, cancelledSubscribers: 16 },
  { month: "Apr", churnRate: 4.5, targetChurn: 5.0, newSubscribers: 58, cancelledSubscribers: 24 },
  { month: "May", churnRate: 3.2, targetChurn: 5.0, newSubscribers: 47, cancelledSubscribers: 13 },
  { month: "Jun", churnRate: 4.1, targetChurn: 5.0, newSubscribers: 54, cancelledSubscribers: 19 },
]

const churnAnalysisConfig = {
  churnRate: {
    label: "Churn Rate",
    theme: {
      light: "hsl(var(--chart-1))",
      dark: "hsl(var(--chart-1))",
    },
  },
  targetChurn: {
    label: "Target Churn",
    theme: {
      light: "hsl(var(--chart-2))",
      dark: "hsl(var(--chart-2))",
    },
  },
} satisfies ChartConfig

export default function SubscriptionsPage() {
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
                <BreadcrumbPage>Subscriptions</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Subscriptions</h1>
              <p className="text-muted-foreground">
                Manage and track all customer subscriptions and billing cycles.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Subscription
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total MRR</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$25,890</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                  <span className="text-green-600">+8.2%</span> from last month
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Subscriptions</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">847</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                  <span className="text-green-600">+12.3%</span> from last month
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Churn Rate</CardTitle>
                <TrendingDown className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.1%</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendingDown className="h-3 w-3 mr-1 text-green-500" />
                  <span className="text-green-600">-0.8%</span> from last month
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Revenue Per User</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$30.56</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                  <span className="text-green-600">+2.1%</span> from last month
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Subscription Analytics */}
          <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>MRR Growth</CardTitle>
                <CardDescription>Monthly recurring revenue trends and growth</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={mrrGrowthConfig}
                  className="aspect-auto h-[300px] w-full"
                >
                  <AreaChart data={mrrGrowthData}>
                    <defs>
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
                      <linearGradient id="fillNewMrr" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="var(--color-newMrr)"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="var(--color-newMrr)"
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
                      dataKey="newMrr"
                      type="natural"
                      fill="url(#fillNewMrr)"
                      stroke="var(--color-newMrr)"
                      stackId="b"
                    />
                    <ChartLegend content={<ChartLegendContent />} />
                  </AreaChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Subscription Plans</CardTitle>
                <CardDescription>Distribution of subscribers by plan type</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={subscriptionPlansConfig}
                  className="mx-auto aspect-square max-h-[300px]"
                >
                  <PieChart>
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent hideLabel />}
                    />
                    <Pie
                      data={subscriptionPlansData}
                      dataKey="subscribers"
                      nameKey="plan"
                      innerRadius={60}
                      strokeWidth={5}
                    >
                      {subscriptionPlansData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <ChartLegend
                      content={<ChartLegendContent nameKey="plan" />}
                      className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
                    />
                  </PieChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          {/* Churn Analysis */}
          <Card>
            <CardHeader>
              <CardTitle>Churn Analysis</CardTitle>
              <CardDescription>Monthly churn rate trends and targets</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={churnAnalysisConfig}
                className="aspect-auto h-[300px] w-full"
              >
                <LineChart data={churnAnalysisData}>
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
                    dataKey="churnRate"
                    type="monotone"
                    stroke="var(--color-churnRate)"
                    strokeWidth={2}
                    dot={{ fill: "var(--color-churnRate)" }}
                  />
                  <Line
                    dataKey="targetChurn"
                    type="monotone"
                    stroke="var(--color-targetChurn)"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={{ fill: "var(--color-targetChurn)" }}
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Subscriptions Table */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>All Subscriptions</CardTitle>
                  <CardDescription>Manage customer subscriptions and billing</CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search subscriptions..."
                      className="pl-8 w-64"
                    />
                  </div>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="trial">Trial</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                      <SelectItem value="past-due">Past Due</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead>Plan</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Billing</TableHead>
                      <TableHead>Next Billing</TableHead>
                      <TableHead>Usage</TableHead>
                      <TableHead>MRR</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {subscriptions.map((subscription) => (
                      <TableRow key={subscription.id}>
                        <TableCell>
                          <div className="font-medium">{subscription.customer}</div>
                          <div className="text-sm text-muted-foreground">{subscription.email}</div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{subscription.plan}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={
                            subscription.status === 'Active' ? 'default' :
                            subscription.status === 'Trial' ? 'secondary' :
                            subscription.status === 'Cancelled' ? 'destructive' :
                            'outline'
                          }>
                            {subscription.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="font-medium">${subscription.amount}</div>
                          <div className="text-sm text-muted-foreground">{subscription.billing}</div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">{subscription.billing}</div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">{subscription.nextBilling}</div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Progress value={subscription.usage} className="w-16 h-2" />
                            <span className="text-sm text-muted-foreground">{subscription.usage}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="font-medium">${subscription.mrr}</div>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Eye className="mr-2 h-4 w-4" />
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Edit className="mr-2 h-4 w-4" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Receipt className="mr-2 h-4 w-4" />
                                View Invoices
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Mail className="mr-2 h-4 w-4" />
                                Send Email
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Pause className="mr-2 h-4 w-4" />
                                Pause
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">
                                <XCircle className="mr-2 h-4 w-4" />
                                Cancel
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
} 