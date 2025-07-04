import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { 
  Plus, 
  Search, 
  MoreHorizontal, 
  Building2,
  MapPin,
  Edit,
  Trash2,
  Users,
  DollarSign,
  Globe,
  Phone,
  Mail
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Mock data for companies
const companies = [
  {
    id: 1,
    name: "Acme Corp",
    industry: "Technology",
    size: "Large",
    employees: "1000-5000",
    revenue: "$50M",
    location: "New York, NY",
    status: "Active",
    website: "acmecorp.com",
    contacts: 12,
    deals: 8,
    logo: "/logos/acme.png",
    initials: "AC"
  },
  {
    id: 2,
    name: "Tech Solutions",
    industry: "Software",
    size: "Medium",
    employees: "100-500",
    revenue: "$10M",
    location: "San Francisco, CA",
    status: "Active",
    website: "techsolutions.com",
    contacts: 8,
    deals: 5,
    logo: "/logos/tech-solutions.png",
    initials: "TS"
  },
  {
    id: 3,
    name: "Global Inc",
    industry: "Manufacturing",
    size: "Large",
    employees: "5000+",
    revenue: "$200M",
    location: "Chicago, IL",
    status: "Prospect",
    website: "globalinc.com",
    contacts: 15,
    deals: 3,
    logo: "/logos/global-inc.png",
    initials: "GI"
  },
  {
    id: 4,
    name: "New Ventures",
    industry: "Marketing",
    size: "Small",
    employees: "10-50",
    revenue: "$2M",
    location: "Austin, TX",
    status: "Active",
    website: "newventures.com",
    contacts: 4,
    deals: 2,
    logo: "/logos/new-ventures.png",
    initials: "NV"
  },
  {
    id: 5,
    name: "Innovate Co",
    industry: "Technology",
    size: "Medium",
    employees: "200-1000",
    revenue: "$25M",
    location: "Seattle, WA",
    status: "Active",
    website: "innovateco.com",
    contacts: 10,
    deals: 6,
    logo: "/logos/innovate.png",
    initials: "IC"
  },
  {
    id: 6,
    name: "StartupX",
    industry: "Fintech",
    size: "Small",
    employees: "5-25",
    revenue: "$500K",
    location: "Los Angeles, CA",
    status: "Lead",
    website: "startupx.com",
    contacts: 2,
    deals: 1,
    logo: "/logos/startupx.png",
    initials: "SX"
  }
]

export default function CompaniesPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Companies</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            Import Companies
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Company
          </Button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search companies..." className="pl-8" />
        </div>
      </div>

      {/* Companies Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Companies</CardTitle>
          <CardDescription>
            Manage your companies and their information.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Company</TableHead>
                <TableHead>Industry</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Revenue</TableHead>
                <TableHead>Contacts</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {companies.map((company) => (
                <TableRow key={company.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={company.logo} alt={company.name} />
                        <AvatarFallback>{company.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{company.name}</div>
                        <div className="text-sm text-muted-foreground flex items-center">
                          <Globe className="mr-1 h-3 w-3" />
                          {company.website}
                        </div>
                        <div className="text-sm text-muted-foreground flex items-center">
                          <MapPin className="mr-1 h-3 w-3" />
                          {company.location}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{company.industry}</Badge>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{company.size}</div>
                      <div className="text-sm text-muted-foreground flex items-center">
                        <Users className="mr-1 h-3 w-3" />
                        {company.employees}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <DollarSign className="mr-1 h-4 w-4 text-green-600" />
                      {company.revenue}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-center">
                      <div className="font-medium">{company.contacts}</div>
                      <div className="text-sm text-muted-foreground">{company.deals} deals</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant={
                        company.status === "Active" ? "default" : 
                        company.status === "Prospect" ? "secondary" : 
                        "outline"
                      }
                    >
                      {company.status}
                    </Badge>
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
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit company
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Users className="mr-2 h-4 w-4" />
                          View contacts
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <DollarSign className="mr-2 h-4 w-4" />
                          View deals
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete company
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Statistics Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Companies</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{companies.length}</div>
            <p className="text-xs text-muted-foreground">
              +3 from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Companies</CardTitle>
            <Badge className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {companies.filter(c => c.status === "Active").length}
            </div>
            <p className="text-xs text-muted-foreground">
              {Math.round((companies.filter(c => c.status === "Active").length / companies.length) * 100)}% of total
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$287.5M</div>
            <p className="text-xs text-muted-foreground">
              Combined revenue
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Industries</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {new Set(companies.map(c => c.industry)).size}
            </div>
            <p className="text-xs text-muted-foreground">
              Different industries
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 