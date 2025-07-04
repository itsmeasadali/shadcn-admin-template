import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  MessageSquare, 
  Search, 
  Plus, 
  Eye, 
  Send, 
  Reply,
  Forward,
  Trash2,
  Star,
  Archive,
  Inbox,
  Mail,
  MailOpen,
  Clock,
  CheckCircle,
  AlertCircle,
  Filter,
  Paperclip,
  Flag
} from "lucide-react"

const messages = [
  {
    id: "msg_001",
    from: "John Doe",
    email: "john@example.com",
    subject: "Question about Pro Plan features",
    preview: "Hi, I'm interested in upgrading to the Pro plan and wanted to know more about...",
    date: "2024-11-15",
    status: "unread",
    priority: "normal",
    type: "support",
    hasAttachment: false
  },
  {
    id: "msg_002",
    from: "Jane Smith",
    email: "jane@example.com",
    subject: "Payment failed notification",
    preview: "Hello, I received a notification that my payment failed. Could you please help...",
    date: "2024-11-14",
    status: "read",
    priority: "high",
    type: "billing",
    hasAttachment: true
  },
  {
    id: "msg_003",
    from: "Bob Johnson",
    email: "bob@example.com",
    subject: "Feature request: API rate limiting",
    preview: "I would like to request a new feature for API rate limiting configuration...",
    date: "2024-11-13",
    status: "replied",
    priority: "low",
    type: "feature",
    hasAttachment: false
  },
  {
    id: "msg_004",
    from: "Alice Brown",
    email: "alice@example.com",
    subject: "Integration help needed",
    preview: "We're having trouble integrating with our existing CRM system. Can you provide...",
    date: "2024-11-12",
    status: "read",
    priority: "high",
    type: "support",
    hasAttachment: true
  },
  {
    id: "msg_005",
    from: "Charlie Wilson",
    email: "charlie@example.com",
    subject: "Thank you for the excellent service",
    preview: "I just wanted to thank you for the excellent customer service. The team was...",
    date: "2024-11-11",
    status: "archived",
    priority: "normal",
    type: "feedback",
    hasAttachment: false
  },
  {
    id: "msg_006",
    from: "Diana Lee",
    email: "diana@example.com",
    subject: "Billing inquiry",
    preview: "I have a question about my recent invoice. Could you please clarify the charges...",
    date: "2024-11-10",
    status: "unread",
    priority: "normal",
    type: "billing",
    hasAttachment: false
  },
]

const sentMessages = [
  {
    id: "sent_001",
    to: "John Doe",
    email: "john@example.com",
    subject: "Re: Question about Pro Plan features",
    preview: "Thank you for your interest in our Pro plan. Here are the key features...",
    date: "2024-11-15",
    status: "sent",
    type: "support"
  },
  {
    id: "sent_002",
    to: "Alice Brown",
    email: "alice@example.com",
    subject: "Re: Integration help needed",
    preview: "I've reviewed your integration requirements. Here's a step-by-step guide...",
    date: "2024-11-12",
    status: "sent",
    type: "support"
  },
]

function getStatusBadge(status: string) {
  switch (status) {
    case "unread":
      return <Badge variant="default" className="bg-blue-100 text-blue-800"><Mail className="mr-1 h-3 w-3" />Unread</Badge>
    case "read":
      return <Badge variant="secondary"><MailOpen className="mr-1 h-3 w-3" />Read</Badge>
    case "replied":
      return <Badge variant="default" className="bg-green-100 text-green-800"><Reply className="mr-1 h-3 w-3" />Replied</Badge>
    case "archived":
      return <Badge variant="outline"><Archive className="mr-1 h-3 w-3" />Archived</Badge>
    case "sent":
      return <Badge variant="default" className="bg-green-100 text-green-800"><Send className="mr-1 h-3 w-3" />Sent</Badge>
    default:
      return <Badge variant="secondary">{status}</Badge>
  }
}

function getPriorityBadge(priority: string) {
  switch (priority) {
    case "high":
      return <Badge variant="destructive"><Flag className="mr-1 h-3 w-3" />High</Badge>
    case "normal":
      return <Badge variant="secondary">Normal</Badge>
    case "low":
      return <Badge variant="outline">Low</Badge>
    default:
      return <Badge variant="secondary">{priority}</Badge>
  }
}

