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
  Calendar,
  Clock,
  Edit,
  Trash2,
  Users,
  CheckCircle,
  AlertCircle,
  Circle,
  Flag
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Mock data for tasks
const tasks = [
  {
    id: 1,
    title: "Follow up with Acme Corp",
    description: "Schedule follow-up call to discuss contract details",
    assignee: "John Doe",
    assigneeAvatar: "/avatars/john-doe.jpg",
    assigneeInitials: "JD",
    priority: "High",
    status: "In Progress",
    dueDate: "2024-01-20",
    company: "Acme Corp",
    type: "Call"
  },
  {
    id: 2,
    title: "Send proposal to Tech Solutions",
    description: "Prepare and send detailed project proposal",
    assignee: "Jane Smith",
    assigneeAvatar: "/avatars/jane-smith.jpg",
    assigneeInitials: "JS",
    priority: "High",
    status: "To Do",
    dueDate: "2024-01-18",
    company: "Tech Solutions",
    type: "Email"
  },
  {
    id: 3,
    title: "Product demo for Global Inc",
    description: "Conduct product demonstration for the leadership team",
    assignee: "Mike Johnson",
    assigneeAvatar: "/avatars/mike-johnson.jpg",
    assigneeInitials: "MJ",
    priority: "Medium",
    status: "Scheduled",
    dueDate: "2024-01-22",
    company: "Global Inc",
    type: "Meeting"
  },
  {
    id: 4,
    title: "Contract review",
    description: "Review and finalize contract terms with legal team",
    assignee: "Sarah Wilson",
    assigneeAvatar: "/avatars/sarah-wilson.jpg",
    assigneeInitials: "SW",
    priority: "Medium",
    status: "In Progress",
    dueDate: "2024-01-25",
    company: "New Ventures",
    type: "Review"
  },
  {
    id: 5,
    title: "Onboard new client",
    description: "Complete onboarding process for Innovate Co",
    assignee: "David Brown",
    assigneeAvatar: "/avatars/david-brown.jpg",
    assigneeInitials: "DB",
    priority: "Low",
    status: "Completed",
    dueDate: "2024-01-15",
    company: "Innovate Co",
    type: "Onboarding"
  },
  {
    id: 6,
    title: "Market research analysis",
    description: "Analyze market trends for Q1 strategy",
    assignee: "Emily Davis",
    assigneeAvatar: "/avatars/emily-davis.jpg",
    assigneeInitials: "ED",
    priority: "Low",
    status: "To Do",
    dueDate: "2024-01-30",
    company: "Internal",
    type: "Research"
  }
]

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "High": return "text-red-600"
    case "Medium": return "text-yellow-600"
    case "Low": return "text-green-600"
    default: return "text-gray-600"
  }
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case "Completed": return <CheckCircle className="h-4 w-4 text-green-600" />
    case "In Progress": return <Clock className="h-4 w-4 text-blue-600" />
    case "Scheduled": return <Calendar className="h-4 w-4 text-purple-600" />
    case "To Do": return <Circle className="h-4 w-4 text-gray-600" />
    default: return <AlertCircle className="h-4 w-4 text-orange-600" />
  }
}

export default function TasksPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Tasks</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            Filter Tasks
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Task
          </Button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search tasks..." className="pl-8" />
        </div>
      </div>

      {/* Tasks Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Tasks</CardTitle>
          <CardDescription>
            Manage your tasks and track progress.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Task</TableHead>
                <TableHead>Assignee</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tasks.map((task) => (
                <TableRow key={task.id}>
                  <TableCell className="font-medium">
                    <div>
                      <div className="font-medium">{task.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {task.description}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Type: {task.type}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={task.assigneeAvatar} alt={task.assignee} />
                        <AvatarFallback>{task.assigneeInitials}</AvatarFallback>
                      </Avatar>
                      <div className="font-medium">{task.assignee}</div>
                    </div>
                  </TableCell>
                  <TableCell>{task.company}</TableCell>
                  <TableCell>
                    <div className={`flex items-center ${getPriorityColor(task.priority)}`}>
                      <Flag className="mr-1 h-3 w-3" />
                      {task.priority}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                      {task.dueDate}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(task.status)}
                      <Badge 
                        variant={
                          task.status === "Completed" ? "default" : 
                          task.status === "In Progress" ? "secondary" : 
                          "outline"
                        }
                      >
                        {task.status}
                      </Badge>
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
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit task
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Mark complete
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Users className="mr-2 h-4 w-4" />
                          Reassign
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete task
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
            <CardTitle className="text-sm font-medium">Total Tasks</CardTitle>
            <Circle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{tasks.length}</div>
            <p className="text-xs text-muted-foreground">
              Active tasks
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {tasks.filter(t => t.status === "Completed").length}
            </div>
            <p className="text-xs text-muted-foreground">
              {Math.round((tasks.filter(t => t.status === "Completed").length / tasks.length) * 100)}% completion rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
            <Clock className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {tasks.filter(t => t.status === "In Progress").length}
            </div>
            <p className="text-xs text-muted-foreground">
              Currently active
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">High Priority</CardTitle>
            <Flag className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {tasks.filter(t => t.priority === "High").length}
            </div>
            <p className="text-xs text-muted-foreground">
              Urgent tasks
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 