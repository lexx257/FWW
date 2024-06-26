export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "FMZ-DO",
  description: "Site",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Admin Panel",
      href: "/admin",
    },
    {
      label: "Übungsdienste",
      href: "/exercises",
    },
    {
      label: "Geburstagskalender",
      href: "/birthdaycalendar",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
};
