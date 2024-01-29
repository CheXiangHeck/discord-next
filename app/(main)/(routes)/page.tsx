import { UserButton,SignIn } from "@clerk/nextjs";
import "./Home.css"
import { Button } from "@/components/ui/button";
import Link from "next/link";
 
export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-row BackgroundImage BorderImage">
        <div className="w-full flex relative justify-center items-center backdrop-blur-md">
          <div className="h-3/5 rounded-3xl w-[300px] flex flex-col items-center gap-8 bg-green-400 border-r-8 border-b-4 border-slate-500">
            <img src="DiscordHmm.png" className="w-3/4" alt="Logo"></img>
            <p className="text-white font-SixtyFour font-bold">FAKE DISCORD</p>
            <div className="flex gap-10">
              <Button variant="default"><Link href="/sign-in">Sign In</Link></Button>
              <Button variant="default"><Link href="/sign-up">Sign Up</Link></Button>
            </div>
          </div>
        </div>
      </div>
    </>
  ); 
}