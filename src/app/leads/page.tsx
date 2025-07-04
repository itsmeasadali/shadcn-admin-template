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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  MoreHorizontal, 
  Search, 
  Plus, 
  Filter, 
  Download, 
  Target, 
  Users, 
  DollarSign,
  TrendingUp,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Star,
  Edit,
  Trash2,
  Eye,
  UserPlus,
  ArrowRight,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle
} from "lucide-react"

const leads = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "Tech Innovations LLC",
    email: "sarah@techinnovations.com",
    phone: "+1 (555) 123-4567",
    source: "Website",
    status: "New",
    score: 85,
    value: "$25,000",
    assignedTo: "John Doe",
    lastContact: "2024-01-16",
    createdAt: "2024-01-15",
    location: "San Francisco, CA",
    industry: "Technology",
    avatar: "/avatars/sarah.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "Design Studio Pro",
    email: "michael@designstudio.com",
    phone: "+1 (555) 987-6543",
    source: "LinkedIn",
    status: "Qualified",
    score: 92,
    value: "$45,000",
    assignedTo: "Jane Smith",
    lastContact: "2024-01-16",
    createdAt: "2024-01-12",
    location: "New York, NY",
    industry: "Design",
    avatar: "/avatars/michael.jpg"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    company: "Marketing Solutions",
    email: "emily@marketingsol.com",
    phone: "+1 (555) 456-7890",
    source: "Referral",
    status: "Proposal",
    score: 78,
    value: "$35,000",
    assignedTo: "Bob Wilson",
    lastContact: "2024-01-15",
    createdAt: "2024-01-10",
    location: "Los Angeles, CA",
    industry: "Marketing",
    avatar: "/avatars/emily.jpg"
  },
  {
    id: 4,
    name: "David Thompson",
    company: "Global Enterprises",
    email: "david@globalent.com",
    phone: "+1 (555) 321-0987",
    source: "Cold Email",
    status: "Negotiation",
    score: 95,
    value: "$75,000",
    assignedTo: "Alice Brown",
    lastContact: "2024-01-16",
    createdAt: "2024-01-08",
    location: "Chicago, IL",
    industry: "Enterprise",
    avatar: "/avatars/david.jpg"
  },
  {
    id: 5,
    name: "Lisa Wang",
    company: "Startup Hub",
    email: "lisa@startuphub.com",
    phone: "+1 (555) 654-3210",
    source: "Event",
    status: "Lost",
    score: 65,
    value: "$15,000",
    assignedTo: "Tom Davis",
    lastContact: "2024-01-14",
    createdAt: "2024-01-05",
    location: "Austin, TX",
    industry: "Startup",
    avatar: "/avatars/lisa.jpg"
  }
]

const pipelineStages = [
  { name: "New", count: 12, value: "$180,000", color: "bg-blue-500" },
  { name: "Qualified", count: 8, value: "$240,000", color: "bg-yellow-500" },
  { name: "Proposal", count: 5, value: "$150,000", color: "bg-orange-500" },
  { name: "Negotiation", count: 3, value: "$120,000", color: "bg-purple-500" },
  { name: "Closed Won", count: 2, value: "$80,000", color: "bg-green-500" },
  { name: "Lost", count: 4, value: "$60,000", color: "bg-red-500" }
]

export default function LeadsPage() {
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
                  Customer Management
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Leads</BreadcrumbPage>
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
          <h1 className="text-3xl font-bold tracking-tight">Leads</h1>
          <p className="text-muted-foreground">
            Track and manage your sales pipeline and lead generation.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Lead
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,847</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+22%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Qualified Leads</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">324</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+18%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24.3%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+2.1%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pipeline Value</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$830K</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+15%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Pipeline Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Sales Pipeline</CardTitle>
          <CardDescription>Overview of leads by stage</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
            {pipelineStages.map((stage, index) => (
              <div key={stage.name} className="text-center">
                <div className={`h-24 rounded-lg ${stage.color} flex items-center justify-center text-white font-bold text-2xl mb-2`}>
                  {stage.count}
                </div>
                <div className="space-y-1">
                  <div className="font-medium text-sm">{stage.name}</div>
                  <div className="text-xs text-muted-foreground">{stage.value}</div>
                </div>
                {index < pipelineStages.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Lead Sources & Performance */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Lead Sources</CardTitle>
            <CardDescription>Where your leads are coming from</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Website</span>
                <span>35%</span>
              </div>
              <Progress value={35} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>LinkedIn</span>
                <span>28%</span>
              </div>
              <Progress value={28} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Referrals</span>
                <span>22%</span>
              </div>
              <Progress value={22} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Cold Email</span>
                <span>15%</span>
              </div>
              <Progress value={15} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Lead Quality Score</CardTitle>
            <CardDescription>Average lead scores by source</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Referrals</span>
              <div className="flex items-center space-x-2">
                <Progress value={92} className="h-2 w-16" />
                <span className="text-sm font-medium">92</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">LinkedIn</span>
              <div className="flex items-center space-x-2">
                <Progress value={85} className="h-2 w-16" />
                <span className="text-sm font-medium">85</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Website</span>
              <div className="flex items-center space-x-2">
                <Progress value={78} className="h-2 w-16" />
                <span className="text-sm font-medium">78</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Cold Email</span>
              <div className="flex items-center space-x-2">
                <Progress value={65} className="h-2 w-16" />
                <span className="text-sm font-medium">65</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Leads Table */}
      <Card>
        <CardHeader>
          <CardTitle>Lead Management</CardTitle>
          <CardDescription>
            Track and manage all your leads in one place.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search leads..." className="pl-8" />
            </div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Leads</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="qualified">Qualified</SelectItem>
                <SelectItem value="proposal">Proposal</SelectItem>
                <SelectItem value="negotiation">Negotiation</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by source" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sources</SelectItem>
                <SelectItem value="website">Website</SelectItem>
                <SelectItem value="linkedin">LinkedIn</SelectItem>
                <SelectItem value="referral">Referral</SelectItem>
                <SelectItem value="cold-email">Cold Email</SelectItem>
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
                  <TableHead>Lead</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Source</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Score</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead>Assigned To</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leads.map((lead) => (
                  <TableRow key={lead.id}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarImage src={lead.avatar} alt={lead.name} />
                          <AvatarFallback>{lead.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{lead.name}</div>
                          <div className="text-sm text-muted-foreground flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {lead.location}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{lead.company}</div>
                        <div className="text-sm text-muted-foreground">{lead.industry}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2 text-sm">
                          <Mail className="h-3 w-3 text-muted-foreground" />
                          <span>{lead.email}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <Phone className="h-3 w-3 text-muted-foreground" />
                          <span>{lead.phone}</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{lead.source}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={
                        lead.status === 'New' ? 'secondary' :
                        lead.status === 'Qualified' ? 'default' :
                        lead.status === 'Proposal' ? 'default' :
                        lead.status === 'Negotiation' ? 'default' :
                        lead.status === 'Lost' ? 'destructive' : 'default'
                      }>
                        {lead.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Progress value={lead.score} className="h-2 w-16" />
                        <span className="text-sm font-medium">{lead.score}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium text-green-600">{lead.value}</div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">{lead.assignedTo}</div>
                      <div className="text-xs text-muted-foreground">
                        Last: {lead.lastContact}
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
                            Edit Lead
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <UserPlus className="mr-2 h-4 w-4" />
                            Convert to Contact
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Mail className="mr-2 h-4 w-4" />
                            Send Email
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Phone className="mr-2 h-4 w-4" />
                            Schedule Call
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete Lead
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