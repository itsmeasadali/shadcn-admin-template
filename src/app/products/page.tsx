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
  Package, 
  ShoppingCart, 
  DollarSign,
  TrendingUp,
  Star,
  Edit,
  Trash2,
  Eye,
  Copy,
  AlertTriangle,
  CheckCircle,
  XCircle,
  BarChart3,
  Image as ImageIcon
} from "lucide-react"

const products = [
  {
    id: 1,
    name: "Premium Software License",
    category: "Software",
    sku: "PSL-001",
    price: "$299.99",
    cost: "$89.99",
    stock: 150,
    lowStockThreshold: 20,
    status: "Active",
    sales: 245,
    revenue: "$73,497.55",
    rating: 4.8,
    reviews: 89,
    image: "/products/software.jpg",
    description: "Advanced software solution for enterprise clients",
    lastUpdated: "2024-01-15"
  },
  {
    id: 2,
    name: "Professional Consulting Package",
    category: "Services",
    sku: "PCP-002",
    price: "$2,499.99",
    cost: "$799.99",
    stock: 25,
    lowStockThreshold: 5,
    status: "Active",
    sales: 67,
    revenue: "$167,499.33",
    rating: 4.9,
    reviews: 34,
    image: "/products/consulting.jpg",
    description: "Comprehensive consulting services for business transformation",
    lastUpdated: "2024-01-16"
  },
  {
    id: 3,
    name: "Basic Training Course",
    category: "Education",
    sku: "BTC-003",
    price: "$99.99",
    cost: "$29.99",
    stock: 8,
    lowStockThreshold: 10,
    status: "Low Stock",
    sales: 412,
    revenue: "$41,199.88",
    rating: 4.6,
    reviews: 156,
    image: "/products/training.jpg",
    description: "Fundamental training course for new users",
    lastUpdated: "2024-01-14"
  },
  {
    id: 4,
    name: "Enterprise Solution Bundle",
    category: "Software",
    sku: "ESB-004",
    price: "$4,999.99",
    cost: "$1,499.99",
    stock: 45,
    lowStockThreshold: 10,
    status: "Active",
    sales: 23,
    revenue: "$114,999.77",
    rating: 4.7,
    reviews: 12,
    image: "/products/enterprise.jpg",
    description: "Complete enterprise software bundle with premium support",
    lastUpdated: "2024-01-16"
  },
  {
    id: 5,
    name: "Mobile App License",
    category: "Software",
    sku: "MAL-005",
    price: "$49.99",
    cost: "$14.99",
    stock: 0,
    lowStockThreshold: 50,
    status: "Out of Stock",
    sales: 678,
    revenue: "$33,896.22",
    rating: 4.4,
    reviews: 234,
    image: "/products/mobile.jpg",
    description: "Mobile application license for iOS and Android",
    lastUpdated: "2024-01-12"
  }
]

const topCategories = [
  { name: "Software", products: 45, revenue: "$245,000", growth: "+18%" },
  { name: "Services", products: 23, revenue: "$189,000", growth: "+24%" },
  { name: "Education", products: 12, revenue: "$78,000", growth: "+12%" },
  { name: "Hardware", products: 8, revenue: "$45,000", growth: "+6%" }
]

export default function ProductsPage() {
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
                <BreadcrumbPage>Products</BreadcrumbPage>
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
          <h1 className="text-3xl font-bold tracking-tight">Products</h1>
          <p className="text-muted-foreground">
            Manage your product catalog, inventory, and sales performance.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Product
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Products</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+12%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5,678</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+18%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$431K</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+22%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Rating</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.7</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+0.2</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Category Performance & Inventory Status */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Top Categories</CardTitle>
            <CardDescription>Performance by product category</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {topCategories.map((category) => (
              <div key={category.name} className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="font-medium">{category.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {category.products} products
                  </div>
                </div>
                <div className="text-right space-y-1">
                  <div className="font-medium">{category.revenue}</div>
                  <div className="text-sm text-green-600">{category.growth}</div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Inventory Status</CardTitle>
            <CardDescription>Current stock levels overview</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  In Stock
                </span>
                <span>892 products</span>
              </div>
              <Progress value={72} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center">
                  <AlertTriangle className="h-4 w-4 text-yellow-500 mr-2" />
                  Low Stock
                </span>
                <span>234 products</span>
              </div>
              <Progress value={19} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center">
                  <XCircle className="h-4 w-4 text-red-500 mr-2" />
                  Out of Stock
                </span>
                <span>108 products</span>
              </div>
              <Progress value={9} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Product Performance Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Sales Performance</CardTitle>
          <CardDescription>Monthly sales trends and revenue</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] flex items-center justify-center bg-muted rounded-lg">
            <div className="text-center">
              <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
              <p className="text-muted-foreground">Sales chart would be displayed here</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Products Table */}
      <Card>
        <CardHeader>
          <CardTitle>Product Catalog</CardTitle>
          <CardDescription>
            Comprehensive list of all products with inventory and performance data.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search products..." className="pl-8" />
            </div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="software">Software</SelectItem>
                <SelectItem value="services">Services</SelectItem>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="hardware">Hardware</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="low-stock">Low Stock</SelectItem>
                <SelectItem value="out-of-stock">Out of Stock</SelectItem>
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
                  <TableHead>Product</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Sales</TableHead>
                  <TableHead>Revenue</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={product.image} alt={product.name} />
                          <AvatarFallback>
                            <ImageIcon className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{product.name}</div>
                          <div className="text-sm text-muted-foreground">
                            SKU: {product.sku}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{product.category}</Badge>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{product.price}</div>
                        <div className="text-sm text-muted-foreground">
                          Cost: {product.cost}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-medium">{product.stock} units</div>
                        {product.stock <= product.lowStockThreshold && (
                          <div className="text-xs text-red-600">
                            Low stock warning
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={
                        product.status === 'Active' ? 'default' :
                        product.status === 'Low Stock' ? 'secondary' :
                        product.status === 'Out of Stock' ? 'destructive' : 'outline'
                      }>
                        {product.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">{product.sales}</div>
                      <div className="text-sm text-muted-foreground">units sold</div>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium text-green-600">{product.revenue}</div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{product.rating}</span>
                        <span className="text-sm text-muted-foreground">
                          ({product.reviews})
                        </span>
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
                            Edit Product
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Copy className="mr-2 h-4 w-4" />
                            Duplicate Product
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <BarChart3 className="mr-2 h-4 w-4" />
                            View Analytics
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete Product
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