function getTypeBadge(type: string) {
  const colors = {
    "support": "bg-blue-100 text-blue-800",
    "billing": "bg-green-100 text-green-800",
    "feature": "bg-purple-100 text-purple-800",
    "feedback": "bg-orange-100 text-orange-800",
    "general": "bg-gray-100 text-gray-800",
  }
  return <Badge variant="outline" className={colors[type as keyof typeof colors] || ""}>{type}</Badge>
}

export default function MessagesPage() {
  const unreadCount = messages.filter(m => m.status === 'unread').length
  const totalMessages = messages.length
  const highPriorityCount = messages.filter(m => m.priority === 'high').length

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Messages</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Compose
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Messages</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalMessages}</div>
            <p className="text-xs text-muted-foreground">
              +5 from last week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unread</CardTitle>
            <Mail className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{unreadCount}</div>
            <p className="text-xs text-muted-foreground">
              Requires attention
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">High Priority</CardTitle>
            <Flag className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{highPriorityCount}</div>
            <p className="text-xs text-muted-foreground">
              Urgent responses needed
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
            <p className="text-xs text-muted-foreground">
              Avg response time: 2h
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="inbox" className="space-y-4">
        <TabsList>
          <TabsTrigger value="inbox">Inbox</TabsTrigger>
          <TabsTrigger value="sent">Sent</TabsTrigger>
          <TabsTrigger value="drafts">Drafts</TabsTrigger>
          <TabsTrigger value="archived">Archived</TabsTrigger>
        </TabsList>

        <TabsContent value="inbox" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Inbox</CardTitle>
              <CardDescription>
                Manage incoming messages and support requests
              </CardDescription>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search messages..." className="pl-8" />
                </div>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Messages</SelectItem>
                    <SelectItem value="unread">Unread</SelectItem>
                    <SelectItem value="read">Read</SelectItem>
                    <SelectItem value="replied">Replied</SelectItem>
                    <SelectItem value="archived">Archived</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="support">Support</SelectItem>
                    <SelectItem value="billing">Billing</SelectItem>
                    <SelectItem value="feature">Feature Request</SelectItem>
                    <SelectItem value="feedback">Feedback</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>From</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {messages.map((message) => (
                    <TableRow key={message.id} className={message.status === 'unread' ? 'bg-muted/50' : ''}>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <div>
                            <div className="font-medium">{message.from}</div>
                            <div className="text-sm text-muted-foreground">{message.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <div>
                            <div className="font-medium">{message.subject}</div>
                            <div className="text-sm text-muted-foreground truncate max-w-[200px]">
                              {message.preview}
                            </div>
                          </div>
                          {message.hasAttachment && (
                            <Paperclip className="h-4 w-4 text-muted-foreground" />
                          )}
                        </div>
                      </TableCell>
                      <TableCell>{getTypeBadge(message.type)}</TableCell>
                      <TableCell>{getPriorityBadge(message.priority)}</TableCell>
                      <TableCell>{new Date(message.date).toLocaleDateString()}</TableCell>
                      <TableCell>{getStatusBadge(message.status)}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Reply className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Archive className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sent" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Sent Messages</CardTitle>
              <CardDescription>
                View messages you've sent to customers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>To</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sentMessages.map((message) => (
                    <TableRow key={message.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{message.to}</div>
                          <div className="text-sm text-muted-foreground">{message.email}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{message.subject}</div>
                          <div className="text-sm text-muted-foreground truncate max-w-[200px]">
                            {message.preview}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{getTypeBadge(message.type)}</TableCell>
                      <TableCell>{new Date(message.date).toLocaleDateString()}</TableCell>
                      <TableCell>{getStatusBadge(message.status)}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Forward className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="drafts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Draft Messages</CardTitle>
              <CardDescription>
                Continue working on unsent messages
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No draft messages</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="archived" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Archived Messages</CardTitle>
              <CardDescription>
                Previously archived messages
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>From</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {messages.filter(m => m.status === 'archived').map((message) => (
                    <TableRow key={message.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{message.from}</div>
                          <div className="text-sm text-muted-foreground">{message.email}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{message.subject}</div>
                          <div className="text-sm text-muted-foreground truncate max-w-[200px]">
                            {message.preview}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{getTypeBadge(message.type)}</TableCell>
                      <TableCell>{new Date(message.date).toLocaleDateString()}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Inbox className="h-4 w-4" />
                          </Button>
                        </div>
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