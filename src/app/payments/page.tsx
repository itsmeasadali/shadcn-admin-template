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
  CreditCard, 
  DollarSign,
  TrendingUp,
  TrendingDown,
  CheckCircle,
  Clock,
  XCircle,
  AlertTriangle,
  Eye,
  Edit,
  RefreshCw,
  Receipt,
  ArrowUpRight,
  ArrowDownRight,
  Building,
  Smartphone,
  Wallet
} from "lucide-react"

const payments = [
  {
    id: "PAY-2024-001",
    transactionId: "TXN-789456123",
    customer: {
      name: "Sarah Johnson",
      email: "sarah@techsolutions.com",
      avatar: "/avatars/sarah.jpg"
    },
    company: "Tech Solutions Inc.",
    amount: 879.96,
    fee: 25.60,
    netAmount: 854.36,
    method: "Credit Card",
    type: "Payment",
    status: "Completed",
    date: "2024-01-18",
    invoiceId: "INV-001",
    processor: "Stripe",
    currency: "USD",
    description: "Premium Software License Payment"
  },
  {
    id: "PAY-2024-002",
    transactionId: "TXN-456789012",
    customer: {
      name: "Michael Chen",
      email: "michael@designstudio.com",
      avatar: "/avatars/michael.jpg"
    },
    company: "Design Studio Pro",
    amount: 5499.98,
    fee: 159.45,
    netAmount: 5340.53,
    method: "Bank Transfer",
    type: "Payment",
    status: "Processing",
    date: "2024-01-16",
    invoiceId: "INV-002",
    processor: "ACH",
    currency: "USD",
    description: "Enterprise Solution Bundle Payment"
  },
  {
    id: "PAY-2024-003",
    transactionId: "TXN-123456789",
    customer: {
      name: "Emily Rodriguez",
      email: "emily@marketing.com",
      avatar: "/avatars/emily.jpg"
    },
    company: "Marketing Solutions",
    amount: 615.91,
    fee: 17.85,
    netAmount: 598.06,
    method: "PayPal",
    type: "Payment",
    status: "Failed",
    date: "2024-01-15",
    invoiceId: "INV-003",
    processor: "PayPal",
    currency: "USD",
    description: "Training Course Payment"
  },
  {
    id: "REF-2024-001",
    transactionId: "TXN-987654321",
    customer: {
      name: "Lisa Wang",
      email: "lisa@startup.com",
      avatar: "/avatars/lisa.jpg"
    },
    company: "Startup Hub",
    amount: -164.96,
    fee: -4.78,
    netAmount: -160.18,
    method: "Credit Card",
    type: "Refund",
    status: "Completed",
    date: "2024-01-14",
    invoiceId: "INV-005",
    processor: "Stripe",
    currency: "USD",
    description: "Mobile App License Refund"
  },
  {
    id: "PAY-2024-004",
    transactionId: "TXN-654321098",
    customer: {
      name: "David Thompson",
      email: "david@globalent.com",
      avatar: "/avatars/david.jpg"
    },
    company: "Global Enterprises",
    amount: 2749.98,
    fee: 79.75,
    netAmount: 2670.23,
    method: "Wire Transfer",
    type: "Payment",
    status: "Pending",
    date: "2024-01-16",
    invoiceId: "INV-004",
    processor: "Bank Wire",
    currency: "USD",
    description: "Professional Consulting Payment"
  }
]

const paymentMethods = [
  { name: "Credit Card", count: 1247, percentage: 52, icon: CreditCard, color: "text-blue-500" },
  { name: "Bank Transfer", count: 687, percentage: 28, icon: Building, color: "text-green-500" },
  { name: "PayPal", count: 324, percentage: 14, icon: Wallet, color: "text-purple-500" },
  { name: "Mobile Payment", count: 145, percentage: 6, icon: Smartphone, color: "text-orange-500" }
]

export default function PaymentsPage() {
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
                <BreadcrumbPage>Payments</BreadcrumbPage>
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
          <h1 className="text-3xl font-bold tracking-tight">Payments</h1>
          <p className="text-muted-foreground">
            Track transactions, manage payment methods, and monitor financial flows.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Record Payment
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Processed</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1.2M</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+22%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">96.8%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+1.2%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Processing Fees</CardTitle>
            <TrendingDown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$3.2K</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-600">2.7%</span> of total volume
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Transaction</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$487</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+8%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Payment Methods & Transaction Volume */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Payment Methods</CardTitle>
            <CardDescription>Distribution of payment methods used</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {paymentMethods.map((method) => (
              <div key={method.name} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <method.icon className={`h-5 w-5 ${method.color}`} />
                  <div>
                    <div className="font-medium">{method.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {method.count} transactions
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Progress value={method.percentage} className="h-2 w-16" />
                  <span className="text-sm font-medium">{method.percentage}%</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Transaction Status</CardTitle>
            <CardDescription>Current payment processing status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Completed
                </span>
                <span>2,456 payments</span>
              </div>
              <Progress value={89} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center">
                  <Clock className="h-4 w-4 text-yellow-500 mr-2" />
                  Processing
                </span>
                <span>187 payments</span>
              </div>
              <Progress value={7} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center">
                  <XCircle className="h-4 w-4 text-red-500 mr-2" />
                  Failed
                </span>
                <span>98 payments</span>
              </div>
              <Progress value={4} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Transactions Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Transaction Volume</CardTitle>
          <CardDescription>Daily payment volume and trends</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] flex items-center justify-center bg-muted rounded-lg">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
              <p className="text-muted-foreground">Transaction volume chart would be displayed here</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payments Table */}
      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
          <CardDescription>
            Complete record of all payment transactions and refunds.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search transactions..." className="pl-8" />
            </div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Transactions</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Payment method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Methods</SelectItem>
                <SelectItem value="credit-card">Credit Card</SelectItem>
                <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                <SelectItem value="paypal">PayPal</SelectItem>
                <SelectItem value="wire-transfer">Wire Transfer</SelectItem>
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
                  <TableHead>Transaction</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Invoice</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payments.map((payment) => (
                  <TableRow key={payment.id}>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        {payment.type === 'Payment' ? (
                          <ArrowDownRight className="h-4 w-4 text-green-500" />
                        ) : (
                          <ArrowUpRight className="h-4 w-4 text-red-500" />
                        )}
                        <div>
                          <div className="font-medium">{payment.id}</div>
                          <div className="text-sm text-muted-foreground">
                            {payment.transactionId}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarImage src={payment.customer.avatar} alt={payment.customer.name} />
                          <AvatarFallback>
                            {payment.customer.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{payment.customer.name}</div>
                          <div className="text-sm text-muted-foreground">{payment.company}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className={`font-medium ${payment.amount < 0 ? 'text-red-600' : 'text-green-600'}`}>
                          ${Math.abs(payment.amount).toFixed(2)}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Fee: ${Math.abs(payment.fee).toFixed(2)}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{payment.method}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={
                        payment.status === 'Completed' ? 'default' :
                        payment.status === 'Processing' ? 'secondary' :
                        payment.status === 'Pending' ? 'secondary' :
                        payment.status === 'Failed' ? 'destructive' : 'outline'
                      }>
                        {payment.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">{payment.date}</div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm font-medium">{payment.invoiceId}</div>
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
                            <Receipt className="mr-2 h-4 w-4" />
                            View Receipt
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <RefreshCw className="mr-2 h-4 w-4" />
                            Retry Payment
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Update Status
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