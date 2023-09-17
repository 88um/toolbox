"use client";

import { cn } from "../../lib/utils";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Zap,
  Settings,
  VideoIcon,
  PlusCircleIcon,
  Users2,
  User,
  Inbox,
  Reply,
  Users,
} from "lucide-react";
import { FaToolbox } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ProButton } from "../buttons/probutton";
import { Separator } from "../ui/separator";

interface SidebarProps {
  admin?: boolean;
}

const user_routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/home",
    color: "text-white",
  },
  
  {
    label: "Inbox Bot",
    icon: Inbox,
    href: "/inbox",
    color: "text-white",
  },
  {
    label: "Reply Bot",
    icon: Reply,
    href: "/reply",
    color: "text-white",
  },
  {
    label: "Followers Bot",
    icon: User,
    href: "/reply",
    color: "text-white",
  },
  {
    label: "My Accounts",
    icon: Users2,
    href: "/accounts",
    color: "text-muted-foreground",
  },
  {
    label: "Help",
    icon: MessageSquare,
    href: "#",
    color: "text-muted-foreground",
  },

  {
    label: "Settings",
    icon: Settings,
    href: "#",
    color: "text-muted-foreground",
  },
];

const admin_routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/accounts",
    color: "text-sky-500",
  },
  {
    label: "Add Account",
    icon: PlusCircleIcon,
    href: "/add",
    color: "text-violet-500",
  },
  {
    label: "Add Unbanner",
    icon: User,
    href: "/unbanners/new",
    color: "text-green-500",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
    color: "text-red-400",
  },
];

const Sidebar: React.FC<SidebarProps> = ({ admin = false }) => {
  const router = useRouter();
  const pathname = router.pathname;
  const routes = admin ? admin_routes : user_routes;
  return (
    <div className="h-screen flex bg-gradient-to-b from-[#31b6b1]  to-[#3b92d6] ">
      <div className="space-y-4  py-4 flex flex-col overflow-y-auto  w-[300px]   text-white ">
        <div className="flex flex-col px-3">
          <Link href="/accounts" className="flex items-center pl-3 pb-6">
            <div className="flex items-center space-x-3">
              <FaToolbox className="h-6 w-6" />
              <div className="font-light text-lg mx-auto text-center">
                Toolbox Client <span className="">v1.0</span>{" "}
              </div>
            </div>
          </Link>
          <div className="mt-9 space-y-4 relative">
            {routes.map((route) => (
              <Link key={route.href} href={route.href}>
                <div>
                <div
                  className={cn(
                    "text-sm group flex p-3 w-full justify-start font-semibold hover:cursor-pointer hover:text-white hover:bg-white/10 hover:rounded-2xl rounded-lg transition",
                    pathname === route.href
                      ? "text-white bg-white/10 rounded-2xl py-4"
                      : "text-gray-300"
                  )}
                >
                  <div className="flex items-center flex-1 cursor-pointer">
                    <route.icon className={cn("h-5 w-5 mr-3 text-white")} />
                    <p className="font-light text-sm pl-3">{route.label}</p>
                    {pathname === route.href && (
                      <div className="absolute -left-3 pb-1 font-extrabold text-lg">
                        |
                      </div>
                    )}
                    {}
                  </div>
                </div>
                {route.href === '/accounts' && (
                    <Separator className="my-2 bg-gray-200/20"/>
                  )}
                  </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="pt-6">
          <ProButton apiLimitCount={2} isPro={false} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
