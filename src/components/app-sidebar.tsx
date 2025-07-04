"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Calendar,
  ChevronRight,
  ChevronsUpDown,
  Command,
  FileText,
  Frame,
  GalleryVerticalEnd,
  LayoutDashboard,
  LogOut,
  Map,
  PieChart,
  Plus,
  Settings2,
  SquareTerminal,
  Users,
  Building2,
  Phone,
  Mail,
  Target,
  TrendingUp,
  FileSpreadsheet,
  UserCheck,
  Briefcase,
  CreditCard,
  DollarSign,
  Receipt,
  ShoppingCart,
  Package,
  Truck,
  MessageSquare,
  HelpCircle,
  Shield,
  Database,
  Zap,
  Bell,
  Globe,
  Palette,
  Lock,
  Key,
  Users2,
  Activity,
  BarChart3,
  LineChart,
  Wallet,
  Banknote,
  CreditCard as CreditCardIcon,
  FileBarChart,
  Inbox,
  Star,
  Archive,
  Trash2,
  Send,
  Filter,
  Search,
  Download,
  Upload,
  Share,
  Copy,
  Edit,
  Eye,
  EyeOff,
  RefreshCw,
  ExternalLink,
  Home,
  Settings,
  User,
  Crown,
  Gem,
  Sparkles,
  Zap as ZapIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// Mock data for workspaces
const workspaces = [
  {
    name: "Acme Corp",
    logo: GalleryVerticalEnd,
    plan: "Enterprise",
  },
  {
    name: "Acme Inc.",
    logo: AudioWaveform,
    plan: "Startup",
  },
  {
    name: "Evil Corp.",
    logo: Command,
    plan: "Free",
  },
]

