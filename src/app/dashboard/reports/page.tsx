"use client"

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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { 
  ChartConfig, 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from "@/components/ui/chart"
import { 
  FileText, 
  Download, 
  Calendar, 
  Filter, 
  Search,
  BarChart3,
  PieChart,
  TrendingUp,
  Users,
  DollarSign,
  ShoppingCart,
  Mail,
  Clock,
  CheckCircle,
  AlertTriangle,
  RefreshCw,
  Share,
  Printer,
  Eye,
  Settings,
  Plus
} from "lucide-react"
import { Area, AreaChart, Bar, BarChart, Line, LineChart, XAxis, YAxis } from "recharts"

const reports = [
  {
    id: 1,
    name: "Monthly Sales Report",
    description: "Comprehensive overview of monthly sales performance",
    type: "Sales",
    lastGenerated: "2024-01-15",
    status: "Ready",
    size: "2.4 MB",
    downloads: 156,
    icon: BarChart3
  },
  {
    id: 2,
    name: "Customer Analytics",
    description: "Detailed customer behavior and engagement metrics",
    type: "Analytics",
    lastGenerated: "2024-01-14",
    status: "Ready",
    size: "1.8 MB",
    downloads: 89,
    icon: Users
  },
  {
    id: 3,
    name: "Revenue Breakdown",
    description: "Revenue analysis by product, region, and time period",
    type: "Financial",
    lastGenerated: "2024-01-13",
    status: "Ready",
    size: "3.2 MB",
    downloads: 234,
    icon: DollarSign
  },
  {
    id: 4,
    name: "Inventory Report",
    description: "Stock levels, reorder points, and inventory turnover",
    type: "Operations",
    lastGenerated: "2024-01-12",
    status: "Processing",
    size: "1.5 MB",
    downloads: 67,
    icon: ShoppingCart
  },
  {
    id: 5,
    name: "Marketing Campaign Performance",
    description: "ROI and engagement metrics for marketing campaigns",
    type: "Marketing",
    lastGenerated: "2024-01-11",
    status: "Ready",
    size: "2.1 MB",
    downloads: 123,
    icon: Mail
  },
  {
    id: 6,
    name: "Lead Conversion Analysis",
    description: "Lead sources, conversion rates, and pipeline performance",
    type: "Sales",
    lastGenerated: "2024-01-10",
    status: "Ready",
    size: "1.9 MB",
    downloads: 178,
    icon: TrendingUp
  }
]

const scheduledReports = [
  {
    id: 1,
    name: "Weekly Sales Summary",
    frequency: "Weekly",
    nextRun: "2024-01-22",
    recipients: "sales@company.com",
    status: "Active"
  },
  {
    id: 2,
    name: "Monthly Financial Report",
    frequency: "Monthly",
    nextRun: "2024-02-01",
    recipients: "finance@company.com",
    status: "Active"
  },
  {
    id: 3,
    name: "Quarterly Business Review",
    frequency: "Quarterly",
    nextRun: "2024-04-01",
    recipients: "executives@company.com",
    status: "Active"
  }
]

const reportTemplates = [
  {
    id: 1,
    name: "Sales Performance Template",
    description: "Standard template for sales team reports",
    category: "Sales",
    uses: 45
  },
  {
    id: 2,
    name: "Customer Insights Template",
    description: "Template for customer analysis reports",
    category: "Analytics",
    uses: 32
  },
  {
    id: 3,
    name: "Financial Summary Template",
    description: "Template for financial reporting",
    category: "Finance",
    uses: 67
  }
]

// Report generation trends data
const reportTrendsData = [
  { month: "Jan", generated: 45, downloaded: 156, scheduled: 12 },
  { month: "Feb", generated: 52, downloaded: 178, scheduled: 14 },
  { month: "Mar", generated: 48, downloaded: 165, scheduled: 13 },
  { month: "Apr", generated: 61, downloaded: 203, scheduled: 16 },
  { month: "May", generated: 55, downloaded: 189, scheduled: 15 },
  { month: "Jun", generated: 58, downloaded: 198, scheduled: 17 },
]

const trendsChartConfig = {
  generated: {
    label: "Generated Reports",
    color: "hsl(var(--chart-1))",
  },
  downloaded: {
    label: "Downloads",
    color: "hsl(var(--chart-2))",
  },
  scheduled: {
    label: "Scheduled Reports",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

// Report type distribution
const reportTypeData = [
  { type: "Sales", count: 89, percentage: 36 },
  { type: "Analytics", count: 67, percentage: 27 },
  { type: "Financial", count: 54, percentage: 22 },
  { type: "Operations", count: 37, percentage: 15 },
]

const typeChartConfig = {
  sales: {
    label: "Sales",
    color: "hsl(var(--chart-1))",
  },
  analytics: {
    label: "Analytics", 
    color: "hsl(var(--chart-2))",
  },
  financial: {
    label: "Financial",
    color: "hsl(var(--chart-3))",
  },
  operations: {
    label: "Operations",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

export default function ReportsPage() {
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
                <BreadcrumbPage>Reports</BreadcrumbPage>
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
              <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
              <p className="text-muted-foreground">
                Generate, schedule, and manage your business reports and analytics.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                New Report
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Reports</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">247</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+12</span> this month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Downloads</CardTitle>
                <Download className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,847</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+23%</span> from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Scheduled</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">15</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-blue-600">3</span> running today
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Templates</CardTitle>
                <Settings className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">32</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+4</span> new templates
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Reports Analytics */}
          <Card>
            <CardHeader>
              <CardTitle>Report Generation Trends</CardTitle>
              <CardDescription>Monthly report activity and usage patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={trendsChartConfig}>
                <AreaChart
                  accessibilityLayer
                  data={reportTrendsData}
                  margin={{
                    left: 12,
                    right: 12,
                  }}
                >
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
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="line" />}
                  />
                  <Area
                    dataKey="generated"
                    type="natural"
                    fill="var(--color-generated)"
                    fillOpacity={0.4}
                    stroke="var(--color-generated)"
                    strokeWidth={2}
                  />
                  <Area
                    dataKey="downloaded"
                    type="natural"
                    fill="var(--color-downloaded)"
                    fillOpacity={0.2}
                    stroke="var(--color-downloaded)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Tabs */}
          <Tabs defaultValue="reports" className="space-y-4">
            <TabsList>
              <TabsTrigger value="reports">All Reports</TabsTrigger>
              <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
              <TabsTrigger value="templates">Templates</TabsTrigger>
            </TabsList>

            <TabsContent value="reports" className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Generated Reports</CardTitle>
                      <CardDescription>All your generated reports and analytics</CardDescription>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="relative">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Search reports..."
                          className="pl-8 w-64"
                        />
                      </div>
                      <Select defaultValue="all">
                        <SelectTrigger className="w-[140px]">
                          <SelectValue placeholder="Filter by type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Types</SelectItem>
                          <SelectItem value="sales">Sales</SelectItem>
                          <SelectItem value="analytics">Analytics</SelectItem>
                          <SelectItem value="financial">Financial</SelectItem>
                          <SelectItem value="operations">Operations</SelectItem>
                          <SelectItem value="marketing">Marketing</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {reports.map((report) => (
                      <div key={report.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="p-2 bg-muted rounded-md">
                            <report.icon className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{report.name}</h3>
                            <p className="text-sm text-muted-foreground">{report.description}</p>
                            <div className="flex items-center space-x-4 mt-2">
                              <Badge variant="outline">{report.type}</Badge>
                              <span className="text-xs text-muted-foreground">
                                Last generated: {report.lastGenerated}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                Size: {report.size}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                Downloads: {report.downloads}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant={report.status === 'Ready' ? 'default' : 'secondary'}>
                            {report.status}
                          </Badge>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                          <Button variant="outline" size="sm">
                            <Share className="h-4 w-4 mr-2" />
                            Share
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="scheduled" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Scheduled Reports</CardTitle>
                  <CardDescription>Manage your automated report generation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Report Name</TableHead>
                          <TableHead>Frequency</TableHead>
                          <TableHead>Next Run</TableHead>
                          <TableHead>Recipients</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {scheduledReports.map((report) => (
                          <TableRow key={report.id}>
                            <TableCell className="font-medium">{report.name}</TableCell>
                            <TableCell>{report.frequency}</TableCell>
                            <TableCell>{report.nextRun}</TableCell>
                            <TableCell>{report.recipients}</TableCell>
                            <TableCell>
                              <Badge variant={report.status === 'Active' ? 'default' : 'secondary'}>
                                {report.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <div className="flex items-center justify-end space-x-2">
                                <Button variant="outline" size="sm">
                                  <RefreshCw className="h-4 w-4 mr-2" />
                                  Run Now
                                </Button>
                                <Button variant="outline" size="sm">
                                  Edit
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="templates" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Report Templates</CardTitle>
                  <CardDescription>Pre-configured templates for quick report generation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {reportTemplates.map((template) => (
                      <Card key={template.id}>
                        <CardHeader>
                          <CardTitle className="text-base">{template.name}</CardTitle>
                          <CardDescription>{template.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between">
                            <div>
                              <Badge variant="outline">{template.category}</Badge>
                              <p className="text-sm text-muted-foreground mt-2">
                                Used {template.uses} times
                              </p>
                            </div>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button size="sm">
                                Use Template
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  )
} 