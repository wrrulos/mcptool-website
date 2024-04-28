import Image from "next/image";

export default function Home() {
  return (
    <main className="relative h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          src="/mc-background.jpg"
          alt="Minecraft Background"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="flex flex-col justify-center items-center text-center text-white h-full relative z-10">
        <h1 className="text-6xl font-bold">MCPTool</h1>
        <h2 className="text-3xl text-[#ff003b] mb-4">Pentesting Tool</h2>

        <p className="w-3/4">
          Ultimate protection for security-conscious Minecraft server
          administrators.
        </p>

        <div className="mt-8">
          <a
            href="#"
            className="bg-[#ff003b] text-white px-6 py-3 rounded-xl hover:bg-[#ff003b] hover:opacity-80 transition-opacity"
          >
            Get Started
          </a>
        </div>
      </div>
    </main>
  );
}
