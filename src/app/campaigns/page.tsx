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
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  ChartConfig, 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from "@/components/ui/chart"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { 
  MoreHorizontal, 
  Search, 
  Plus, 
  Filter, 
  Download, 
  Mail, 
  Send,
  Users,
  Eye,
  BarChart3,
  TrendingUp,
  TrendingDown,
  Calendar,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Edit,
  Copy,
  Trash2,
  Play,
  Pause,
  Target,
  MousePointer,
  ExternalLink
} from "lucide-react"
import { Area, AreaChart, Line, LineChart, Pie, PieChart, Cell, XAxis, YAxis } from "recharts"

const campaigns = [
  {
    id: 1,
    name: "Spring Sale 2024",
    subject: "Don't Miss Our Spring Sale - Up to 50% Off!",
    status: "Active",
    type: "Promotional",
    sent: 15420,
    delivered: 14890,
    opened: 4467,
    clicked: 892,
    unsubscribed: 23,
    bounced: 530,
    createdAt: "2024-01-15",
    scheduledFor: "2024-01-20",
    openRate: 30.0,
    clickRate: 6.0,
    conversionRate: 2.1
  },
  {
    id: 2,
    name: "Welcome Series - Email 1",
    subject: "Welcome to Our Community!",
    status: "Completed",
    type: "Welcome",
    sent: 2340,
    delivered: 2298,
    opened: 1379,
    clicked: 276,
    unsubscribed: 5,
    bounced: 42,
    createdAt: "2024-01-10",
    scheduledFor: "2024-01-12",
    openRate: 60.0,
    clickRate: 12.0,
    conversionRate: 8.5
  },
  {
    id: 3,
    name: "Monthly Newsletter",
    subject: "Your Monthly Update - Industry Insights",
    status: "Draft",
    type: "Newsletter",
    sent: 0,
    delivered: 0,
    opened: 0,
    clicked: 0,
    unsubscribed: 0,
    bounced: 0,
    createdAt: "2024-01-18",
    scheduledFor: "2024-01-25",
    openRate: 0,
    clickRate: 0,
    conversionRate: 0
  },
  {
    id: 4,
    name: "Re-engagement Campaign",
    subject: "We Miss You! Come Back for Exclusive Offers",
    status: "Scheduled",
    type: "Re-engagement",
    sent: 0,
    delivered: 0,
    opened: 0,
    clicked: 0,
    unsubscribed: 0,
    bounced: 0,
    createdAt: "2024-01-16",
    scheduledFor: "2024-01-22",
    openRate: 0,
    clickRate: 0,
    conversionRate: 0
  },
  {
    id: 5,
    name: "Product Launch Announcement",
    subject: "Introducing Our Revolutionary New Product",
    status: "Completed",
    type: "Product Launch",
    sent: 8750,
    delivered: 8540,
    opened: 2562,
    clicked: 512,
    unsubscribed: 18,
    bounced: 210,
    createdAt: "2024-01-05",
    scheduledFor: "2024-01-08",
    openRate: 30.0,
    clickRate: 6.0,
    conversionRate: 3.2
  }
]

// Campaign performance data
const campaignPerformanceData = [
  { month: "Jan", sent: 12500, opened: 3750, clicked: 750, converted: 125 },
  { month: "Feb", sent: 15200, opened: 4560, clicked: 912, converted: 152 },
  { month: "Mar", sent: 18300, opened: 5490, clicked: 1098, converted: 183 },
  { month: "Apr", sent: 16800, opened: 5040, clicked: 1008, converted: 168 },
  { month: "May", sent: 19500, opened: 5850, clicked: 1170, converted: 195 },
  { month: "Jun", sent: 21200, opened: 6360, clicked: 1272, converted: 212 },
]

