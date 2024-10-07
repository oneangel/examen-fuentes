"use client";
import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import SidebarComponent from "@/components/Sidebar";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { dummyContent } from "./dummyContent";

export default function SectionPage2() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row flex-1 w-screen mx-auto border bg-gray-100 border-neutral-200 h-screen"
      )}
    >
      <SidebarComponent open={open} setOpen={setOpen} />
      <div className="flex flex-col flex-1">
        <div className="flex flex-col flex-1 w-full h-full gap-2 p-2 overflow-y-auto bg-white border md:p-10 rounded-tl-2xl border-neutral-200">
          <h2 className="relative z-20 font-sans text-2xl font-bold tracking-tight text-center text-black md:text-4xl lg:text-7xl dark:text-white">
          Sección 2: Confidencialidad de la{" "}
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span className="">información </span>
              </div>
              <div className="relative py-4 text-transparent bg-no-repeat bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
                <span className="">información </span>
              </div>
            </div>
          </h2>

          <TracingBeam className="px-6">
            <div className="relative max-w-2xl pt-4 mx-auto antialiased">
              {dummyContent.map((item, index) => (
                <div key={`content-${index}`} className="mb-10">
                  <h2 className="px-4 py-1 mb-4 text-sm text-white bg-black rounded-full w-fit">
                    {item.badge}
                  </h2>

                  <p className={"text-xl mb-4"}>{item.title}</p>

                  <div className="text-sm prose-sm prose dark:prose-invert">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </TracingBeam>
        </div>
      </div>
    </div>
  );
}
