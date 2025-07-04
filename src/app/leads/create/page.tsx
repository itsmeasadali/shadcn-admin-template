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
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { 
  Save, 
  X,
  Target,
  Building2,
  Mail,
  Phone,
  MapPin,
  Calendar,
  DollarSign,
  Star,
  TrendingUp,
  User,
  FileText,
  Plus,
  Trash2,
  AlertCircle,
  CheckCircle
} from "lucide-react"

export default function CreateLeadPage() {
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
                <BreadcrumbLink href="/leads">
                  Leads
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Create Lead</BreadcrumbPage>
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
              <h1 className="text-3xl font-bold tracking-tight">Create New Lead</h1>
              <p className="text-muted-foreground">
                Add a new lead to your sales pipeline.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline">
                <X className="h-4 w-4 mr-2" />
                Cancel
              </Button>
              <Button>
                <Save className="h-4 w-4 mr-2" />
                Save Lead
              </Button>
            </div>
          </div>

          {/* Form */}
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <Tabs defaultValue="basic" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="basic">Lead Information</TabsTrigger>
                  <TabsTrigger value="company">Company Details</TabsTrigger>
                  <TabsTrigger value="qualification">Qualification</TabsTrigger>
                  <TabsTrigger value="notes">Notes & Activities</TabsTrigger>
                </TabsList>

                <TabsContent value="basic" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <User className="h-5 w-5 mr-2" />
                        Lead Information
                      </CardTitle>
                      <CardDescription>Basic lead contact details and information</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input id="firstName" placeholder="John" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input id="lastName" placeholder="Doe" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" placeholder="john.doe@example.com" />
                      </div>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="mobile">Mobile Number</Label>
                          <Input id="mobile" type="tel" placeholder="+1 (555) 987-6543" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="jobTitle">Job Title</Label>
                        <Input id="jobTitle" placeholder="Software Engineer" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="leadSource">Lead Source *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select lead source" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="website">Website</SelectItem>
                            <SelectItem value="referral">Referral</SelectItem>
                            <SelectItem value="social">Social Media</SelectItem>
                            <SelectItem value="email">Email Campaign</SelectItem>
                            <SelectItem value="event">Event</SelectItem>
                            <SelectItem value="cold-call">Cold Call</SelectItem>
                            <SelectItem value="advertisement">Advertisement</SelectItem>
                            <SelectItem value="partner">Partner</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="company" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Building2 className="h-5 w-5 mr-2" />
                        Company Information
                      </CardTitle>
                      <CardDescription>Company and organization details</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name *</Label>
                        <Input id="company" placeholder="Acme Corporation" />
                      </div>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="industry">Industry</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select industry" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="technology">Technology</SelectItem>
                              <SelectItem value="healthcare">Healthcare</SelectItem>
                              <SelectItem value="finance">Finance</SelectItem>
                              <SelectItem value="retail">Retail</SelectItem>
                              <SelectItem value="manufacturing">Manufacturing</SelectItem>
                              <SelectItem value="education">Education</SelectItem>
                              <SelectItem value="consulting">Consulting</SelectItem>
                              <SelectItem value="real-estate">Real Estate</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="companySize">Company Size</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select size" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1-10">1-10 employees</SelectItem>
                              <SelectItem value="11-50">11-50 employees</SelectItem>
                              <SelectItem value="51-200">51-200 employees</SelectItem>
                              <SelectItem value="201-500">201-500 employees</SelectItem>
                              <SelectItem value="501-1000">501-1000 employees</SelectItem>
                              <SelectItem value="1000+">1000+ employees</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="website">Company Website</Label>
                        <Input id="website" placeholder="https://acme.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="revenue">Annual Revenue</Label>
                        <Input id="revenue" placeholder="$1,000,000" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input id="location" placeholder="New York, NY" />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="qualification" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Target className="h-5 w-5 mr-2" />
                        Lead Qualification
                      </CardTitle>
                      <CardDescription>Assess lead potential and qualification criteria</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="dealValue">Potential Deal Value</Label>
                        <Input id="dealValue" placeholder="$50,000" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget Range</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-10k">Under $10,000</SelectItem>
                            <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
                            <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                            <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                            <SelectItem value="500k-1m">$500,000 - $1,000,000</SelectItem>
                            <SelectItem value="over-1m">Over $1,000,000</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="timeline">Purchase Timeline</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="immediate">Immediate (0-30 days)</SelectItem>
                            <SelectItem value="short">Short term (1-3 months)</SelectItem>
                            <SelectItem value="medium">Medium term (3-6 months)</SelectItem>
                            <SelectItem value="long">Long term (6+ months)</SelectItem>
                            <SelectItem value="unknown">Unknown</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="authority">Decision Making Authority</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select authority level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="decision-maker">Decision Maker</SelectItem>
                            <SelectItem value="influencer">Influencer</SelectItem>
                            <SelectItem value="user">End User</SelectItem>
                            <SelectItem value="gatekeeper">Gatekeeper</SelectItem>
                            <SelectItem value="unknown">Unknown</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="painPoints">Pain Points</Label>
                        <Textarea 
                          id="painPoints" 
                          placeholder="Describe the main challenges or pain points this lead is facing..."
                          rows={3}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="needs">Specific Needs</Label>
                        <Textarea 
                          id="needs" 
                          placeholder="What specific needs or requirements does this lead have?"
                          rows={3}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="notes" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <FileText className="h-5 w-5 mr-2" />
                        Notes & Activities
                      </CardTitle>
                      <CardDescription>Additional notes and planned activities</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="notes">Lead Notes</Label>
                        <Textarea 
                          id="notes" 
                          placeholder="Add any additional notes about this lead..."
                          rows={4}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="nextAction">Next Action</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select next action" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="call">Schedule Call</SelectItem>
                            <SelectItem value="email">Send Email</SelectItem>
                            <SelectItem value="meeting">Schedule Meeting</SelectItem>
                            <SelectItem value="demo">Schedule Demo</SelectItem>
                            <SelectItem value="proposal">Send Proposal</SelectItem>
                            <SelectItem value="follow-up">Follow Up</SelectItem>
                            <SelectItem value="research">Research</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="followUpDate">Follow-up Date</Label>
                        <Input id="followUpDate" type="date" />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Lead Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="stage">Pipeline Stage</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select stage" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="contacted">Contacted</SelectItem>
                        <SelectItem value="qualified">Qualified</SelectItem>
                        <SelectItem value="proposal">Proposal</SelectItem>
                        <SelectItem value="negotiation">Negotiation</SelectItem>
                        <SelectItem value="closed-won">Closed Won</SelectItem>
                        <SelectItem value="closed-lost">Closed Lost</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="priority">Priority Level</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="temperature">Lead Temperature</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select temperature" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hot">Hot</SelectItem>
                        <SelectItem value="warm">Warm</SelectItem>
                        <SelectItem value="cold">Cold</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Lead Scoring</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label>Lead Score</Label>
                      <Badge variant="outline">85/100</Badge>
                    </div>
                    <Progress value={85} className="h-2" />
                    <p className="text-sm text-muted-foreground">
                      Based on qualification criteria
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label>Scoring Factors</Label>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Company Size</span>
                        <span className="text-green-600">+20</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Budget Range</span>
                        <span className="text-green-600">+25</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Timeline</span>
                        <span className="text-green-600">+15</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Authority</span>
                        <span className="text-green-600">+25</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Assignment</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="owner">Lead Owner</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select owner" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="john">John Doe</SelectItem>
                        <SelectItem value="jane">Jane Smith</SelectItem>
                        <SelectItem value="mike">Mike Johnson</SelectItem>
                        <SelectItem value="sarah">Sarah Wilson</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="team">Sales Team</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select team" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="enterprise">Enterprise Sales</SelectItem>
                        <SelectItem value="smb">SMB Sales</SelectItem>
                        <SelectItem value="inside">Inside Sales</SelectItem>
                        <SelectItem value="field">Field Sales</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Lead Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="doNotCall">Do Not Call</Label>
                      <p className="text-sm text-muted-foreground">
                        Restrict phone calls
                      </p>
                    </div>
                    <Switch id="doNotCall" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="doNotEmail">Do Not Email</Label>
                      <p className="text-sm text-muted-foreground">
                        Restrict email marketing
                      </p>
                    </div>
                    <Switch id="doNotEmail" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="vipLead">VIP Lead</Label>
                      <p className="text-sm text-muted-foreground">
                        High priority lead
                      </p>
                    </div>
                    <Switch id="vipLead" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 