const performanceChartConfig = {
  sent: {
    label: "Emails Sent",
    color: "hsl(var(--chart-1))",
  },
  opened: {
    label: "Opened",
    color: "hsl(var(--chart-2))",
  },
  clicked: {
    label: "Clicked",
    color: "hsl(var(--chart-3))",
  },
  converted: {
    label: "Converted",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

// Engagement rates data
const engagementData = [
  { month: "Jan", openRate: 30, clickRate: 6, conversionRate: 1.0 },
  { month: "Feb", openRate: 30, clickRate: 6, conversionRate: 1.0 },
  { month: "Mar", openRate: 30, clickRate: 6, conversionRate: 1.0 },
  { month: "Apr", openRate: 30, clickRate: 6, conversionRate: 1.0 },
  { month: "May", openRate: 30, clickRate: 6, conversionRate: 1.0 },
  { month: "Jun", openRate: 30, clickRate: 6, conversionRate: 1.0 },
]

const engagementChartConfig = {
  openRate: {
    label: "Open Rate (%)",
    color: "hsl(var(--chart-1))",
  },
  clickRate: {
    label: "Click Rate (%)",
    color: "hsl(var(--chart-2))",
  },
  conversionRate: {
    label: "Conversion Rate (%)",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

// Campaign type distribution
const campaignTypeData = [
  { type: "Newsletter", count: 45, percentage: 35 },
  { type: "Promotional", count: 38, percentage: 30 },
  { type: "Product Updates", count: 25, percentage: 20 },
  { type: "Onboarding", count: 19, percentage: 15 },
]

const typeChartConfig = {
  newsletter: {
    label: "Newsletter",
    color: "hsl(var(--chart-1))",
  },
  promotional: {
    label: "Promotional",
    color: "hsl(var(--chart-2))",
  },
  updates: {
    label: "Product Updates",
    color: "hsl(var(--chart-3))",
  },
  onboarding: {
    label: "Onboarding",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

export default function CampaignsPage() {
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
                  Communication
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Email Campaigns</BreadcrumbPage>
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
              <h1 className="text-3xl font-bold tracking-tight">Email Campaigns</h1>
              <p className="text-muted-foreground">
                Create, manage, and track your email marketing campaigns.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                New Campaign
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Campaigns</CardTitle>
                <Mail className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">156</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+12</span> this month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Open Rate</CardTitle>
                <Eye className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24.5%</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                  <span className="text-green-600">+2.1%</span> from last month
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Click Rate</CardTitle>
                <MousePointer className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.8%</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                  <span className="text-green-600">+0.3%</span> from last month
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Subscribers</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45,231</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                  <span className="text-green-600">+8.2%</span> from last month
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Campaign Analytics Charts */}
          <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Campaign Performance</CardTitle>
                <CardDescription>
                  Email campaign metrics over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={performanceChartConfig}>
                  <AreaChart
                    accessibilityLayer
                    data={campaignPerformanceData}
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
                      tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent indicator="line" />}
                    />
                    <Area
                      dataKey="sent"
                      type="natural"
                      fill="var(--color-sent)"
                      fillOpacity={0.1}
                      stroke="var(--color-sent)"
                      strokeWidth={2}
                    />
                    <Area
                      dataKey="opened"
                      type="natural"
                      fill="var(--color-opened)"
                      fillOpacity={0.2}
                      stroke="var(--color-opened)"
                      strokeWidth={2}
                    />
                    <Area
                      dataKey="clicked"
                      type="natural"
                      fill="var(--color-clicked)"
                      fillOpacity={0.3}
                      stroke="var(--color-clicked)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Engagement Rates</CardTitle>
                <CardDescription>
                  Open, click, and conversion rates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={engagementChartConfig}>
                  <LineChart
                    accessibilityLayer
                    data={engagementData}
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
                      tickFormatter={(value) => `${value}%`}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent />}
                    />
                    <Line
                      dataKey="openRate"
                      type="monotone"
                      stroke="var(--color-openRate)"
                      strokeWidth={2}
                      dot={{ fill: "var(--color-openRate)" }}
                    />
                    <Line
                      dataKey="clickRate"
                      type="monotone"
                      stroke="var(--color-clickRate)"
                      strokeWidth={2}
                      dot={{ fill: "var(--color-clickRate)" }}
                    />
                    <Line
                      dataKey="conversionRate"
                      type="monotone"
                      stroke="var(--color-conversionRate)"
                      strokeWidth={2}
                      dot={{ fill: "var(--color-conversionRate)" }}
                    />
                  </LineChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Campaign Types</CardTitle>
                <CardDescription>
                  Distribution of campaigns by type
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <ChartContainer config={typeChartConfig} className="w-64">
                    <PieChart>
                      <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                      />
                      <Pie
                        data={campaignTypeData}
                        dataKey="count"
                        nameKey="type"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                      >
                        {campaignTypeData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={`hsl(var(--chart-${index + 1}))`} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ChartContainer>
                  <div className="flex-1 ml-8 space-y-4">
                    {campaignTypeData.map((item, index) => (
                      <div key={item.type} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div 
                            className="w-3 h-3 rounded-full" 
                            style={{ backgroundColor: `hsl(var(--chart-${index + 1}))` }}
                          />
                          <span className="text-sm font-medium">{item.type}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-muted-foreground">{item.count} campaigns</span>
                          <Badge variant="outline">{item.percentage}%</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Campaigns Table */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>All Campaigns</CardTitle>
                  <CardDescription>Manage and track all your email campaigns</CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search campaigns..."
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
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="scheduled">Scheduled</SelectItem>
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
                      <TableHead>Campaign</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Recipients</TableHead>
                      <TableHead>Open Rate</TableHead>
                      <TableHead>Click Rate</TableHead>
                      <TableHead>Conversion</TableHead>
                      <TableHead>Scheduled</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {campaigns.map((campaign) => (
                      <TableRow key={campaign.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{campaign.name}</div>
                            <div className="text-sm text-muted-foreground truncate max-w-[200px]">
                              {campaign.subject}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{campaign.type}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={
                            campaign.status === 'Active' ? 'default' :
                            campaign.status === 'Completed' ? 'secondary' :
                            campaign.status === 'Scheduled' ? 'outline' : 'secondary'
                          }>
                            {campaign.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{campaign.sent.toLocaleString()}</div>
                            <div className="text-sm text-muted-foreground">
                              {campaign.delivered.toLocaleString()} delivered
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <div className="text-sm font-medium">{campaign.openRate}%</div>
                            <Progress value={campaign.openRate} className="w-16 h-2" />
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <div className="text-sm font-medium">{campaign.clickRate}%</div>
                            <Progress value={campaign.clickRate} className="w-16 h-2" />
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm font-medium">{campaign.conversionRate}%</div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">{campaign.scheduledFor}</div>
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
                                Edit Campaign
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Copy className="mr-2 h-4 w-4" />
                                Duplicate
                              </DropdownMenuItem>
                              {campaign.status === 'Draft' && (
                                <DropdownMenuItem>
                                  <Send className="mr-2 h-4 w-4" />
                                  Send Campaign
                                </DropdownMenuItem>
                              )}
                              {campaign.status === 'Active' && (
                                <DropdownMenuItem>
                                  <Pause className="mr-2 h-4 w-4" />
                                  Pause Campaign
                                </DropdownMenuItem>
                              )}
                              <DropdownMenuItem>
                                <BarChart3 className="mr-2 h-4 w-4" />
                                View Analytics
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">
                                <Trash2 className="mr-2 h-4 w-4" />
                                Delete Campaign
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