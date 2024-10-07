// app/page.js
"use client";
import React, { useState } from "react";
import angel from "./assets/images/me.png";
import { Modak } from "next/font/google";
import SidebarComponent from "../components/Sidebar";
import { cn } from "@/lib/utils";
import {
  Modal,
  ModalBody,
  ModalClose,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import Image from "next/image";
import { motion } from "framer-motion";
import { FocusCards } from "@/components/ui/focus-cards";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Link from "next/link";

const modak = Modak({
  weight: "400",
  subsets: ["latin"],
});

export default function Page() {
  const [open, setOpen] = useState(false);
  const images = [
    "https://images.unsplash.com/photo-1514820402329-de527fdd2e6d?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1508674861872-a51e06c50c9b?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1649451844897-8699a1d6d96d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const cards = [
    {
      title: "Sección 1",
      href: "/section1",
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Sección 2",
      href: "/section2",
      src: "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Sección 3",
      href: "/section3",
      src: "https://images.unsplash.com/photo-1536148935331-408321065b18?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <BackgroundBeamsWithCollision>
      <div
        className={cn(
          "rounded-md flex flex-col md:flex-row flex-1 w-screen mx-auto bg-gray-100 border border-neutral-200 overflow-hidden h-screen"
        )}
      >
        <SidebarComponent open={open} setOpen={setOpen} />
        <div className="flex flex-1">
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
            <p className="max-w-3xl mx-auto text-center">
              La seguridad de la información se refiere a la práctica de
              proteger la información y los sistemas de información frente a
              accesos no autorizados, alteraciones, robos, destrucción o
              interrupciones. Su objetivo principal es garantizar la
              confidencialidad, integridad y disponibilidad de la información
            </p>
            <div className="flex items-center justify-center py-10">
              <Modal>
                <ModalTrigger className="flex justify-center text-white bg-black dark:bg-white dark:text-black group/modal-btn">
                  <span className="text-center transition duration-500 group-hover/modal-btn:translate-x-40">
                    Conoce más
                  </span>
                  <div className="absolute inset-0 z-20 flex items-center justify-center text-white transition duration-500 -translate-x-40 group-hover/modal-btn:translate-x-0">
                    🧠
                  </div>
                </ModalTrigger>
                <ModalBody>
                  <ModalContent>
                    <h4 className="mb-8 text-lg font-bold text-center md:text-2xl text-neutral-600 dark:text-neutral-100">
                      Conoce más de{" "}
                      <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                        Ciberseguridad
                      </span>{" "}
                      ahora! 🧠
                    </h4>

                    <div className="flex items-center justify-center">
                      {images.map((image, idx) => (
                        <motion.div
                          key={"images" + idx}
                          style={{
                            rotate: Math.random() * 20 - 10,
                          }}
                          whileHover={{
                            scale: 1.1,
                            rotate: 0,
                            zIndex: 100,
                          }}
                          whileTap={{
                            scale: 1.1,
                            rotate: 0,
                            zIndex: 100,
                          }}
                          className="flex-shrink-0 p-1 mt-4 -mr-4 overflow-hidden bg-white border rounded-xl dark:bg-neutral-800 dark:border-neutral-700 border-neutral-100"
                        >
                          <Image
                            src={image}
                            alt="bali images"
                            width="500"
                            height="500"
                            className="flex-shrink-0 object-cover w-20 h-20 rounded-lg md:h-40 md:w-40"
                          />
                        </motion.div>
                      ))}
                    </div>
                    <div className="max-w-2xl py-10 mx-auto">
                      <p>
                        La ciberseguridad es un conjunto de prácticas y
                        tecnologías que protegen los sistemas, dispositivos,
                        aplicaciones, redes y datos de amenazas cibernéticas. Su
                        objetivo es mantener la confidencialidad, integridad y
                        disponibilidad de la información digital.{" "}
                      </p>
                    </div>
                  </ModalContent>
                  <ModalFooter className="gap-4">
                    <ModalClose className="transition hover:scale-105 hover:bg-neutral-300">Cancelar</ModalClose>
                    <Link
                      href="https://support.microsoft.com/es-es/topic/-qu%C3%A9-es-la-ciberseguridad-8b6efd59-41ff-4743-87c8-0850a352a390#:~:text=La%20ciberseguridad%20es%20un%20deporte,el%20resto%20de%20los%20usuarios."
                      className="px-4 py-1 text-sm text-center text-white transition bg-black border border-black rounded-md hover:scale-105 hover:bg-neutral-900"
                    >
                      Leer más
                    </Link>
                  </ModalFooter>
                </ModalBody>
              </Modal>
            </div>
            <div className="grid grid-cols-3 mt-20">
              <div className="col-span-2">
                <FocusCards cards={cards} />
              </div>
              <div className="col-span-1 ">
                <div className="flex flex-wrap items-center gap-5">
                  <div className="flex items-center justify-center bg-purple-500 rounded-full size-24">
                    <Image
                      src={angel}
                      width={70}
                      height={70}
                      alt="angel-image"
                      className="transition hover:-rotate-6 hover:scale-105"
                    />
                  </div>

                  <h2 className="text-xl font-bold ">
                    Confidentiality, Integrity, Availability
                  </h2>
                  <p className="text-md">
                    • Confidencialidad: Asegura que la información solo sea
                    accesible por personas autorizadas.
                    <br />
                    <br />
                    •Integridad: Garantiza que la información no sea alterada o
                    modificada de manera no autorizada. <br />
                    <br />
                    •Disponibilidad: Asegura que los sistemas de información y
                    los datos estén disponibles cuando se necesiten.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
