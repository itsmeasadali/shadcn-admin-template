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
  ShoppingCart, 
  Search, 
  Plus, 
  Eye, 
  Edit, 
  Truck,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  DollarSign,
  TrendingUp,
  Package,
  Filter,
  Download,
  Calendar,
  User,
  CreditCard,
  Mail,
  MapPin,
  MoreHorizontal,
  Printer,
  RefreshCw
} from "lucide-react"

const orders = [
  {
    id: "ORD-2024-001",
    customer: {
      name: "Sarah Johnson",
      email: "sarah@techsolutions.com",
      avatar: "/avatars/sarah.jpg"
    },
    company: "Tech Solutions Inc.",
    products: [
      { name: "Premium Software License", quantity: 2, price: 299.99 },
      { name: "Professional Support", quantity: 1, price: 199.99 }
    ],
    total: 799.97,
    status: "Delivered",
    paymentStatus: "Paid",
    orderDate: "2024-01-15",
    deliveryDate: "2024-01-18",
    shippingAddress: "123 Tech St, San Francisco, CA 94105",
    trackingNumber: "TRK123456789"
  },
  {
    id: "ORD-2024-002",
    customer: {
      name: "Michael Chen",
      email: "michael@designstudio.com",
      avatar: "/avatars/michael.jpg"
    },
    company: "Design Studio Pro",
    products: [
      { name: "Enterprise Solution Bundle", quantity: 1, price: 4999.99 }
    ],
    total: 4999.99,
    status: "Processing",
    paymentStatus: "Paid",
    orderDate: "2024-01-16",
    deliveryDate: "2024-01-20",
    shippingAddress: "456 Design Ave, New York, NY 10001",
    trackingNumber: "TRK987654321"
  },
  {
    id: "ORD-2024-003",
    customer: {
      name: "Emily Rodriguez",
      email: "emily@marketing.com",
      avatar: "/avatars/emily.jpg"
    },
    company: "Marketing Solutions",
    products: [
      { name: "Basic Training Course", quantity: 5, price: 99.99 },
      { name: "API Credits Pack", quantity: 3, price: 19.99 }
    ],
    total: 559.92,
    status: "Shipped",
    paymentStatus: "Paid",
    orderDate: "2024-01-14",
    deliveryDate: "2024-01-17",
    shippingAddress: "789 Marketing Blvd, Los Angeles, CA 90210",
    trackingNumber: "TRK456789123"
  },
  {
    id: "ORD-2024-004",
    customer: {
      name: "David Thompson",
      email: "david@globalent.com",
      avatar: "/avatars/david.jpg"
    },
    company: "Global Enterprises",
    products: [
      { name: "Professional Consulting", quantity: 1, price: 2499.99 }
    ],
    total: 2499.99,
    status: "Pending",
    paymentStatus: "Pending",
    orderDate: "2024-01-16",
    deliveryDate: "2024-01-22",
    shippingAddress: "321 Enterprise Dr, Chicago, IL 60601",
    trackingNumber: null
  },
  {
    id: "ORD-2024-005",
    customer: {
      name: "Lisa Wang",
      email: "lisa@startup.com",
      avatar: "/avatars/lisa.jpg"
    },
    company: "Startup Hub",
    products: [
      { name: "Mobile App License", quantity: 3, price: 49.99 }
    ],
    total: 149.97,
    status: "Cancelled",
    paymentStatus: "Refunded",
    orderDate: "2024-01-12",
    deliveryDate: null,
    shippingAddress: "654 Startup Way, Austin, TX 78701",
    trackingNumber: null
  }
]

const orderStats = [
  { status: "Pending", count: 45, color: "bg-yellow-500" },
  { status: "Processing", count: 23, color: "bg-blue-500" },
  { status: "Shipped", count: 67, color: "bg-purple-500" },
  { status: "Delivered", count: 234, color: "bg-green-500" },
  { status: "Cancelled", count: 12, color: "bg-red-500" }
]



export default function OrdersPage() {
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
                  Sales & Commerce
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Orders</BreadcrumbPage>
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
          <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
          <p className="text-muted-foreground">
            Track and manage customer orders and fulfillment.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Create Order
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+18%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-yellow-600">+3</span> from yesterday
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$124K</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+22%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Order Value</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$435</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+5%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Order Status Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Order Status Overview</CardTitle>
          <CardDescription>Current order distribution by status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-5">
            {orderStats.map((stat) => (
              <div key={stat.status} className="text-center">
                <div className={`h-16 rounded-lg ${stat.color} flex items-center justify-center text-white font-bold text-xl mb-2`}>
                  {stat.count}
                </div>
                <div className="font-medium text-sm">{stat.status}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance Metrics */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Fulfillment Performance</CardTitle>
            <CardDescription>Order processing and delivery metrics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>On-time Delivery</span>
                <span>94.2%</span>
              </div>
              <Progress value={94.2} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Processing Time</span>
                <span>87.5%</span>
              </div>
              <Progress value={87.5} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Customer Satisfaction</span>
                <span>96.8%</span>
              </div>
              <Progress value={96.8} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment Status</CardTitle>
            <CardDescription>Payment processing overview</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Paid
                </span>
                <span>2,456 orders</span>
              </div>
              <Progress value={86} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center">
                  <Clock className="h-4 w-4 text-yellow-500 mr-2" />
                  Pending
                </span>
                <span>234 orders</span>
              </div>
              <Progress value={8} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center">
                  <XCircle className="h-4 w-4 text-red-500 mr-2" />
                  Failed
                </span>
                <span>157 orders</span>
              </div>
              <Progress value={6} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Orders Table */}
      <Card>
        <CardHeader>
          <CardTitle>Order Management</CardTitle>
          <CardDescription>
            View and manage all customer orders in one place.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search orders..." className="pl-8" />
            </div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Orders</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="shipped">Shipped</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Payment status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Payments</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
                <SelectItem value="refunded">Refunded</SelectItem>
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
                  <TableHead>Order</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Products</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Payment</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{order.id}</div>
                        {order.trackingNumber && (
                          <div className="text-sm text-muted-foreground">
                            Tracking: {order.trackingNumber}
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarImage src={order.customer.avatar} alt={order.customer.name} />
                          <AvatarFallback>
                            {order.customer.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{order.customer.name}</div>
                          <div className="text-sm text-muted-foreground">{order.company}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        {order.products.map((product, index) => (
                          <div key={index} className="text-sm">
                            {product.quantity}x {product.name}
                          </div>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">${order.total.toFixed(2)}</div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={
                        order.status === 'Delivered' ? 'default' :
                        order.status === 'Shipped' ? 'secondary' :
                        order.status === 'Processing' ? 'default' :
                        order.status === 'Pending' ? 'secondary' :
                        order.status === 'Cancelled' ? 'destructive' : 'outline'
                      }>
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={
                        order.paymentStatus === 'Paid' ? 'default' :
                        order.paymentStatus === 'Pending' ? 'secondary' :
                        order.paymentStatus === 'Failed' ? 'destructive' :
                        order.paymentStatus === 'Refunded' ? 'outline' : 'outline'
                      }>
                        {order.paymentStatus}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="text-sm">{order.orderDate}</div>
                        {order.deliveryDate && (
                          <div className="text-xs text-muted-foreground">
                            Due: {order.deliveryDate}
                          </div>
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
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit Order
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Printer className="mr-2 h-4 w-4" />
                            Print Invoice
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Mail className="mr-2 h-4 w-4" />
                            Send Update
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Truck className="mr-2 h-4 w-4" />
                            Track Shipment
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <RefreshCw className="mr-2 h-4 w-4" />
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