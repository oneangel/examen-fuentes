"use client";
import React from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../components/ui/sidebar";
import { IconFolders, IconHome, IconLock, IconShield } from "@tabler/icons-react";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Importa el hook usePathname
import { cn } from "@/lib/utils";

const SidebarComponent = ({ open, setOpen }) => {
  const pathname = usePathname(); // Obtén la ruta actual

  const links = [
    {
      label: "Inicio",
      href: "/",
      icon: <IconHome className="flex-shrink-0 size-7 text-neutral-700" />,
    },
    {
      label: "Sección 1",
      href: "/section1",
      icon: <IconLock className="flex-shrink-0 size-7 text-neutral-700" />,
    },
    {
      label: "Sección 2",
      href: "/section2",
      icon: <IconFolders className="flex-shrink-0 size-7 text-neutral-700" />,
    },
    {
      label: "Sección 3",
      href: "/section3",
      icon: <IconShield className="flex-shrink-0 size-7 text-neutral-700" />,
    },
  ];

  return (
    <Sidebar
      open={open}
      setOpen={setOpen}
      className="fixed top-0 left-0 z-50 w-64 h-full transition-transform duration-300 transform bg-white shadow-lg"
      style={{ transform: open ? "translateX(0)" : "translateX(-100%)" }}
    >
      <SidebarBody className="justify-between gap-10">
        <div className="flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
          <div className="flex flex-col gap-5 mt-8">
            {links.map((link, idx) => (
              <SidebarLink
                key={idx}
                link={link}
                className={cn(
                  pathname === link.href
                    ? "border-b-4 border-purple-500 transition rounded-md"
                    : ""
                )}
              />
            ))}
          </div>
        </div>
        <div>
          <SidebarLink
            link={{
              label: "Fuentes Reyes Angel Homero",
              href: "/",
              icon: (
                <Image
                  src="https://lh3.googleusercontent.com/a/ACg8ocKzYsuJGzVibKEKkuG5jXjLsY0UihBqRWrPUjFQ8MhAR7xQlE_6=s288-c-no"
                  className="flex-shrink-0 rounded-full size-7"
                  width={70}
                  height={70}
                  alt="Avatar"
                />
              ),
            }}
          />
        </div>
      </SidebarBody>
    </Sidebar>
  );
};

export default SidebarComponent;
