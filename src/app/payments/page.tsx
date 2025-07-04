import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  CreditCard, 
  Search, 
  Plus, 
  Eye, 
  Download, 
  RefreshCw,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  DollarSign,
  TrendingUp,
  Calendar,
  Filter,
  Banknote,
  Wallet,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react"

const payments = [
  {
    id: "pay_1234567890",
    customer: "John Doe",
    email: "john@example.com",
    date: "2024-11-15",
    amount: 99.00,
    status: "completed",
    method: "Credit Card",
    type: "payment",
    reference: "INV-001",
    fee: 2.97
  },
  {
    id: "pay_1234567891",
    customer: "Jane Smith",
    email: "jane@example.com",
    date: "2024-11-14",
    amount: 299.00,
    status: "completed",
    method: "Bank Transfer",
    type: "payment",
    reference: "INV-002",
    fee: 0.00
  },
  {
    id: "pay_1234567892",
    customer: "Bob Johnson",
    email: "bob@example.com",
    date: "2024-11-13",
    amount: 49.99,
    status: "pending",
    method: "PayPal",
    type: "payment",
    reference: "INV-003",
    fee: 1.75
  },
  {
    id: "ref_1234567893",
    customer: "Alice Brown",
    email: "alice@example.com",
    date: "2024-11-12",
    amount: 199.99,
    status: "completed",
    method: "Credit Card",
    type: "refund",
    reference: "ORD-004",
    fee: 0.00
  },
  {
    id: "pay_1234567894",
    customer: "Charlie Wilson",
    email: "charlie@example.com",
    date: "2024-11-11",
    amount: 999.99,
    status: "failed",
    method: "Credit Card",
    type: "payment",
    reference: "INV-005",
    fee: 0.00
  },
  {
    id: "pay_1234567895",
    customer: "Diana Lee",
    email: "diana@example.com",
    date: "2024-11-10",
    amount: 149.98,
    status: "completed",
    method: "Apple Pay",
    type: "payment",
    reference: "INV-006",
    fee: 4.50
  },
]

const paymentMethods = [
  {
    id: "pm_1234567890",
    customer: "John Doe",
    type: "Credit Card",
    details: "•••• •••• •••• 4242",
    brand: "Visa",
    expiry: "12/25",
    status: "active",
    default: true
  },
  {
    id: "pm_1234567891",
    customer: "Jane Smith",
    type: "Bank Account",
    details: "•••• •••• 1234",
    brand: "Chase",
    expiry: "",
    status: "active",
    default: false
  },
  {
    id: "pm_1234567892",
    customer: "Bob Johnson",
    type: "PayPal",
    details: "bob@example.com",
    brand: "PayPal",
    expiry: "",
    status: "active",
    default: false
  },
]

function getStatusBadge(status: string) {
  switch (status) {
    case "completed":
      return <Badge variant="default" className="bg-green-100 text-green-800"><CheckCircle className="mr-1 h-3 w-3" />Completed</Badge>
    case "pending":
      return <Badge variant="default" className="bg-blue-100 text-blue-800"><Clock className="mr-1 h-3 w-3" />Pending</Badge>
    case "failed":
      return <Badge variant="destructive"><XCircle className="mr-1 h-3 w-3" />Failed</Badge>
    case "cancelled":
      return <Badge variant="outline"><XCircle className="mr-1 h-3 w-3" />Cancelled</Badge>
    default:
      return <Badge variant="secondary">{status}</Badge>
  }
}

function getTypeBadge(type: string) {
  switch (type) {
    case "payment":
      return <Badge variant="default" className="bg-green-100 text-green-800"><ArrowDownRight className="mr-1 h-3 w-3" />Payment</Badge>
    case "refund":
      return <Badge variant="outline"><ArrowUpRight className="mr-1 h-3 w-3" />Refund</Badge>
    case "chargeback":
      return <Badge variant="destructive"><AlertTriangle className="mr-1 h-3 w-3" />Chargeback</Badge>
    default:
      return <Badge variant="secondary">{type}</Badge>
  }
}

export default function PaymentsPage() {
  const totalAmount = payments.reduce((sum, payment) => sum + payment.amount, 0)
  const completedPayments = payments.filter(p => p.status === 'completed').length
  const pendingPayments = payments.filter(p => p.status === 'pending').length
  const totalFees = payments.reduce((sum, payment) => sum + payment.fee, 0)

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Payments</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Process Payment
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Processed</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalAmount.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              +20% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedPayments}</div>
            <p className="text-xs text-muted-foreground">
              This month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Clock className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingPayments}</div>
            <p className="text-xs text-muted-foreground">
              Awaiting processing
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Processing Fees</CardTitle>
            <Banknote className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalFees.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">
              {((totalFees / totalAmount) * 100).toFixed(2)}% of total
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>
              Latest payment transactions and refunds
            </CardDescription>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search transactions..." className="pl-8" />
              </div>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="payment">Payments</SelectItem>
                  <SelectItem value="refund">Refunds</SelectItem>
                  <SelectItem value="chargeback">Chargebacks</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payments.map((payment) => (
                  <TableRow key={payment.id}>
                    <TableCell className="font-medium">{payment.id}</TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{payment.customer}</div>
                        <div className="text-sm text-muted-foreground">{payment.email}</div>
                      </div>
                    </TableCell>
                    <TableCell>${payment.amount.toFixed(2)}</TableCell>
                    <TableCell>{getTypeBadge(payment.type)}</TableCell>
                    <TableCell>{getStatusBadge(payment.status)}</TableCell>
                    <TableCell>{payment.method}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <RefreshCw className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Payment Methods</CardTitle>
            <CardDescription>
              Manage customer payment methods
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {paymentMethods.map((method) => (
                <div key={method.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center">
                      {method.type === 'Credit Card' && <CreditCard className="h-5 w-5 text-muted-foreground" />}
                      {method.type === 'Bank Account' && <Banknote className="h-5 w-5 text-muted-foreground" />}
                      {method.type === 'PayPal' && <Wallet className="h-5 w-5 text-muted-foreground" />}
                    </div>
                    <div>
                      <div className="font-medium">{method.details}</div>
                      <div className="text-sm text-muted-foreground">
                        {method.brand} {method.expiry && `• Expires ${method.expiry}`}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {method.default && (
                      <Badge variant="secondary">Default</Badge>
                    )}
                    <Badge variant={method.status === 'active' ? 'default' : 'secondary'}>
                      {method.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 