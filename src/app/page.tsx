"use client";

import Image from "next/image";

import { Carousel } from "@/app/components/UI/Carousel";
import { Title, Subtitle, Text } from "@/app/components/UI/Text";
import { Button, RedButton } from "./components/UI/Button";
import { MCPTOOL_SERVER } from "@/app/constants/imageConstants";

interface ImageData {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const imagesData: ImageData[] = [
  {
    src: MCPTOOL_SERVER,
    alt: "Servicios de limpieza",
    width: 500,
    height: 500,
  },
  {
    src: MCPTOOL_SERVER,
    alt: "Servicios de limpieza",
    width: 500,
    height: 500,
  },
  {
    src: MCPTOOL_SERVER,
    alt: "Servicios de limpieza",
    width: 500,
    height: 500,
  },
];

export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-center items-center text-center gap-6 min-h-screen">
        <h2>MCPTool v1.0.0 has been released! Check it out!</h2>
        <h1 className="w-4/5 text-5xl">The Best Pentesting Tool in Minecraft</h1>
        <p className="w-4/5">The ideal program for developers interested in Minecraft-oriented cybersecurity</p>
        <section className="flex flex-row items-center gap-6">
          <RedButton url="/download">Download</RedButton>
          <Button url="/docs">Documentation</Button>
        </section>
        <p>pip install mcptool</p>
      </main>
      <section id="about" className="flex flex-col min-h-screen gap-4">
        <h1 className="text-5xl text-center mt-10">What is MCPTool?</h1>
        <p className="text-center">MCPTool is a tool for developers interested in Minecraft-oriented cybersecurity</p>
        <section id="features" className="flex flex-col items-center text-center gap-10 pt-10">
          <h2 className="text-3xl text-center">Features</h2>
          <ul className="grid grid-cols-2 gap-8">
            <li className="flex flex-col gap-2">
              <h3 className="text-2xl">Open Source</h3>
              <p>Feature 1 description</p>
            </li>
            <li className="flex flex-col gap-2">
              <h3 className="text-2xl">Commands</h3>
              <p>Feature 2 description</p>
            </li>
            <li className="flex flex-col gap-2">
              <h3 className="text-2xl">Multiple languages</h3>
              <p>Feature 3 description</p>
            </li>
            <li className="flex flex-col gap-2">
              <h3 className="text-2xl">Bots</h3>
              <p>Feature 4 description</p>
            </li>
          </ul>
          <RedButton url="/features" className="mt-6">More Features</RedButton>
        </section>
        <section id="gallery" className="flex flex-col items-center text-center min-h-screen">
          <h2 className="text-3xl text-center">Gallery</h2>
          <Carousel
              images={imagesData}
              className="xl:hidden w-3/4 max-w-[600px] mt-8"
              imagesClassNames="xl:hidden"
          />
          <RedButton url="/video" className="mt-6">Youtube Video</RedButton>
        </section>
      </section>
    </>
  );
}

/* <          <Text className="border-2 border-solid py-2 px-4 mt-6">$ pip install mcptool</Text>
 */
