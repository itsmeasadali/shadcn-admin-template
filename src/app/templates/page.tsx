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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { 
  MoreHorizontal, 
  Search, 
  Plus, 
  Filter, 
  Download, 
  FileText, 
  Mail,
  Eye,
  Edit,
  Copy,
  Trash2,
  Star,
  Calendar,
  Users,
  TrendingUp,
  Layout,
  Palette,
  Code,
  Settings,
  Share
} from "lucide-react"

const templates = [
  {
    id: 1,
    name: "Welcome Email Template",
    description: "Standard welcome email for new subscribers",
    category: "Welcome",
    type: "Email",
    status: "Active",
    uses: 145,
    lastUsed: "2024-01-15",
    createdBy: "John Doe",
    createdAt: "2024-01-01",
    rating: 4.8,
    preview: "/templates/welcome-preview.jpg"
  },
  {
    id: 2,
    name: "Promotional Sale Template",
    description: "Template for promotional sales campaigns",
    category: "Promotional",
    type: "Email",
    status: "Active",
    uses: 89,
    lastUsed: "2024-01-14",
    createdBy: "Jane Smith",
    createdAt: "2024-01-02",
    rating: 4.6,
    preview: "/templates/promo-preview.jpg"
  },
  {
    id: 3,
    name: "Newsletter Template",
    description: "Monthly newsletter template with sections",
    category: "Newsletter",
    type: "Email",
    status: "Active",
    uses: 67,
    lastUsed: "2024-01-13",
    createdBy: "Mike Johnson",
    createdAt: "2024-01-03",
    rating: 4.9,
    preview: "/templates/newsletter-preview.jpg"
  },
  {
    id: 4,
    name: "Abandoned Cart Template",
    description: "Recovery email for abandoned shopping carts",
    category: "E-commerce",
    type: "Email",
    status: "Active",
    uses: 234,
    lastUsed: "2024-01-12",
    createdBy: "Sarah Wilson",
    createdAt: "2024-01-04",
    rating: 4.7,
    preview: "/templates/cart-preview.jpg"
  },
  {
    id: 5,
    name: "Event Invitation Template",
    description: "Template for event invitations and announcements",
    category: "Event",
    type: "Email",
    status: "Draft",
    uses: 23,
    lastUsed: "2024-01-11",
    createdBy: "Tom Davis",
    createdAt: "2024-01-05",
    rating: 4.3,
    preview: "/templates/event-preview.jpg"
  },
  {
    id: 6,
    name: "Thank You Template",
    description: "Post-purchase thank you email template",
    category: "Transactional",
    type: "Email",
    status: "Active",
    uses: 156,
    lastUsed: "2024-01-10",
    createdBy: "Lisa Wang",
    createdAt: "2024-01-06",
    rating: 4.5,
    preview: "/templates/thankyou-preview.jpg"
  }
]

const categories = [
  { name: "Welcome", count: 12, color: "bg-blue-500" },
  { name: "Promotional", count: 8, color: "bg-green-500" },
  { name: "Newsletter", count: 5, color: "bg-purple-500" },
  { name: "E-commerce", count: 15, color: "bg-orange-500" },
  { name: "Event", count: 7, color: "bg-pink-500" },
  { name: "Transactional", count: 23, color: "bg-indigo-500" }
]

export default function TemplatesPage() {
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
                <BreadcrumbPage>Templates</BreadcrumbPage>
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
              <h1 className="text-3xl font-bold tracking-tight">Templates</h1>
              <p className="text-muted-foreground">
                Create and manage email templates for your campaigns.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                New Template
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Templates</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">70</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+6</span> this month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Templates</CardTitle>
                <Layout className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">58</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+4</span> this month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Uses</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,847</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+12%</span> from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Rating</CardTitle>
                <Star className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.6</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+0.2</span> from last month
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Categories */}
          <Card>
            <CardHeader>
              <CardTitle>Template Categories</CardTitle>
              <CardDescription>Browse templates by category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {categories.map((category) => (
                  <div key={category.name} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full ${category.color}`} />
                      <div>
                        <div className="font-medium">{category.name}</div>
                        <div className="text-sm text-muted-foreground">{category.count} templates</div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      View All
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Templates */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>All Templates</CardTitle>
                  <CardDescription>Manage your email templates</CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search templates..."
                      className="pl-8 w-64"
                    />
                  </div>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Filter by category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="welcome">Welcome</SelectItem>
                      <SelectItem value="promotional">Promotional</SelectItem>
                      <SelectItem value="newsletter">Newsletter</SelectItem>
                      <SelectItem value="ecommerce">E-commerce</SelectItem>
                      <SelectItem value="event">Event</SelectItem>
                      <SelectItem value="transactional">Transactional</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {templates.map((template) => (
                  <Card key={template.id} className="overflow-hidden">
                    <div className="aspect-video bg-muted flex items-center justify-center">
                      <Mail className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-base">{template.name}</CardTitle>
                          <CardDescription className="text-sm">{template.description}</CardDescription>
                        </div>
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
                              Preview
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              Edit Template
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Copy className="mr-2 h-4 w-4" />
                              Duplicate
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Share className="mr-2 h-4 w-4" />
                              Share
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Code className="mr-2 h-4 w-4" />
                              Export HTML
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">{template.category}</Badge>
                          <Badge variant={template.status === 'Active' ? 'default' : 'secondary'}>
                            {template.status}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>Uses: {template.uses}</span>
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span>{template.rating}</span>
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          <div>Created by {template.createdBy}</div>
                          <div>Last used: {template.lastUsed}</div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Eye className="h-4 w-4 mr-2" />
                            Preview
                          </Button>
                          <Button size="sm" className="flex-1">
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
        </div>
      </div>
    </>
  )
} 