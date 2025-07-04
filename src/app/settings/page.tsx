import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SettingsPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Settings
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>General</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="mx-auto grid w-full max-w-6xl gap-2">
            <h1 className="text-3xl font-semibold">Settings</h1>
          </div>
          <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
            <nav className="grid gap-4 text-sm text-muted-foreground">
              <a href="#" className="font-semibold text-primary">
                General
              </a>
              <a href="#">Account</a>
              <a href="#">Security</a>
              <a href="#">Notifications</a>
              <a href="#">Integrations</a>
              <a href="#">API Keys</a>
            </nav>
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Company Information</CardTitle>
                  <CardDescription>
                    Update your company details and preferences.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-3">
                    <Label htmlFor="company-name">Company Name</Label>
                    <Input
                      id="company-name"
                      placeholder="Enter company name"
                      defaultValue="Acme Corp"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="company-email">Company Email</Label>
                    <Input
                      id="company-email"
                      placeholder="company@example.com"
                      defaultValue="hello@acmecorp.com"
                      type="email"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="company-phone">Phone Number</Label>
                    <Input
                      id="company-phone"
                      placeholder="+1 (555) 000-0000"
                      defaultValue="+1 (555) 123-4567"
                      type="tel"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="company-address">Address</Label>
                    <Textarea
                      id="company-address"
                      placeholder="Enter company address"
                      defaultValue="123 Business St, San Francisco, CA 94105"
                      className="min-h-[80px]"
                    />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Preferences</CardTitle>
                  <CardDescription>
                    Configure your application preferences.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-notifications">Email Notifications</Label>
                      <div className="text-sm text-muted-foreground">
                        Receive email notifications for important updates
                      </div>
                    </div>
                    <Switch id="email-notifications" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="marketing-emails">Marketing Emails</Label>
                      <div className="text-sm text-muted-foreground">
                        Receive emails about new features and updates
                      </div>
                    </div>
                    <Switch id="marketing-emails" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="security-alerts">Security Alerts</Label>
                      <div className="text-sm text-muted-foreground">
                        Get notified about security-related activities
                      </div>
                    </div>
                    <Switch id="security-alerts" defaultChecked />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Input
                      id="timezone"
                      placeholder="Select timezone"
                      defaultValue="America/Los_Angeles"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="date-format">Date Format</Label>
                    <Input
                      id="date-format"
                      placeholder="Select date format"
                      defaultValue="MM/DD/YYYY"
                    />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Billing Information</CardTitle>
                  <CardDescription>
                    Manage your billing details and subscription.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-3">
                    <Label htmlFor="billing-email">Billing Email</Label>
                    <Input
                      id="billing-email"
                      placeholder="billing@example.com"
                      defaultValue="billing@acmecorp.com"
                      type="email"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="tax-id">Tax ID</Label>
                    <Input
                      id="tax-id"
                      placeholder="Enter tax ID"
                      defaultValue="12-3456789"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="billing-address">Billing Address</Label>
                    <Textarea
                      id="billing-address"
                      placeholder="Enter billing address"
                      defaultValue="123 Business St, San Francisco, CA 94105"
                      className="min-h-[80px]"
                    />
                  </div>
                </CardContent>
              </Card>
              <div className="flex gap-2">
                <Button>Save Changes</Button>
                <Button variant="outline">Cancel</Button>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
