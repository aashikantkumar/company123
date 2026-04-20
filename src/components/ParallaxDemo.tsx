'use client';
import React from 'react';
import { cn } from '../lib/utils';
import Lenis from '@studio-freight/lenis'
import { ZoomParallax } from './ui/zoom-parallax';

export default function ParallaxDemo() {

	React.useEffect( () => {
        const lenis = new Lenis()
       
        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => lenis.destroy()
    },[])


	const images = [
		{
			src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
			alt: 'Business strategy meeting',
		},
		{
			src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
			alt: 'Digital marketing analytics',
		},
		{
			src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
			alt: 'Office team collaboration',
		},
		{
			src: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
			alt: 'Creative brand design',
		},
		{
			src: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
			alt: 'Modern brand graphics',
		},
		{
			src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
			alt: 'Data-driven insights',
		},
		{
			src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
			alt: 'Company laptop desk',
		},
	];

	return (
		<section className="relative w-full bg-black py-0">
			<div className="relative flex h-[35vh] items-center justify-center overflow-hidden">
				{/* Radial spotlight */}
				<div
					aria-hidden="true"
					className={cn(
						'pointer-events-none absolute -top-1/2 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full',
						'bg-[radial-gradient(ellipse_at_center,rgba(255,50,50,0.1),transparent_50%)]',
						'blur-[30px]',
					)}
				/>
				<div className="z-10 flex flex-col items-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c6ff] to-[#8f00ff] font-bold tracking-widest text-sm uppercase mb-4">Zoom Into Our World</span>
                    <h2 className="text-center text-5xl md:text-7xl font-black text-white uppercase px-4">
                        Discover Brand Magic
                    </h2>
                </div>
			</div>
			<ZoomParallax images={images} />
			<div className="h-[10vh] bg-black"/>
		</section>
	);
}
