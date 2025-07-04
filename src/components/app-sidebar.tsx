"use client"

import * as React from "react"
import {
  AudioWaveform,
  Building2,
  Calendar,
  CreditCard,
  DollarSign,
  FileText,
  GalleryVerticalEnd,
  Home,
  Mail,
  Package,
  Settings,
  ShoppingCart,
  Users,
  UserCheck,
  BarChart3,
  MessageSquare,
  Receipt,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import { ThemeSwitcher } from "@/components/theme-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// CRM data structure
const data = {
  user: {
    name: "John Doe",
    email: "john@company.com",
    avatar: "/avatars/01.png",
  },
  teams: [
    {
      name: "Acme Corp",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Inc",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp",
      logo: Building2,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Home,
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "/dashboard",
        },
        {
          title: "Analytics",
          url: "/dashboard/analytics",
        },
        {
          title: "Reports",
          url: "/dashboard/reports",
        },
      ],
    },
    {
      title: "Customer Management",
      url: "#",
      icon: Users,
      items: [
        {
          title: "Contacts",
          url: "/contacts",
        },
        {
          title: "Companies",
          url: "/companies",
        },
        {
          title: "Leads",
          url: "/leads",
        },
        {
          title: "Tasks",
          url: "/tasks",
        },
        {
          title: "Calendar",
          url: "/calendar",
        },
      ],
    },
    {
      title: "Sales & Commerce",
      url: "#",
      icon: ShoppingCart,
      items: [
        {
          title: "Products",
          url: "/products",
        },
        {
          title: "Orders",
          url: "/orders",
        },
        {
          title: "Invoices",
          url: "/invoices",
        },
        {
          title: "Payments",
          url: "/payments",
        },
      ],
    },
    {
      title: "Communication",
      url: "#",
      icon: MessageSquare,
      items: [
        {
          title: "Messages",
          url: "/messages",
        },
        {
          title: "Email Campaigns",
          url: "/campaigns",
        },
        {
          title: "Templates",
          url: "/templates",
        },
      ],
    },
    {
      title: "Billing & Finance",
      url: "#",
      icon: CreditCard,
      items: [
        {
          title: "Billing",
          url: "/billing",
        },
        {
          title: "Charges",
          url: "/billing/charges",
        },
        {
          title: "Subscriptions",
          url: "/billing/subscriptions",
        },
        {
          title: "Revenue",
          url: "/billing/revenue",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Q1 Sales Campaign",
      url: "/projects/q1-sales",
      icon: BarChart3,
    },
    {
      name: "Customer Onboarding",
      url: "/projects/onboarding",
      icon: UserCheck,
    },
    {
      name: "Product Launch",
      url: "/projects/product-launch",
      icon: Package,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center justify-between p-2">
          <ThemeSwitcher />
        </div>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
