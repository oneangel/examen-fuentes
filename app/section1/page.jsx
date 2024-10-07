"use client";
import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import SidebarComponent from "@/components/Sidebar";
import { Tabs } from "@/components/ui/tabs";

export default function SectionPage1() {
  const [open, setOpen] = useState(false);

  const tabs = [
    {
      title: "DDoS",
      value: "ddos",
      content: (
        <div className="relative w-full h-full p-10 overflow-hidden text-white rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900">
          <h3 className="pb-5 text-xl font-bold md:text-4xl">
            DDoS (Distributed Denial of Service)
          </h3>
          <p className="text-xl ">
            El ataque de denegación de servicio distribuido (DDoS) busca
            sobrecargar los servidores o redes objetivo con una gran cantidad de
            tráfico malicioso, lo que impide que los usuarios legítimos accedan
            a los recursos. Se ejecuta a través de una red de ordenadores
            infectados (botnets) que generan tráfico masivo.
          </p>
        </div>
      ),
    },
    {
      title: "Zombie",
      value: "zombie",
      content: (
        <div className="relative w-full h-full p-10 overflow-hidden text-white rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900">
          <h3 className="pb-5 text-xl font-bold md:text-4xl">
            Ordenador Zombie
          </h3>
          <p className="text-xl ">
            Un ordenador infectado con malware, controlado remotamente por un
            atacante sin el conocimiento del usuario. Estos dispositivos forman
            parte de botnets, usados comúnmente para ataques DDoS, spam, o
            distribución de virus.
          </p>
        </div>
      ),
    },
    {
      title: "Ciberdelincuente",
      value: "Ciberdelincuente",
      content: (
        <div className="relative w-full h-full p-10 overflow-hidden text-white rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900">
          <h3 className="pb-5 text-xl font-bold md:text-4xl">
            Ciberdelincuente
          </h3>
          <p className="text-xl ">
            Persona o grupo que realiza actividades delictivas utilizando
            herramientas tecnológicas y redes informáticas. Sus crímenes van
            desde el robo de información confidencial hasta la implementación de
            malware como ransomware o ataques DDoS.
          </p>
        </div>
      ),
    },
    {
      title: "Botmaster",
      value: "Botmaster",
      content: (
        <div className="relative w-full h-full p-10 overflow-hidden text-white rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900">
          <h3 className="pb-5 text-xl font-bold md:text-4xl">Botmaster</h3>
          <p className="text-xl ">
            El controlador de una botnet. Esta persona utiliza los ordenadores
            infectados (zombies) de manera remota para lanzar ataques
            cibernéticos, como DDoS o campañas de spam, sin que los propietarios
            de los dispositivos lo sepan.
          </p>
        </div>
      ),
    },
    {
      title: "Botnet",
      value: "Botnet",
      content: (
        <div className="relative w-full h-full p-10 overflow-hidden text-white rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900">
          <h3 className="pb-5 text-xl font-bold md:text-4xl">Botnet</h3>
          <p className="text-xl ">
            Una red de ordenadores infectados con malware, controlados por un
            botmaster. Las botnets son usadas para realizar ataques DDoS, enviar
            spam, o propagar malware a gran escala.
          </p>
        </div>
      ),
    },
    {
      title: "Ransomware",
      value: "Ransomware",
      content: (
        <div className="relative w-full h-full p-10 overflow-hidden text-white rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900">
          <h3 className="pb-5 text-xl font-bold md:text-4xl">Ransomware</h3>
          <p className="text-xl ">
            Un tipo de malware que bloquea o cifra los archivos de una víctima,
            exigiendo un rescate a cambio de restaurar el acceso. Ejemplos
            notables incluyen WannaCry y Petya, que han causado daños globales
            significativos.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row flex-1 w-screen mx-auto border bg-gray-100 border-neutral-200 overflow-hidden h-screen"
      )}
    >
      <SidebarComponent open={open} setOpen={setOpen} />
      <div className="flex flex-1 overflow-y-auto">
        <div className="flex flex-col flex-1 w-full h-full gap-2 p-2 bg-white border md:p-10 rounded-tl-2xl border-neutral-200">
        <h2 className="relative z-20 font-sans text-2xl font-bold tracking-tight text-center text-black md:text-4xl lg:text-7xl dark:text-white">
              ¿Qué es seguridad de la{" "}
              <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                  <span className="">Información?</span>
                </div>
                <div className="relative py-4 text-transparent bg-no-repeat bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
                  <span className="">Información?</span>
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
