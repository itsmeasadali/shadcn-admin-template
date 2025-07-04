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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { 
  MoreHorizontal, 
  Search, 
  Plus, 
  Filter, 
  Download, 
  FileText, 
  DollarSign,
  TrendingUp,
  Calendar,
  CheckCircle,
  Clock,
  XCircle,
  AlertTriangle,
  Eye,
  Edit,
  Printer,
  Mail,
  CreditCard,
  Send,
  Copy
} from "lucide-react"

const invoices = [
  {
    id: "INV-2024-001",
    number: "INV-001",
    customer: {
      name: "Sarah Johnson",
      email: "sarah@techsolutions.com",
      avatar: "/avatars/sarah.jpg"
    },
    company: "Tech Solutions Inc.",
    amount: 799.97,
    tax: 79.99,
    total: 879.96,
    status: "Paid",
    dueDate: "2024-01-20",
    issueDate: "2024-01-15",
    paidDate: "2024-01-18",
    paymentMethod: "Credit Card",
    items: [
      { description: "Premium Software License", quantity: 2, rate: 299.99 },
      { description: "Professional Support", quantity: 1, rate: 199.99 }
    ]
  },
  {
    id: "INV-2024-002",
    number: "INV-002",
    customer: {
      name: "Michael Chen",
      email: "michael@designstudio.com",
      avatar: "/avatars/michael.jpg"
    },
    company: "Design Studio Pro",
    amount: 4999.99,
    tax: 499.99,
    total: 5499.98,
    status: "Pending",
    dueDate: "2024-01-25",
    issueDate: "2024-01-16",
    paidDate: null,
    paymentMethod: null,
    items: [
      { description: "Enterprise Solution Bundle", quantity: 1, rate: 4999.99 }
    ]
  },
  {
    id: "INV-2024-003",
    number: "INV-003",
    customer: {
      name: "Emily Rodriguez",
      email: "emily@marketing.com",
      avatar: "/avatars/emily.jpg"
    },
    company: "Marketing Solutions",
    amount: 559.92,
    tax: 55.99,
    total: 615.91,
    status: "Overdue",
    dueDate: "2024-01-10",
    issueDate: "2024-01-05",
    paidDate: null,
    paymentMethod: null,
    items: [
      { description: "Basic Training Course", quantity: 5, rate: 99.99 },
      { description: "API Credits Pack", quantity: 3, rate: 19.99 }
    ]
  },
  {
    id: "INV-2024-004",
    number: "INV-004",
    customer: {
      name: "David Thompson",
      email: "david@globalent.com",
      avatar: "/avatars/david.jpg"
    },
    company: "Global Enterprises",
    amount: 2499.99,
    tax: 249.99,
    total: 2749.98,
    status: "Draft",
    dueDate: "2024-01-30",
    issueDate: "2024-01-16",
    paidDate: null,
    paymentMethod: null,
    items: [
      { description: "Professional Consulting", quantity: 1, rate: 2499.99 }
    ]
  },
  {
    id: "INV-2024-005",
    number: "INV-005",
    customer: {
      name: "Lisa Wang",
      email: "lisa@startup.com",
      avatar: "/avatars/lisa.jpg"
    },
    company: "Startup Hub",
    amount: 149.97,
    tax: 14.99,
    total: 164.96,
    status: "Cancelled",
    dueDate: "2024-01-15",
    issueDate: "2024-01-12",
    paidDate: null,
    paymentMethod: null,
    items: [
      { description: "Mobile App License", quantity: 3, rate: 49.99 }
    ]
  }
]

const invoiceStats = [
  { status: "Draft", count: 12, amount: "$15,240", color: "bg-gray-500" },
  { status: "Sent", count: 23, amount: "$45,670", color: "bg-blue-500" },
  { status: "Pending", count: 18, amount: "$32,450", color: "bg-yellow-500" },
  { status: "Paid", count: 156, amount: "$234,890", color: "bg-green-500" },
  { status: "Overdue", count: 8, amount: "$12,340", color: "bg-red-500" }
]

