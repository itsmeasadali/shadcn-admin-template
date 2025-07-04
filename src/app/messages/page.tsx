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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Textarea } from "@/components/ui/textarea"
import { 
  MoreHorizontal, 
  Search, 
  Plus, 
  Filter, 
  Download, 
  Mail, 
  MessageSquare,
  Send,
  Reply,
  Forward,
  Archive,
  Trash2,
  Star,
  Clock,
  CheckCircle,
  XCircle,
  Eye,
  Edit,
  Phone,
  Video,
  Paperclip,
  Users,
  TrendingUp,
  Calendar
} from "lucide-react"

const messages = [
  {
    id: "MSG-2024-001",
    type: "Email",
    subject: "Follow-up on Software License Proposal",
    sender: {
      name: "Sarah Johnson",
      email: "sarah@techsolutions.com",
      avatar: "/avatars/sarah.jpg"
    },
    recipient: {
      name: "John Sales",
      email: "john@company.com",
      avatar: "/avatars/john.jpg"
    },
    company: "Tech Solutions Inc.",
    status: "Sent",
    priority: "High",
    date: "2024-01-18",
    time: "2:30 PM",
    preview: "Thank you for your interest in our premium software license. I wanted to follow up on our discussion...",
    threadCount: 3,
    attachments: 2,
    isRead: true,
    isStarred: false
  },
  {
    id: "MSG-2024-002",
    type: "SMS",
    subject: "Meeting Reminder",
    sender: {
      name: "Michael Chen",
      email: "michael@designstudio.com",
      avatar: "/avatars/michael.jpg"
    },
    recipient: {
      name: "Jane Sales",
      email: "jane@company.com",
      avatar: "/avatars/jane.jpg"
    },
    company: "Design Studio Pro",
    status: "Delivered",
    priority: "Medium",
    date: "2024-01-18",
    time: "1:15 PM",
    preview: "Hi Jane, just a reminder about our meeting tomorrow at 3 PM to discuss the design project.",
    threadCount: 1,
    attachments: 0,
    isRead: false,
    isStarred: true
  },
  {
    id: "MSG-2024-003",
    type: "Email",
    subject: "Contract Review and Questions",
    sender: {
      name: "Emily Rodriguez",
      email: "emily@marketing.com",
      avatar: "/avatars/emily.jpg"
    },
    recipient: {
      name: "Bob Legal",
      email: "bob@company.com",
      avatar: "/avatars/bob.jpg"
    },
    company: "Marketing Solutions",
    status: "Draft",
    priority: "Low",
    date: "2024-01-17",
    time: "4:45 PM",
    preview: "I've reviewed the contract and have a few questions about the terms and conditions...",
    threadCount: 1,
    attachments: 1,
    isRead: true,
    isStarred: false
  },
  {
    id: "MSG-2024-004",
    type: "Call",
    subject: "Discovery Call - Enterprise Solution",
    sender: {
      name: "David Thompson",
      email: "david@globalent.com",
      avatar: "/avatars/david.jpg"
    },
    recipient: {
      name: "Alice Sales",
      email: "alice@company.com",
      avatar: "/avatars/alice.jpg"
    },
    company: "Global Enterprises",
    status: "Completed",
    priority: "High",
    date: "2024-01-17",
    time: "10:00 AM",
    preview: "30-minute discovery call to discuss enterprise solution requirements and implementation timeline.",
    threadCount: 1,
    attachments: 0,
    isRead: true,
    isStarred: true
  },
  {
    id: "MSG-2024-005",
    type: "Email",
    subject: "Payment Confirmation Required",
    sender: {
      name: "Lisa Wang",
      email: "lisa@startup.com",
      avatar: "/avatars/lisa.jpg"
    },
    recipient: {
      name: "Tom Finance",
      email: "tom@company.com",
      avatar: "/avatars/tom.jpg"
    },
    company: "Startup Hub",
    status: "Failed",
    priority: "High",
    date: "2024-01-16",
    time: "3:20 PM",
    preview: "We need to confirm the payment details for the recent invoice. There seems to be an issue...",
    threadCount: 2,
    attachments: 1,
    isRead: false,
    isStarred: false
  }
]

