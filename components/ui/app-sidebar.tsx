"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Logo from "../logo";
import { Button } from "./button";
import { ClerkLoading, SignedIn, UserButton } from "@clerk/nextjs";
import Spinner from "./Spinner";
import Image from "next/image";

const menuItems = [
  {
    title: "Learn",
    url: "/learn",
    icon: "/learn.svg",
  },
  {
    title: "Leaderboard",
    url: "/leaderboard",
    icon: "/leaderboard.svg",
  },
  {
    title: "Quests",
    url: "/quests",
    icon: "/quests.svg",
  },
  {
    title: "Shop",
    url: "/shop",
    icon: "/shop.svg",
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="py-3">
        <Logo />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <Button
                    variant={pathname == item.url ? "sidebarOutline" : "ghost"}
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href={item.url}>
                      <Image
                        src={item.icon}
                        width={25}
                        height={25}
                        alt={item.url.slice(1)}
                      />
                      <span>{item.title}</span>
                    </Link>
                  </Button>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <ClerkLoading>
          <Spinner />
        </ClerkLoading>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </SidebarFooter>
    </Sidebar>
  );
}