// Navigation data
const data = {
  user: {
    name: "John Doe",
    email: "john@example.com",
    avatar: "/avatars/john-doe.jpg",
  },
  workspaces: workspaces,
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Contacts",
      url: "/contacts",
      icon: Users,
      items: [
        {
          title: "All Contacts",
          url: "/contacts",
        },
        {
          title: "Add Contact",
          url: "/contacts/new",
        },
        {
          title: "Import Contacts",
          url: "/contacts/import",
        },
        {
          title: "Contact Groups",
          url: "/contacts/groups",
        },
      ],
    },
    {
      title: "Companies",
      url: "/companies",
      icon: Building2,
      items: [
        {
          title: "All Companies",
          url: "/companies",
        },
        {
          title: "Add Company",
          url: "/companies/new",
        },
        {
          title: "Industries",
          url: "/companies/industries",
        },
      ],
    },
    {
      title: "Deals",
      url: "/deals",
      icon: Target,
      items: [
        {
          title: "Pipeline",
          url: "/deals/pipeline",
        },
        {
          title: "All Deals",
          url: "/deals",
        },
        {
          title: "Add Deal",
          url: "/deals/new",
        },
        {
          title: "Deal Stages",
          url: "/deals/stages",
        },
      ],
    },
    {
      title: "Products",
      url: "/products",
      icon: Package,
      items: [
        {
          title: "All Products",
          url: "/products",
        },
        {
          title: "Add Product",
          url: "/products/new",
        },
        {
          title: "Categories",
          url: "/products/categories",
        },
        {
          title: "Inventory",
          url: "/products/inventory",
        },
      ],
    },
    {
      title: "Orders",
      url: "/orders",
      icon: ShoppingCart,
      items: [
        {
          title: "All Orders",
          url: "/orders",
        },
        {
          title: "Pending",
          url: "/orders/pending",
        },
        {
          title: "Completed",
          url: "/orders/completed",
        },
        {
          title: "Cancelled",
          url: "/orders/cancelled",
        },
      ],
    },
    {
      title: "Invoices",
      url: "/invoices",
      icon: Receipt,
      items: [
        {
          title: "All Invoices",
          url: "/invoices",
        },
        {
          title: "Create Invoice",
          url: "/invoices/new",
        },
        {
          title: "Paid",
          url: "/invoices/paid",
        },
        {
          title: "Overdue",
          url: "/invoices/overdue",
        },
        {
          title: "Draft",
          url: "/invoices/draft",
        },
      ],
    },
    {
      title: "Payments",
      url: "/payments",
      icon: CreditCard,
      items: [
        {
          title: "All Payments",
          url: "/payments",
        },
        {
          title: "Payment Methods",
          url: "/payments/methods",
        },
        {
          title: "Refunds",
          url: "/payments/refunds",
        },
        {
          title: "Transactions",
          url: "/payments/transactions",
        },
      ],
    },
    {
      title: "Billing",
      url: "/billing",
      icon: DollarSign,
      items: [
        {
          title: "Subscriptions",
          url: "/billing/subscriptions",
        },
        {
          title: "Plans",
          url: "/billing/plans",
        },
        {
          title: "Usage",
          url: "/billing/usage",
        },
        {
          title: "Charges",
          url: "/billing/charges",
        },
      ],
    },
    {
      title: "Tasks",
      url: "/tasks",
      icon: FileText,
      items: [
        {
          title: "My Tasks",
          url: "/tasks",
        },
        {
          title: "Team Tasks",
          url: "/tasks/team",
        },
        {
          title: "Add Task",
          url: "/tasks/new",
        },
        {
          title: "Templates",
          url: "/tasks/templates",
        },
      ],
    },
    {
      title: "Calendar",
      url: "/calendar",
      icon: Calendar,
      items: [
        {
          title: "My Calendar",
          url: "/calendar",
        },
        {
          title: "Team Calendar",
          url: "/calendar/team",
        },
        {
          title: "Events",
          url: "/calendar/events",
        },
        {
          title: "Meetings",
          url: "/calendar/meetings",
        },
      ],
    },
    {
      title: "Messages",
      url: "/messages",
      icon: MessageSquare,
      items: [
        {
          title: "Inbox",
          url: "/messages/inbox",
        },
        {
          title: "Sent",
          url: "/messages/sent",
        },
        {
          title: "Drafts",
          url: "/messages/drafts",
        },
        {
          title: "Templates",
          url: "/messages/templates",
        },
      ],
    },
    {
      title: "Reports",
      url: "/reports",
      icon: BarChart3,
      items: [
        {
          title: "Sales Report",
          url: "/reports/sales",
        },
        {
          title: "Revenue Report",
          url: "/reports/revenue",
        },
        {
          title: "Activity Report",
          url: "/reports/activity",
        },
        {
          title: "Performance",
          url: "/reports/performance",
        },
        {
          title: "Analytics",
          url: "/reports/analytics",
        },
      ],
    },
    {
      title: "Team",
      url: "/team",
      icon: Users2,
      items: [
        {
          title: "Members",
          url: "/team/members",
        },
        {
          title: "Roles",
          url: "/team/roles",
        },
        {
          title: "Permissions",
          url: "/team/permissions",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/settings",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "/settings/general",
        },
        {
          title: "Account",
          url: "/settings/account",
        },
        {
          title: "Security",
          url: "/settings/security",
        },
        {
          title: "Notifications",
          url: "/settings/notifications",
        },
        {
          title: "Integrations",
          url: "/settings/integrations",
        },
        {
          title: "API Keys",
          url: "/settings/api-keys",
        },
      ],
    },
    {
      title: "Help & Support",
      url: "/support",
      icon: HelpCircle,
      items: [
        {
          title: "Documentation",
          url: "/support/docs",
        },
        {
          title: "Contact Support",
          url: "/support/contact",
        },
        {
          title: "Feature Requests",
          url: "/support/features",
        },
        {
          title: "Status Page",
          url: "/support/status",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [activeWorkspace, setActiveWorkspace] = React.useState(workspaces[0])

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    <activeWorkspace.logo className="size-4" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">
                      {activeWorkspace.name}
                    </span>
                    <span className="truncate text-xs">{activeWorkspace.plan}</span>
                  </div>
                  <ChevronsUpDown className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                align="start"
                side="bottom"
                sideOffset={4}
              >
                <DropdownMenuLabel className="text-xs text-muted-foreground">
                  Workspaces
                </DropdownMenuLabel>
                {workspaces.map((workspace, index) => (
                  <DropdownMenuItem
                    key={workspace.name}
                    onClick={() => setActiveWorkspace(workspace)}
                    className="gap-2 p-2"
                  >
                    <div className="flex size-6 items-center justify-center rounded-sm border">
                      <workspace.logo className="size-4 shrink-0" />
                    </div>
                    {workspace.name}
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem className="gap-2 p-2">
                  <div className="flex size-6 items-center justify-center rounded-md border bg-background">
                    <Plus className="size-4" />
                  </div>
                  <div className="font-medium text-muted-foreground">Add workspace</div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>CRM</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    isActive={item.isActive}
                  >
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                  {item.items?.length ? (
                    <SidebarMenuSub>
                      {item.items.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <a href={subItem.url}>
                              <span>{subItem.title}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  ) : null}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navSecondary.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild size="sm">
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                  {item.items?.length ? (
                    <SidebarMenuSub>
                      {item.items.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <a href={subItem.url}>
                              <span>{subItem.title}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  ) : null}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src={data.user.avatar} alt={data.user.name} />
                    <AvatarFallback className="rounded-lg">JD</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">{data.user.name}</span>
                    <span className="truncate text-xs">{data.user.email}</span>
                  </div>
                  <ChevronsUpDown className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side="bottom"
                align="end"
                sideOffset={4}
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src={data.user.avatar} alt={data.user.name} />
                      <AvatarFallback className="rounded-lg">JD</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">{data.user.name}</span>
                      <span className="truncate text-xs">{data.user.email}</span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Settings2 className="mr-2 h-4 w-4" />
                  Account Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <BookOpen className="mr-2 h-4 w-4" />
                  Help & Support
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
} 