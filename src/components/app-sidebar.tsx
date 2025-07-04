import * as React from "react"

import { SearchForm } from "@/components/search-form"
import { VersionSwitcher } from "@/components/version-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  versions: ["Pro Plan", "Enterprise", "Starter"],
  navMain: [
    {
      title: "Overview",
      url: "#",
      items: [
        {
          title: "Dashboard",
          url: "/dashboard",
          isActive: true,
        },
        {
          title: "Analytics",
          url: "/analytics",
        },
      ],
    },
    {
      title: "Customer Management",
      url: "#",
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
          title: "Deals",
          url: "/deals",
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
      title: "Billing & Finance",
      url: "#",
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
      ],
    },
    {
      title: "Communication",
      url: "#",
      items: [
        {
          title: "Messages",
          url: "/messages",
        },
        {
          title: "Templates",
          url: "/templates",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      items: [
        {
          title: "General",
          url: "/settings",
        },
        {
          title: "Team",
          url: "/team",
        },
        {
          title: "Security",
          url: "/security",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