const messageStats = [
  { type: "Email", count: 1247, percentage: 68, sent: 856, received: 391 },
  { type: "SMS", count: 324, percentage: 18, sent: 198, received: 126 },
  { type: "Call", count: 156, percentage: 9, sent: 89, received: 67 },
  { type: "Video", count: 89, percentage: 5, sent: 45, received: 44 }
]

export default function MessagesPage() {
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
                <BreadcrumbPage>Messages</BreadcrumbPage>
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
          <h1 className="text-3xl font-bold tracking-tight">Messages</h1>
          <p className="text-muted-foreground">
            Manage communications, track conversations, and analyze engagement.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Compose
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Messages</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,816</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+15%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
            <Reply className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87.3%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+3.2%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4h</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">-18min</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Threads</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">234</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-blue-600">12</span> new today
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Communication Channels & Response Analytics */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Communication Channels</CardTitle>
            <CardDescription>Message distribution by channel type</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {messageStats.map((stat) => (
              <div key={stat.type} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{stat.type}</span>
                  <span>{stat.count} messages</span>
                </div>
                <Progress value={stat.percentage} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Sent: {stat.sent}</span>
                  <span>Received: {stat.received}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Response Analytics</CardTitle>
            <CardDescription>Communication effectiveness metrics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Email Open Rate</span>
                <span>68.4%</span>
              </div>
              <Progress value={68.4} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Email Click Rate</span>
                <span>24.7%</span>
              </div>
              <Progress value={24.7} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Call Connection Rate</span>
                <span>89.2%</span>
              </div>
              <Progress value={89.2} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>SMS Delivery Rate</span>
                <span>98.1%</span>
              </div>
              <Progress value={98.1} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Communication Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Communication Timeline</CardTitle>
          <CardDescription>Message volume and engagement over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] flex items-center justify-center bg-muted rounded-lg">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
              <p className="text-muted-foreground">Communication timeline chart would be displayed here</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Messages Table */}
      <Card>
        <CardHeader>
          <CardTitle>Message Center</CardTitle>
          <CardDescription>
            Manage all customer communications and track conversation history.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search messages..." className="pl-8" />
            </div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="email">Email</SelectItem>
                <SelectItem value="sms">SMS</SelectItem>
                <SelectItem value="call">Call</SelectItem>
                <SelectItem value="video">Video</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="sent">Sent</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
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
                  <TableHead>Message</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Thread</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {messages.map((message) => (
                  <TableRow key={message.id} className={!message.isRead ? "bg-blue-50/50" : ""}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          {message.isStarred && <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />}
                          {!message.isRead && <div className="h-2 w-2 bg-blue-500 rounded-full" />}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">{message.subject}</div>
                          <div className="text-sm text-muted-foreground truncate max-w-md">
                            {message.preview}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarImage src={message.sender.avatar} alt={message.sender.name} />
                          <AvatarFallback>
                            {message.sender.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{message.sender.name}</div>
                          <div className="text-sm text-muted-foreground">{message.company}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        {message.type === 'Email' && <Mail className="h-4 w-4 text-blue-500" />}
                        {message.type === 'SMS' && <MessageSquare className="h-4 w-4 text-green-500" />}
                        {message.type === 'Call' && <Phone className="h-4 w-4 text-purple-500" />}
                        {message.type === 'Video' && <Video className="h-4 w-4 text-orange-500" />}
                        <span className="text-sm">{message.type}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={
                        message.status === 'Sent' ? 'default' :
                        message.status === 'Delivered' ? 'default' :
                        message.status === 'Draft' ? 'secondary' :
                        message.status === 'Failed' ? 'destructive' :
                        message.status === 'Completed' ? 'default' : 'outline'
                      }>
                        {message.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={
                        message.priority === 'High' ? 'destructive' :
                        message.priority === 'Medium' ? 'default' :
                        'secondary'
                      }>
                        {message.priority}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="text-sm">{message.date}</div>
                        <div className="text-xs text-muted-foreground">{message.time}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm">{message.threadCount}</span>
                        {message.attachments > 0 && (
                          <div className="flex items-center space-x-1">
                            <Paperclip className="h-3 w-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">{message.attachments}</span>
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
                            View Message
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Reply className="mr-2 h-4 w-4" />
                            Reply
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Forward className="mr-2 h-4 w-4" />
                            Forward
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Star className="mr-2 h-4 w-4" />
                            {message.isStarred ? 'Unstar' : 'Star'}
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Archive className="mr-2 h-4 w-4" />
                            Archive
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
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