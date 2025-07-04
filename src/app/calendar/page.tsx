import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  Plus, 
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  Users,
  Video,
  Phone,
  Coffee,
  Briefcase
} from "lucide-react"

// Mock data for calendar events
const events = [
  {
    id: 1,
    title: "Product Demo - Acme Corp",
    description: "Demonstrate new features to the executive team",
    time: "09:00 AM",
    duration: "1 hour",
    date: "Today",
    type: "Meeting",
    attendees: ["John Doe", "Jane Smith", "CEO of Acme"],
    location: "Conference Room A",
    company: "Acme Corp",
    status: "Confirmed"
  },
  {
    id: 2,
    title: "Sales Call - Tech Solutions",
    description: "Follow-up call to discuss pricing and implementation",
    time: "11:30 AM",
    duration: "30 minutes",
    date: "Today",
    type: "Call",
    attendees: ["Mike Johnson", "CTO Tech Solutions"],
    location: "Phone Call",
    company: "Tech Solutions",
    status: "Confirmed"
  },
  {
    id: 3,
    title: "Contract Review Meeting",
    description: "Review final contract terms with legal team",
    time: "02:00 PM",
    duration: "45 minutes",
    date: "Today",
    type: "Meeting",
    attendees: ["Sarah Wilson", "Legal Team", "Global Inc Rep"],
    location: "Conference Room B",
    company: "Global Inc",
    status: "Confirmed"
  },
  {
    id: 4,
    title: "Team Standup",
    description: "Weekly team sync and progress update",
    time: "04:00 PM",
    duration: "30 minutes",
    date: "Today",
    type: "Internal",
    attendees: ["All Team Members"],
    location: "Main Conference Room",
    company: "Internal",
    status: "Recurring"
  },
  {
    id: 5,
    title: "Client Onboarding - New Ventures",
    description: "Initial onboarding session for new client",
    time: "10:00 AM",
    duration: "2 hours",
    date: "Tomorrow",
    type: "Meeting",
    attendees: ["David Brown", "Emily Davis", "New Ventures Team"],
    location: "Client Office",
    company: "New Ventures",
    status: "Confirmed"
  },
  {
    id: 6,
    title: "Coffee Chat - StartupX Founder",
    description: "Informal discussion about potential partnership",
    time: "03:00 PM",
    duration: "1 hour",
    date: "Tomorrow",
    type: "Coffee",
    attendees: ["John Doe", "StartupX Founder"],
    location: "Local Coffee Shop",
    company: "StartupX",
    status: "Tentative"
  }
]

const getEventIcon = (type: string) => {
  switch (type) {
    case "Meeting": return <Users className="h-4 w-4 text-blue-600" />
    case "Call": return <Phone className="h-4 w-4 text-green-600" />
    case "Coffee": return <Coffee className="h-4 w-4 text-orange-600" />
    case "Internal": return <Briefcase className="h-4 w-4 text-purple-600" />
    default: return <CalendarIcon className="h-4 w-4 text-gray-600" />
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "Confirmed": return "default"
    case "Tentative": return "secondary"
    case "Recurring": return "outline"
    default: return "outline"
  }
}

export default function CalendarPage() {
  const todayEvents = events.filter(event => event.date === "Today")
  const tomorrowEvents = events.filter(event => event.date === "Tomorrow")

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Calendar</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            View Calendar
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Schedule Meeting
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Today's Events */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CalendarIcon className="mr-2 h-5 w-5" />
              Today's Schedule
            </CardTitle>
            <CardDescription>
              {todayEvents.length} events scheduled for today
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {todayEvents.map((event) => (
              <div key={event.id} className="flex items-start space-x-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex-shrink-0">
                  {getEventIcon(event.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium truncate">{event.title}</h4>
                    <Badge variant={getStatusColor(event.status) as any}>
                      {event.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {event.description}
                  </p>
                  <div className="flex items-center space-x-4 mt-2 text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="mr-1 h-3 w-3" />
                      {event.time} ({event.duration})
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-1 h-3 w-3" />
                      {event.location}
                    </div>
                  </div>
                  <div className="flex items-center mt-2">
                    <Users className="mr-1 h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">
                      {event.attendees.join(", ")}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Tomorrow's Events */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CalendarIcon className="mr-2 h-5 w-5" />
              Tomorrow's Schedule
            </CardTitle>
            <CardDescription>
              {tomorrowEvents.length} events scheduled for tomorrow
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {tomorrowEvents.map((event) => (
              <div key={event.id} className="flex items-start space-x-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex-shrink-0">
                  {getEventIcon(event.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium truncate">{event.title}</h4>
                    <Badge variant={getStatusColor(event.status) as any}>
                      {event.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {event.description}
                  </p>
                  <div className="flex items-center space-x-4 mt-2 text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="mr-1 h-3 w-3" />
                      {event.time} ({event.duration})
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-1 h-3 w-3" />
                      {event.location}
                    </div>
                  </div>
                  <div className="flex items-center mt-2">
                    <Users className="mr-1 h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">
                      {event.attendees.join(", ")}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Calendar Statistics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Events</CardTitle>
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{todayEvents.length}</div>
            <p className="text-xs text-muted-foreground">
              Scheduled meetings
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tomorrow's Events</CardTitle>
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{tomorrowEvents.length}</div>
            <p className="text-xs text-muted-foreground">
              Upcoming meetings
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Client Meetings</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {events.filter(e => e.type === "Meeting" && e.company !== "Internal").length}
            </div>
            <p className="text-xs text-muted-foreground">
              External meetings
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Hours</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6.25</div>
            <p className="text-xs text-muted-foreground">
              Meeting hours today
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Common calendar actions and shortcuts
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Button variant="outline" className="justify-start">
              <Video className="mr-2 h-4 w-4" />
              Start Video Call
            </Button>
            <Button variant="outline" className="justify-start">
              <Phone className="mr-2 h-4 w-4" />
              Make Phone Call
            </Button>
            <Button variant="outline" className="justify-start">
              <CalendarIcon className="mr-2 h-4 w-4" />
              View Full Calendar
            </Button>
            <Button variant="outline" className="justify-start">
              <Plus className="mr-2 h-4 w-4" />
              Schedule Meeting
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 