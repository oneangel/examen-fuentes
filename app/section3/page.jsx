"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import SidebarComponent from "@/components/Sidebar";
import { Tabs } from "@/components/ui/tabs";

export default function SectionPage3() {
  const [open, setOpen] = useState(false);

  const tabs = [
    {
      title: "Accesibilidad",
      value: "accesibilidad",
      content: (
        <div className="relative w-full h-full p-10 overflow-hidden text-white rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900">
          <h3 className="mb-4 text-xl font-bold md:text-4xl">Accesibilidad</h3>
          <p className="text-2xl font-light">
            Este principio se refiere a la capacidad de los usuarios autorizados
            para acceder a los datos y recursos de información cuando los
            necesiten. Se busca evitar interrupciones o dificultades en el acceso
            legítimo, asegurando que la información esté disponible para quienes
            tienen permiso.
          </p>
        </div>
      ),
    },
    {
      title: "Confidencialidad",
      value: "confidencialidad",
      content: (
        <div className="relative w-full h-full p-10 overflow-hidden text-white rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900">
          <h3 className="mb-4 text-xl font-bold md:text-4xl">Confidencialidad</h3>
          <p className="text-2xl font-light">
            La confidencialidad implica proteger la información contra el acceso
            no autorizado. Este principio asegura que los datos sensibles solo
            sean accesibles para personas o sistemas con la debida autorización,
            manteniendo la privacidad de la información.
          </p>
        </div>
      ),
    },
    {
      title: "Disponibilidad",
      value: "disponibilidad",
      content: (
        <div className="relative w-full h-full p-10 overflow-hidden text-white rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900">
          <h3 className="mb-4 text-xl font-bold md:text-4xl">Disponibilidad</h3>
          <p className="text-2xl font-light">
            La disponibilidad garantiza que los sistemas de información y los
            datos estén accesibles y utilizables por los usuarios autorizados
            cuando sea necesario. Incluye medidas para prevenir y recuperarse de
            fallos o ataques.
          </p>
        </div>
      ),
    },
    {
      title: "Autenticación",
      value: "autenticacion",
      content: (
        <div className="relative w-full h-full p-10 overflow-hidden text-white rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900">
          <h3 className="mb-4 text-xl font-bold md:text-4xl">Autenticación</h3>
          <p className="text-2xl font-light">
            La autenticación verifica la identidad de un usuario o sistema antes
            de permitir el acceso a los recursos de información. Esto asegura que
            las personas o sistemas que intentan acceder sean quienes dicen ser.
          </p>
        </div>
      ),
    },
    {
      title: "Integridad",
      value: "integridad",
      content: (
        <div className="relative w-full h-full p-10 overflow-hidden text-white rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900">
          <h3 className="mb-4 text-xl font-bold md:text-4xl">Integridad</h3>
          <p className="text-2xl font-light">
            La integridad asegura que la información no sea alterada de manera no
            autorizada. Garantiza que los datos permanezcan completos y exactos,
            detectando cualquier cambio no autorizado.
          </p>
        </div>
      ),
    },
    {
      title: "Control de Acceso",
      value: "control_de_acceso",
      content: (
        <div className="relative w-full h-full p-10 overflow-hidden text-white rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900">
          <h3 className="mb-4 text-xl font-bold md:text-4xl">Control de Acceso</h3>
          <p className="text-2xl font-light">
            El control de acceso implementa mecanismos que regulan quién puede
            acceder a los recursos de información y bajo qué condiciones. Solo los
            usuarios con privilegios adecuados pueden realizar acciones sobre los
            datos o sistemas.
          </p>
        </div>
      ),
    },
  ];
  
  
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
            Sección 3: Principios de seguridad de la{" "}
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span className="">información </span>
              </div>
              <div className="relative py-4 text-transparent bg-no-repeat bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
                <span className="">información </span>
              </div>
            </div>
          </h2>

          <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
            <Tabs tabs={tabs} />
          </div>
        </div>
      </div>
    </div>
  );
}
