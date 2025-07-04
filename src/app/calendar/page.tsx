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
import { Calendar, Clock, Plus, Video, Phone, Coffee } from "lucide-react"



export default function CalendarPage() {
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
                <BreadcrumbPage>Calendar</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Today's Events</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">
                  3 meetings, 2 calls, 3 tasks
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">This Week</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">
                  +4 from last week
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Upcoming</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">
                  Next 7 days
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completed</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22,4 12,14.01 9,11.01" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">156</div>
                <p className="text-xs text-muted-foreground">
                  This month
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:gap-8 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Today's Schedule</CardTitle>
                    <CardDescription>
                      Your events for today, February 14, 2024
                    </CardDescription>
                  </div>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Event
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 rounded-lg border p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                      <Video className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">Team Standup</p>
                        <Badge variant="outline">9:00 AM</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Daily sync with development team
                      </p>
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src="/avatars/01.png" alt="John" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <Avatar className="h-6 w-6">
                          <AvatarImage src="/avatars/02.png" alt="Jane" />
                          <AvatarFallback>JS</AvatarFallback>
                        </Avatar>
                        <span className="text-xs text-muted-foreground">+3 more</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 rounded-lg border p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                      <Phone className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">Client Call - Acme Corp</p>
                        <Badge variant="outline">11:30 AM</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Quarterly business review
                      </p>
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src="/avatars/03.png" alt="Mike" />
                          <AvatarFallback>MJ</AvatarFallback>
                        </Avatar>
                        <span className="text-xs text-muted-foreground">Mike Johnson</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 rounded-lg border p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                      <Coffee className="h-5 w-5 text-purple-600" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">Coffee Chat</p>
                        <Badge variant="outline">3:00 PM</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Catch up with Sarah from Marketing
                      </p>
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src="/avatars/04.png" alt="Sarah" />
                          <AvatarFallback>SW</AvatarFallback>
                        </Avatar>
                        <span className="text-xs text-muted-foreground">Sarah Wilson</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Tomorrow's Schedule</CardTitle>
                <CardDescription>
                  Upcoming events for February 15, 2024
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 rounded-lg border p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100">
                      <Video className="h-5 w-5 text-orange-600" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">Product Demo</p>
                        <Badge variant="outline">10:00 AM</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Demo for StartupXYZ prospects
                      </p>
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src="/avatars/05.png" alt="David" />
                          <AvatarFallback>DB</AvatarFallback>
                        </Avatar>
                        <span className="text-xs text-muted-foreground">David Brown</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 rounded-lg border p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100">
                      <Calendar className="h-5 w-5 text-red-600" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">Board Meeting</p>
                        <Badge variant="outline">2:00 PM</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Monthly board meeting
                      </p>
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src="/avatars/01.png" alt="John" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <Avatar className="h-6 w-6">
                          <AvatarImage src="/avatars/02.png" alt="Jane" />
                          <AvatarFallback>JS</AvatarFallback>
                        </Avatar>
                        <span className="text-xs text-muted-foreground">+5 more</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 rounded-lg border p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                      <Phone className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">Follow-up Call</p>
                        <Badge variant="outline">4:30 PM</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Check in with TechCorp about proposal
                      </p>
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src="/avatars/03.png" alt="Mike" />
                          <AvatarFallback>MJ</AvatarFallback>
                        </Avatar>
                        <span className="text-xs text-muted-foreground">Mike Johnson</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
      </div>
    </>
  )
} 