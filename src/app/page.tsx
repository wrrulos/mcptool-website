"use client";

import Image from "next/image";

import { Carousel } from "@/app/components/UI/Carousel";
import { Title, Subtitle, Text } from "@/app/components/UI/Text";
import { RedButton } from "./components/UI/Button";
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
      <main className="flex flex-col justify-around h-screen overflow-hidden">
        <article className="absolute inset-0 z-0">
          <Image
            src="/mc-background.jpg"
            alt="Minecraft Background"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </article>
        <div className="flex pt-28 animate-jump">
          <div className="flex flex-col w-full xl:w-min items-center xl:items-start xl:pl-36 relative z-1">
            <Title className="text-6xl sm:text-7xl xl:text-8xl">MCPTool</Title>
            <Subtitle className="text-3xl sm:text-4xl xl:text-5xl">
              Pentesting Tool
            </Subtitle>
            <Carousel
              images={imagesData}
              className="xl:hidden w-3/4 max-w-[600px] mt-8"
              imagesClassNames="xl:hidden"
            />
            <Text className="text-xl sm:text-2xl text-center xl:text-start max-w-[300px] sm:max-w-lg mt-6 xl:mt-0">
              Ultimate protection for security conscious Minecraft server
              administrators.
            </Text>
            <div className="flex gap-2">
              <RedButton url="/docs" className="sm:text-xl mt-10">
                Get Started
              </RedButton>
              <RedButton url="/docs" className="sm:text-xl mt-10">
                Documentation
              </RedButton>
            </div>
            <Text className="border rounded-xl p-2 border-red-500 my-6">
              $ pip install mcptool
            </Text>
          </div>
          <div className="hidden xl:block w-full">
            <Carousel
              images={imagesData}
              className="hidden xl:block max-w-[680px] mt-2 relative z-1"
              imagesClassNames="hidden xl:block"
            />
          </div>
        </div>
        <Text className="mb-10 xl:mb-0 text-center text-white text-xl relative z-1 animate-jump">
          Version 1.0
        </Text>
      </main>
      <section
        id="about"
        className="h-screen bg-gradient-to-r from-black to-green-800 text-white"
      >
        <div className="max-w-80 items-center">
          <Title className="text-4xl sm:text-5xl text-center pt-16">
            What is MCPTool?
          </Title>
          <Text className="text-center mt-4">
            A powerful open source tool developed in Python, designed to test
            and harden the security of Minecraft servers for free. Although the
            main tool is the one mentioned above, I also have future plans to
            develop new programs and add-ons focused on Minecraft security.
          </Text>
        </div>
      </section>
    </>
  );
}

/* <          <Text className="border-2 border-solid py-2 px-4 mt-6">$ pip install mcptool</Text>
 */
