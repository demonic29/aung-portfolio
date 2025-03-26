import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
  } from "@/components/magicui/terminal";
import Link from "next/link";
  
  import { FaGithub } from "react-icons/fa";
  import { BsInstagram } from "react-icons/bs";


  export function TerminalUi() {
    return (
      <Terminal className=" h-full">
        <TypingAnimation delay={0} className="font-bold md:text-2xl mb-4">&gt; こんにちは！</TypingAnimation>
  
        <div className="grid gap-4">
          <AnimatedSpan delay={1000} className="text-stone-800">
            <span>✔ 僕の名前は「アウン　コ　テッ」です。</span>
          </AnimatedSpan>
    
          <AnimatedSpan delay={2000} className="text-stone-800">
            <span>✔ メール : aungkohtet2989@gmail.com</span>
          </AnimatedSpan>
    
          <AnimatedSpan delay={3000} className="text-stone-800">
            <span>✔ 電話 : 090-8482-8109</span>
          </AnimatedSpan>

          <AnimatedSpan delay={4000} className="text-stone-800">
            {/* <span>✔ WEB デザインコース 2 年生です。</span> */}
            <Link href="https://github.com/demonic29" target="_blank" className="md:flex items-center hover:text-green-500">✔ Github <FaGithub/></Link>
          </AnimatedSpan>
    
          <AnimatedSpan delay={5000} className="text-stone-800">
            {/* <span>✔ エンジニア志望です。</span> */}
            
             <Link href="https://www.instagram.com/alexonic.29/" target="_blank" className="md:flex items-center hover:text-green-500">✔ Instagram <BsInstagram/></Link>

          </AnimatedSpan>

          <AnimatedSpan delay={6000} className="text-green-700">
            {/* <span>ℹ Updated 1 file:</span> */}
            <span className="pl-2">- 本日は私のポートフォリオ見ていただきありがとうございます。</span>
          </AnimatedSpan>

          <TypingAnimation delay={7000} className="text-muted-foreground">
            よろしくお願いします。
          </TypingAnimation>
        </div>
  
       
      </Terminal>
    );
  }
  