export default function InvoicesPage() {
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
                  Billing & Finance
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Invoices</BreadcrumbPage>
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
          <h1 className="text-3xl font-bold tracking-tight">Invoices</h1>
          <p className="text-muted-foreground">
            Manage invoices, track payments, and monitor financial performance.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Create Invoice
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Invoices</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,847</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+12%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Outstanding</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$44.8K</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-600">26 invoices</span> overdue
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Paid This Month</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$234.9K</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+18%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Payment Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12 days</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">-2 days</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Invoice Status Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Invoice Status Overview</CardTitle>
          <CardDescription>Current invoice distribution by status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-5">
            {invoiceStats.map((stat) => (
              <div key={stat.status} className="text-center">
                <div className={`h-16 rounded-lg ${stat.color} flex items-center justify-center text-white font-bold text-lg mb-2`}>
                  {stat.count}
                </div>
                <div className="space-y-1">
                  <div className="font-medium text-sm">{stat.status}</div>
                  <div className="text-xs text-muted-foreground">{stat.amount}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Payment Analytics */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Payment Performance</CardTitle>
            <CardDescription>Invoice payment trends and metrics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>On-time Payments</span>
                <span>87.3%</span>
              </div>
              <Progress value={87.3} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Late Payments</span>
                <span>8.9%</span>
              </div>
              <Progress value={8.9} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Payment Rate</span>
                <span>94.2%</span>
              </div>
              <Progress value={94.2} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment Methods</CardTitle>
            <CardDescription>How customers prefer to pay</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center">
                  <CreditCard className="h-4 w-4 text-blue-500 mr-2" />
                  Credit Card
                </span>
                <span>65%</span>
              </div>
              <Progress value={65} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center">
                  <DollarSign className="h-4 w-4 text-green-500 mr-2" />
                  Bank Transfer
                </span>
                <span>28%</span>
              </div>
              <Progress value={28} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center">
                  <FileText className="h-4 w-4 text-purple-500 mr-2" />
                  Check
                </span>
                <span>7%</span>
              </div>
              <Progress value={7} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Invoices Table */}
      <Card>
        <CardHeader>
          <CardTitle>Invoice Management</CardTitle>
          <CardDescription>
            Create, send, and track all your invoices in one place.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search invoices..." className="pl-8" />
            </div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Invoices</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="sent">Sent</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="overdue">Overdue</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Date range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Time</SelectItem>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="quarter">This Quarter</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Payment</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{invoice.number}</div>
                        <div className="text-sm text-muted-foreground">
                          Issued: {invoice.issueDate}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarImage src={invoice.customer.avatar} alt={invoice.customer.name} />
                          <AvatarFallback>
                            {invoice.customer.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{invoice.customer.name}</div>
                          <div className="text-sm text-muted-foreground">{invoice.company}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">${invoice.total.toFixed(2)}</div>
                        <div className="text-sm text-muted-foreground">
                          +${invoice.tax.toFixed(2)} tax
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={
                        invoice.status === 'Paid' ? 'default' :
                        invoice.status === 'Pending' ? 'secondary' :
                        invoice.status === 'Overdue' ? 'destructive' :
                        invoice.status === 'Draft' ? 'outline' :
                        invoice.status === 'Cancelled' ? 'destructive' : 'outline'
                      }>
                        {invoice.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="text-sm">{invoice.dueDate}</div>
                        {invoice.status === 'Overdue' && (
                          <div className="text-xs text-red-600">
                            {Math.ceil((new Date().getTime() - new Date(invoice.dueDate).getTime()) / (1000 * 3600 * 24))} days overdue
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        {invoice.paidDate ? (
                          <div>
                            <div className="text-green-600">Paid</div>
                            <div className="text-xs text-muted-foreground">
                              {invoice.paidDate}
                            </div>
                          </div>
                        ) : (
                          <div className="text-muted-foreground">Unpaid</div>
                        )}
                      </div>
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
                            View Invoice
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit Invoice
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Copy className="mr-2 h-4 w-4" />
                            Duplicate Invoice
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Printer className="mr-2 h-4 w-4" />
                            Print Invoice
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Mail className="mr-2 h-4 w-4" />
                            Email Invoice
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Send className="mr-2 h-4 w-4" />
                            Send Reminder
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