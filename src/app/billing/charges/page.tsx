import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  CheckCircle, 
  XCircle, 
  Clock, 
  Download, 
  Search, 
  Filter, 
  CreditCard,
  DollarSign,
  TrendingUp,
  Calendar,
  RefreshCw,
  AlertTriangle
} from "lucide-react"

const charges = [
  {
    id: "ch_1234567890",
    date: "2024-11-15",
    description: "Pro Plan - November 2024",
    amount: 99.00,
    status: "paid",
    method: "•••• 4242",
    invoice: "inv_001",
    type: "subscription"
  },
  {
    id: "ch_1234567891",
    date: "2024-10-15",
    description: "Pro Plan - October 2024",
    amount: 99.00,
    status: "paid",
    method: "•••• 4242",
    invoice: "inv_002",
    type: "subscription"
  },
  {
    id: "ch_1234567892",
    date: "2024-09-28",
    description: "API Usage Overage",
    amount: 15.00,
    status: "paid",
    method: "•••• 4242",
    invoice: "inv_003",
    type: "usage"
  },
  {
    id: "ch_1234567893",
    date: "2024-09-15",
    description: "Pro Plan - September 2024",
    amount: 99.00,
    status: "paid",
    method: "•••• 4242",
    invoice: "inv_004",
    type: "subscription"
  },
  {
    id: "ch_1234567894",
    date: "2024-08-15",
    description: "Pro Plan - August 2024",
    amount: 99.00,
    status: "failed",
    method: "•••• 4242",
    invoice: "inv_005",
    type: "subscription"
  },
  {
    id: "ch_1234567895",
    date: "2024-08-16",
    description: "Pro Plan - August 2024 (Retry)",
    amount: 99.00,
    status: "paid",
    method: "•••• 4242",
    invoice: "inv_006",
    type: "subscription"
  },
  {
    id: "ch_1234567896",
    date: "2024-07-15",
    description: "Pro Plan - July 2024",
    amount: 99.00,
    status: "paid",
    method: "•••• 4242",
    invoice: "inv_007",
    type: "subscription"
  },
  {
    id: "ch_1234567897",
    date: "2024-06-15",
    description: "Pro Plan - June 2024",
    amount: 99.00,
    status: "paid",
    method: "•••• 4242",
    invoice: "inv_008",
    type: "subscription"
  },
]

const refunds = [
  {
    id: "re_1234567890",
    date: "2024-08-17",
    description: "Refund for failed payment",
    amount: 99.00,
    status: "succeeded",
    chargeId: "ch_1234567894",
    reason: "requested_by_customer"
  },
  {
    id: "re_1234567891",
    date: "2024-07-22",
    description: "Partial refund - downgrade",
    amount: 49.50,
    status: "succeeded",
    chargeId: "ch_1234567897",
    reason: "requested_by_customer"
  },
]

function getStatusBadge(status: string) {
  switch (status) {
    case "paid":
    case "succeeded":
      return <Badge variant="default" className="bg-green-100 text-green-800"><CheckCircle className="mr-1 h-3 w-3" />Paid</Badge>
    case "failed":
      return <Badge variant="destructive"><XCircle className="mr-1 h-3 w-3" />Failed</Badge>
    case "pending":
      return <Badge variant="secondary"><Clock className="mr-1 h-3 w-3" />Pending</Badge>
    case "refunded":
      return <Badge variant="outline"><RefreshCw className="mr-1 h-3 w-3" />Refunded</Badge>
    default:
      return <Badge variant="secondary">{status}</Badge>
  }
}

function getTypeBadge(type: string) {
  switch (type) {
    case "subscription":
      return <Badge variant="outline">Subscription</Badge>
    case "usage":
      return <Badge variant="outline">Usage</Badge>
    case "one-time":
      return <Badge variant="outline">One-time</Badge>
    default:
      return <Badge variant="outline">{type}</Badge>
  }
}

export default function ChargesPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Charges</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button>
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Charges</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,247</div>
            <p className="text-xs text-muted-foreground">
              Last 12 months
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Successful</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">
              This month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Failed</CardTitle>
            <XCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">
              This month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Refunds</CardTitle>
            <RefreshCw className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$148.50</div>
            <p className="text-xs text-muted-foreground">
              Total refunded
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="charges" className="space-y-4">
        <TabsList>
          <TabsTrigger value="charges">Charges</TabsTrigger>
          <TabsTrigger value="refunds">Refunds</TabsTrigger>
        </TabsList>

        <TabsContent value="charges" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>All Charges</CardTitle>
              <CardDescription>
                Complete history of all charges and transactions
              </CardDescription>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search charges..." className="pl-8" />
                </div>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="paid">Paid</SelectItem>
                    <SelectItem value="failed">Failed</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="subscription">Subscription</SelectItem>
                    <SelectItem value="usage">Usage</SelectItem>
                    <SelectItem value="one-time">One-time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Invoice</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {charges.map((charge) => (
                    <TableRow key={charge.id}>
                      <TableCell className="font-medium">
                        {new Date(charge.date).toLocaleDateString()}
                      </TableCell>
                      <TableCell>{charge.description}</TableCell>
                      <TableCell>{getTypeBadge(charge.type)}</TableCell>
                      <TableCell>${charge.amount.toFixed(2)}</TableCell>
                      <TableCell>{getStatusBadge(charge.status)}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <CreditCard className="mr-2 h-4 w-4 text-muted-foreground" />
                          {charge.method}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button variant="link" className="p-0 h-auto">
                          {charge.invoice}
                        </Button>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="refunds" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Refunds</CardTitle>
              <CardDescription>
                History of all refunds and chargebacks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Reason</TableHead>
                    <TableHead>Original Charge</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {refunds.map((refund) => (
                    <TableRow key={refund.id}>
                      <TableCell className="font-medium">
                        {new Date(refund.date).toLocaleDateString()}
                      </TableCell>
                      <TableCell>{refund.description}</TableCell>
                      <TableCell>${refund.amount.toFixed(2)}</TableCell>
                      <TableCell>{getStatusBadge(refund.status)}</TableCell>
                      <TableCell>
                        <Badge variant="outline">
                          {refund.reason.replace(/_/g, ' ')}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="link" className="p-0 h-auto">
                          {refund.chargeId}
                        </Button>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 