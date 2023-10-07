"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (

    
    
    <div className="text-white font-bold py-40 text-center space-y-7">
      <div className="text-5xl sm:text-5xl md:text-6xl lg:text-8xl space-y-5 font-extrabold">
        <h1>Hi I am   <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500" >J</span>arvis I can</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          <TypewriterComponent
            options={{
              strings: [
                "Chat with you",
                "Convert Text to Image",
                "Make Music for you",
                "Generate Code for you",
                "Craft stunning Videos"
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        I Create content using AI
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="secondary" className="md:text-lg p-4 md:p-6 rounded-full font-semibold  bg-clip bg-gradient-to-r from-purple-500 to-pink-500">
            Start Generating For Free
          </Button>
        </Link>
      </div>

      {/* <div className="text-sm md:text-xl font-light text-white-300">
      "Welcome to Jarvis, your all-in-one AI companion. Chat, create, and code with ease. Harness the power of natural language understanding to generate images, videos, music, and custom code in seconds. Empower your creativity and productivity with Jarvis - the future of AI at your fingertips."
      </div> */}
    </div>
  );
};