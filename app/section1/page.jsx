"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import SidebarComponent from "@/components/Sidebar";

export default function SectionPage1() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row flex-1 w-screen mx-auto border bg-gray-100 border-neutral-200 overflow-hidden h-screen"
      )}
    >
      <SidebarComponent open={open} setOpen={setOpen} />
      <div className="flex flex-1">
        <div className="flex flex-col flex-1 w-full h-full gap-2 p-2 bg-white border md:p-10 rounded-tl-2xl border-neutral-200">
          
        </div>
      </div>
    </div>
  );
}

