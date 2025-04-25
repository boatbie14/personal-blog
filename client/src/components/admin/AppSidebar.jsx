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
  SidebarFooter,
} from "../ui/sidebar";

import { PanelsTopLeft, NotebookText, FolderClosed, User, Bell, KeyRound, Earth, LogOut } from "lucide-react";

//Menu Data

const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Menu",
      url: "#",
      items: [
        {
          title: "Dashboard",
          url: "/admin/dashboard",
          icon: PanelsTopLeft,
        },
        {
          title: "Article management",
          url: "/admin/article",
          icon: NotebookText,
        },
        {
          title: "Category management",
          url: "/admin/category",
          icon: FolderClosed,
        },
        {
          title: "Profile",
          url: "/admin/profile",
          icon: User,
        },
        {
          title: "Notifications",
          url: "/admin/notification",
          icon: Bell,
        },
        {
          title: "Reset password",
          url: "/admin/reset-password",
          icon: KeyRound,
        },
      ],
    },
  ],
  navFooter: [
    {
      items: [
        {
          title: "Go to Site",
          url: "https://the-dov-dev-blog.vercel.app/",
          icon: Earth,
        },
        {
          title: "Log out",
          url: "#",
          icon: LogOut,
        },
      ],
    },
  ],
};

function AppSidebar(props) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>The Dog Dev</SidebarHeader>
      <SidebarContent>
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url}>
                        <item.icon />
                        {item.title}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
      {/* Footer */}
      <SidebarFooter>
        <SidebarMenu>
          {data.navFooter.map((itemFooter, index) => (
            <SidebarMenu key={index}>
              {itemFooter.items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={item.isActive}>
                    <a href={item.url}>
                      <item.icon />
                      {item.title}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          ))}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
