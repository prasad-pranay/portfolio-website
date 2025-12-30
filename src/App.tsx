import './App.css'
import { Navbar } from './pages/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'
import Project from './pages/Project'
// import TopLeftShare from './components/mypart/TopLeftShare'
import Education from './pages/Education'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import {  useEffect, useRef, useState } from 'react'
import ProjectDisplay from './pages/project/ProjectDisplay'
import ContextMenu from './pages/ContextMenu'
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const [prjName,setPrjName] = useState("")
  const [positionContext,setpositionContext] = useState([0,0])
  const [showContext,setshowContext] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null);

  const [locoScroll,setLocoScroll] = useState<LocomotiveScroll>()
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // setTimeout(() => {
      
      if (!containerRef.current) {
        return
      };
      setLocoScroll( new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
        
        multiplier: 1, // scroll speed
        smartphone: { smooth: true },
      }));

      return () => {
        locoScroll!.destroy();
      };
    // }, 2000); 
  }, []);

  useEffect(() => {
    if(prjName.length>1){
      locoScroll?.stop()
    }else{
      locoScroll?.start()
    }
  }, [prjName])
  

  return <>
    <main ref={containerRef} data-scroll-container className="overflow-hidden" onClick={(e)=>{
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setshowContext(false); // Hide menu
      }
    }} onContextMenu={(e)=>{e.preventDefault();setshowContext(false);setshowContext(true);setpositionContext([e.clientX,e.clientY])}}>
      {prjName.length>1 &&  <ProjectDisplay  setPrjName={setPrjName} prjName={prjName}  /> }
      <Navbar locoScroll={locoScroll}/>
      {showContext && <ContextMenu locoScroll={locoScroll} ref={menuRef} positionContext={positionContext} setshowContext={setshowContext} />}
      {/* <TopLeftShare /> */}
      <Hero locoScroll={locoScroll} /> 
      <About locoScroll={locoScroll} />
      <Project setPrjName={setPrjName} />
      <Education />
      <Skills />
      <Contact />
    </main>
        </>
}

export default App
