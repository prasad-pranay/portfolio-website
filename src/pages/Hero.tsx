import { motion } from "framer-motion";
import { CoolMode } from "@/components/magicui/cool-mode";
import { FlipText } from "@/components/magicui/flip-text";
import { SpinningText } from "@/components/magicui/spinning-text";
import { WordRotate } from "@/components/magicui/word-rotate";
import { Meteors } from "@/components/magicui/meteors";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { ArrowDown } from 'lucide-react';
import { BoxReveal } from '@/components/magicui/box-reveal';
import MyWorkButton from '@/components/mypart/MyWorkButton';
import { useEffect, useState } from "react";

const Hero = ({locoScroll}:{locoScroll: any}) => {
    const [showName,setShowName] = useState(false)
    useEffect(() => {
      setTimeout(() => {
        setShowName(true)
      }, 1000);
    }, [])
    
    return (
      <section id='home' data-scroll-section className='text-black dark:text-white h-screen w-screen overflow-hidden px-[2rem] sm:px-[10rem]  relative flex flex-col justify-center relative'>
        <motion.div
                    initial={{  opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{delay:3, duration: 0.5, ease: "easeOut" }}
                    className=""
                >
          <Meteors number={30} />
        </motion.div>
        
        <motion.div
                    // animate={{  opacity: 1 }}
                    initial={{ opacity:0,scale:0}}
                    whileInView={{ opacity:1,scale:1}}
                    transition={{duration: .5, ease: "easeOut" }}
                    viewport={{ once: false, amount:.2}}
                    className="select-none w-max"
                >
            <CoolMode>
        <h1 className='flex gap-2 border-2 border-gray-500 hover:border-[#333635] transition-border-color duration-400 w-max px-5 py-2 mb-7 rounded-2xl items-center cursor-default group'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 stroke-gray-500 fill-gray-500 group-hover:scale-110 transition-transform duration-300">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>

            <span className='text-sm font-semibold text-gray-500 text-center' onClick={()=>locoScroll.scrollTo("#contact")}>Let's meet</span>
        </h1>
            </CoolMode>
                </motion.div>
            {/* <AuroraText className="text-sm font-semibold text-[#C7C7D2] text-center">Let's Connect</AuroraText> */}
            <div className='text-3xl sm:text-6xl font-normal flex flex-wrap items-end gap-x-5'>
                <BoxReveal duration={0.5} boxColor='#53EAFD'>
                    <h1>Hi, I'm </h1>
                </BoxReveal>
                {showName && <FlipText className="text-4xl sm:text-7xl font-semibold -tracking-widest text-[#5227FF]  md:leading-[5rem]">
                    Pranay Prasad
                </FlipText>}
                {!showName && <BoxReveal duration={0.5} boxColor='#53EAFD'>
                    <h1 className="text-5xl sm:text-7xl font-semibold -tracking-widest text-[#5227FF] text-background md:leading-[5rem]">Pranay Prasad</h1>
                </BoxReveal>}
            </div>
        
        {/* <BoxReveal duration={0.5} boxColor='#53EAFD'> */}
            <h2 className='grid sm:grid-cols-[.5fr_max-content] sm:text-6xl text-3xl items-center'>
                <BoxReveal duration={0.5} boxColor='#53EAFD' className='col-span-2'>
                    <span className='col-span-2 text-left'>
                        a curious coder & 
                    </span>
                </BoxReveal>

                <BoxReveal duration={0.5} boxColor='#53EAFD' className='flex' width='100%' innerClassName='w-[100%]'>
                    <span className='flex flex-wrap whitespace-pre-wrap relative px-2 sm:px-2 md:px-3 bg-[#5227FF] mr-3 mt-3 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg'>
                        <WordRotate
                            className="text-lg sm:text-4xl font-semibold text-white dark:text-white"
                            words={['Full Stack', 'Frontend', 'Backend', 'Web',"Flutter"]}
                        />
                    </span>
                </BoxReveal>
                <BoxReveal duration={0.5} boxColor='#53EAFD' className='flex' width='100%' innerClassName='w-[100%]'>
                    <span>Developer</span> 
                </BoxReveal>
            </h2>
        {/* </BoxReveal> */}


        <div className='flex mt-15 gap-10 overflow-hidden'>
            <CoolMode>
                <motion.div
                    initial={{ y:30 ,opacity:.5,scale:0.5}}
                    whileInView={{ y:0,opacity:1,scale:1}}
                    transition={{ duration: .5}}
                    viewport={{ once: false, amount:.2}}
                    className='cursor-pointer'
                >
                    <MyWorkButton onclick={()=>{locoScroll.scrollTo("#project")}} />
                </motion.div>
            </CoolMode>

            <a href="/pranay_resume.pdf" download>
                <motion.div
                    initial={{ y:30 ,opacity:.5,scale:0.5}}
                    whileInView={{ y:0,opacity:1,scale:1}}
                    transition={{ duration: .5}}
                    viewport={{ once: false, amount:.2}}
                    className='cursor-pointer'
                >
                    <InteractiveHoverButton className='px-[2rem] h-[3.5rem] rounded-md sm:block hidden'>Download CV</InteractiveHoverButton>
                    <InteractiveHoverButton className='px-[2rem] h-[3.5rem] rounded-md block sm:hidden bg-white text-black dark:bg-[#111] dark:text-white'>Resume</InteractiveHoverButton>
                </motion.div>
            </a>
        </div>


        {/* circular text on bottom right */}
        <div className='absolute right-20 bottom-20 group' onClick={()=>locoScroll.scrollTo(500)}>
            <motion.div
                    initial={{  opacity: 0 }}
                    animate={{  opacity: 1 }}
                    transition={{delay:2.5, duration: 0.5, ease: "easeOut" }}
                    className=""
                >

            <SpinningText>SCROLL • FOR • MORE •</SpinningText>
            <div className="absolute translate-[-50%] flex flex-col h-[30px] overflow-hidden z-100">
                <span className='h-[30px] translate-y-[-110%] group-hover:translate-y-[0%] transition-transform duration-400'>
                    <ArrowDown  />
                </span>
                <span className='h-[30px] translate-y-[-110%] group-hover:translate-y-[10%] transition-transform duration-400'>
                    <ArrowDown  />
                </span>
            </div>
                </motion.div>
        </div>

    </section>
  )
}

export default Hero