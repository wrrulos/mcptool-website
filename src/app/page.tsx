"use client";

import Image from "next/image";

import { Carousel } from "@/app/components/UI/Carousel";
import { Title, Subtitle, Text } from "@/app/components/UI/Text";
import { Button, RedButton } from "./components/UI/Button";
import { FaLanguage, FaTerminal, FaCode, FaRobot } from 'react-icons/fa';
import { useEffect, useState } from "react";

const features = [
  { icon: FaLanguage, title: 'Multi language', description: 'More information about Feature 1.' },
  { icon: FaCode, title: 'Open Source', description: 'More information about Feature 2.' },
  { icon: FaRobot, title: 'Bots', description: 'More information about Feature 3.' },
  { icon: FaTerminal, title: 'Commands', description: 'More information about Feature 4.' },
];

interface ImageData {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function Home() {
  const [alertVisible, setAlertVisible] = useState(false);

  useEffect(() => {
    setAlertVisible(true);
  }, []);

  const hideAlert = () => {
    setAlertVisible(false);
  };


  const Alert = ({ message, onClose }: { message: string, onClose: () => void }) => {
    return (
      <a onClick={onClose} style={{ border: '1px solid red', padding: '10px', position: 'fixed', top: '20%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', zIndex: 1000 }}>
        {message}
      </a>
    );
  };
  return (
    <>

      {alertVisible && <Alert message="The website is under development, currently there is only the download option." onClose={hideAlert} />}
      <main className="flex flex-col justify-center items-center text-center gap-6 min-h-screen bg-black">
        <Subtitle className="text-gray-300 mb-4 w-4/5">MCPTool v1.0.0 has been released! Check it out!</Subtitle>
        <Title className="text-gray-300 w-4/5 text-4xl lg:text-6xl">Pentesting Tool For Minecraft</Title>
        <Text className="w-4/5 lg:text-2xl">The ideal program for developers interested in Minecraft-oriented cybersecurity</Text>
        <section className="flex flex-row items-center gap-6 mt-6">
          <RedButton url="https://github.com/wrrulos/MCPTool/releases/latest/download/MCPTool-win64.msi">Download</RedButton>
          <Button url="https://github.com/wrrulos/MCPTool/">Github</Button>
        </section>
      </main>
      <section id="about" className="flex flex-col min-h-screen gap-5 text-center bg-gray-100 ">
        <Title className="text-5xl mt-10">What is MCPTool?</Title>
        <Text className="">MCPTool is a tool for developers interested in Minecraft-oriented cybersecurity</Text>
        <section id="features" className="flex flex-col items-center text-center gap-4 pt-2">
          <Subtitle className="text-4xl text-center mb-4">Features</Subtitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 cursor-pointer hover:shadow-xl transition-shadow"
              >
                <feature.icon className="text-5xl mb-4 mx-auto" />
                <h3 className="text-2xl font-bold">{feature.title}</h3>
              </div>
            ))}
          </div>
          <RedButton url="/features" className="mt-6">More Features</RedButton>
        </section>
      </section>
      <section id="docs" className="hidden flex-col items-center text-center min-h-screen">
        <h2 className="text-3xl text-center">How to..</h2>

        <RedButton url="/video" className="mt-6">Youtube Video</RedButton>
      </section>
    </>
  );
}

/*
       <Carousel
          images={imagesData}
          className="xl:hidden w-3/4 max-w-[600px] mt-8"
          imagesClassNames="xl:hidden"
        />
        */