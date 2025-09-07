'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import Pic2 from '../../public/assets/images/friends.png'
import Pic3 from '../../public/assets/images/bg3.png'
import Pic4 from '../../public/assets/images/bg3Mobile.png'
import { getAllEvents } from '@/lib/actions/event.actions';
import AllEventsCards from '@/components/shared/AllEventsCards';
import { SmoothCursor } from '@/components/ui/smooth-cursor';

interface SectionProps {
  scrollYProgress: any;
  events: any[];
}

export default function Home() {

  const [events, setEvents] = useState<any>([]);


  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const fetchEvents = async () => {
      const eventsData = await getAllEvents({
        query: '',
        category: 'all',
        page: 1,
        limit: 6,
      });
      setEvents(eventsData?.data);
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <main ref={container} className="relative h-[200vh] bg-primary-500">
        <Section1 scrollYProgress={scrollYProgress} events={events} />
        <Section2 scrollYProgress={scrollYProgress} events={events} />
        <Section3 scrollYProgress={scrollYProgress} events={events} />
        <SmoothCursor />
      </main>
    </>
  )
}
const Section1 = ({ scrollYProgress }: SectionProps) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className=" font-kagitingan sticky top-0 h-screen bg-secondary text-[3.5vw] font-bold text-primary-500 flex flex-col items-center justify-center pb-[10vh] rounded-2xl"
    >
      {/* <Image
        src={Pic1}
        alt="img"
        placeholder="blur"
        fill
        className="rounded-2xl "
      /> */}
      <p className='mt-20 sm:mt-0 text-center text-5xl flex flex-wrap lg:text-[3.5vw]'>Host, Connect, Celebrate 🎉</p>
      <div className='sm:hidden flex flex-col items-center justify-center'>
        <p className='text-center text-5xl flex flex-wrap lg:text-[3.5vw]'>Your Events Our Platform!</p>
        <Image
            src={Pic2}
            alt="img"
            height={200}
            width={200}
          />
      </div>


      <div className="hidden sm:flex gap-4 ">
        <p className='text-center text-5xl flex  lg:text-[3.5vw]'>Your Events</p>
        <div className=" relative w-[12.5vw] h-[9.5vw] ">
          <Image
            src={Pic2}
            alt="img"
            fill
            className='hover:scale-105 transition-all duration-300 rounded-2xl'
          />
        </div>
        <p className='text-center text-5xl lg:text-[3.5vw]'>Our Platform!</p>
      </div>
    </motion.div>
  );
};


const Section2 = ({ scrollYProgress }: SectionProps) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="relative h-[100vh] bg-white rounded-t-2xl flex items-center justify-center pb-[10vh] font-kagitingan text-center "
    >

      <p className="z-10 my-20 text-center text-5xl flex flex-wrap justify-center items-center  lg:text-[3.5vw]"> Trusted by <span className='bg-secondary px-2 text-black'>Thousands</span> of Events</p>
      <Image
        src={Pic3}
        alt="img"
        placeholder="blur"
        fill
        className="rounded-2xl hidden md:block"
      />

      <Image
        src={Pic4}
        alt="img"
        placeholder="blur"
        fill
        className="rounded-2xl  md:hidden"
      />



    </motion.div>
  );
};


const Section3 = ({ events }: SectionProps) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["80%", "-45%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-primary-500 w-full py-10 ">
      <div className="sticky top-0 flex-col h-screen items-center overflow-hidden">
        <p className="p-bold my-20 font-bold text-center text-white font-kagitingan  
        text-5xl flex flex-wrap justify-center  lg:text-[3.5vw]
        ">
          <span className='bg-secondary px-2 mx-2 text-black '>Featured</span>Events</p>

        <div >


          <motion.div style={{ x }} className="flex gap-4 w-full " >

            {events.map((event) => {
              return <li className='w-full'>

                <AllEventsCards event={event} />
              </li>
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};