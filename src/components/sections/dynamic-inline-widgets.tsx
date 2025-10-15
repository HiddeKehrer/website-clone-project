'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

// TypeScript Interfaces
interface Widget {
  id: string;
  imgSrc: string;
  position: { x: number; y: number };
  scale: number;
  rotation: number;
  zIndex: number;
}

interface SegmentData {
  [key: string]: Widget[];
}

// Segment Data Structure with 5 widgets: 2 left, 3 right - aligned with iPhone edges
const segmentData: SegmentData = {
  overview: [
    {
      id: 'w1',
      imgSrc: '/widgets/overview-widget-1.svg',
      position: { x: -200, y: -80 }, // Left top - aligned with iPhone left edge
      scale: 1,
      rotation: 0,
      zIndex: 20,
    },
    {
      id: 'w2',
      imgSrc: '/widgets/overview-widget-2.svg',
      position: { x: -200, y: 60 }, // Left bottom - aligned with iPhone left edge
      scale: 1,
      rotation: 0,
      zIndex: 20,
    },
    {
      id: 'w3',
      imgSrc: '/widgets/overview-widget-3.svg',
      position: { x: 200, y: -100 }, // Right top - aligned with iPhone right edge
      scale: 1,
      rotation: 0,
      zIndex: 20,
    },
    {
      id: 'w4',
      imgSrc: '/widgets/overview-widget-4.svg',
      position: { x: 200, y: 0 }, // Right middle - aligned with iPhone right edge
      scale: 1,
      rotation: 0,
      zIndex: 20,
    },
    {
      id: 'w5',
      imgSrc: '/widgets/overview-widget-5.svg',
      position: { x: 200, y: 100 }, // Right bottom - aligned with iPhone right edge
      scale: 1,
      rotation: 0,
      zIndex: 20,
    },
  ],
  firsttime: [
    {
      id: 'w1',
      imgSrc: '/widgets/firsttime-widget-1.svg',
      position: { x: -140, y: -80 },
      scale: 1,
      rotation: 0,
      zIndex: 20,
    },
    {
      id: 'w2',
      imgSrc: '/widgets/firsttime-widget-2.svg',
      position: { x: -140, y: 60 },
      scale: 1,
      rotation: 0,
      zIndex: 20,
    },
    {
      id: 'w3',
      imgSrc: '/widgets/firsttime-widget-3.svg',
      position: { x: 140, y: -100 },
      scale: 1,
      rotation: 0,
      zIndex: 20,
    },
    {
      id: 'w4',
      imgSrc: '/widgets/firsttime-widget-4.svg',
      position: { x: 140, y: 0 },
      scale: 1,
      rotation: 0,
      zIndex: 20,
    },
    {
      id: 'w5',
      imgSrc: '/widgets/firsttime-widget-5.svg',
      position: { x: 140, y: 100 },
      scale: 1,
      rotation: 0,
      zIndex: 20,
    },
  ],
  poweruser: [
    {
      id: 'w1',
      imgSrc: '/widgets/poweruser-widget-1.svg',
      position: { x: -140, y: -80 },
      scale: 1,
      rotation: 0,
      zIndex: 20,
    },
    {
      id: 'w2',
      imgSrc: '/widgets/poweruser-widget-2.svg',
      position: { x: -140, y: 60 },
      scale: 1,
      rotation: 0,
      zIndex: 20,
    },
    {
      id: 'w3',
      imgSrc: '/widgets/poweruser-widget-3.svg',
      position: { x: 140, y: -100 },
      scale: 1,
      rotation: 0,
      zIndex: 20,
    },
    {
      id: 'w4',
      imgSrc: '/widgets/poweruser-widget-4.svg',
      position: { x: 140, y: 0 },
      scale: 1,
      rotation: 0,
      zIndex: 20,
    },
    {
      id: 'w5',
      imgSrc: '/widgets/poweruser-widget-5.svg',
      position: { x: 140, y: 100 },
      scale: 1,
      rotation: 0,
      zIndex: 20,
    },
  ],
};

type SegmentId = 'overview' | 'firsttime' | 'poweruser';

const DynamicInlineWidgets = () => {
  const [activeSegment, setActiveSegment] = useState<SegmentId>('overview');
  const [centerWidgetIndex, setCenterWidgetIndex] = useState(0);

  const segments = [
    { id: 'overview' as SegmentId, label: 'Overview' },
    { id: 'firsttime' as SegmentId, label: 'First Time' },
    { id: 'poweruser' as SegmentId, label: 'Power User' },
  ];

  const handleSegmentChange = (segmentId: SegmentId) => {
    setActiveSegment(segmentId);
    setCenterWidgetIndex(0); // Reset rotation when changing segments
  };

  // Rotate center widget every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCenterWidgetIndex((prev) => (prev + 1) % 5);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Get widget position - center widget migrates to center, others stay fixed
  const getWidgetPosition = (widget: Widget, index: number) => {
    if (index === centerWidgetIndex) {
      // This widget migrates to the center position (0, 0) - right on top of iPhone screen
      return { 
        x: 0, 
        y: 0, 
        scale: 1.1, 
        rotation: 0,
        zIndex: 25 
      };
    }
    // All other widgets stay in their EXACT original positions - NO MOVEMENT
    return {
      x: widget.position.x,
      y: widget.position.y,
      scale: widget.scale,
      rotation: widget.rotation,
      zIndex: widget.zIndex
    };
  };

  return (
    <section id="dynamic-widgets" className="relative z-[1] py-12 lg:py-20 xl:py-24">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-emphasis border border-gray-200 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            In-App Widgets
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[40px] font-normal leading-tight [text-wrap:balance] mb-4">
            Run experiments with <br className="hidden sm:block" />
            in-line widgets
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dynamically show personalized content to different user segments
            without writing a single line of code.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Panel: Controls */}
          <div className="flex flex-col justify-start space-y-4 lg:col-span-1">
            <div className="space-y-4">
              <h3 className="font-heading text-2xl md:text-3xl font-normal leading-tight [text-wrap:balance]">
                Target users with{' '}
                <span className="relative inline-block">
                  precision
                  <span className="absolute left-0 bottom-0 h-[3px] w-full bg-accent -mb-1"></span>
                </span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Show the right message to the right user at the right time.
                Create personalized experiences for every user segment.
              </p>
            </div>

            {/* Segment Buttons */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-foreground/70">
                Select a user segment:
              </p>
              <div className="flex flex-col gap-3">
                {segments.map((segment) => (
                  <button
                    key={segment.id}
                    onClick={() => handleSegmentChange(segment.id)}
                    className={`
                      w-full text-left px-4 md:px-6 py-3 md:py-4 rounded-lg font-medium
                      transition-all duration-300 border-2
                      ${
                        activeSegment === segment.id
                          ? 'bg-black text-white border-black shadow-lg shadow-black/20 scale-[1.02]'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:shadow-md'
                      }
                    `}
                  >
                    {segment.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel: Visualizer */}
          <div className="bg-emphasis border border-gray-200 rounded-xl p-4 md:p-6 lg:p-8 overflow-visible lg:col-span-2 order-first lg:order-last">
            <div className="relative w-full h-[400px] md:h-[450px] lg:h-[500px] flex items-center justify-center">
              {/* Phone Mockup */}
              <div className="relative z-10">
                <Image
                  src="/widgets/iphone-mockup.svg"
                  alt="iPhone Mockup"
                  width={280}
                  height={570}
                  className="w-auto h-[250px] md:h-[300px] lg:h-[400px] drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Widget Containers - 5 widgets around iPhone */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <AnimatePresence mode="wait">
                  {segmentData[activeSegment].map((widget, index) => {
                    const position = getWidgetPosition(widget, index);
                    const isCenterWidget = index === centerWidgetIndex;
                    
                    return (
                      <motion.div
                        key={`${activeSegment}-${widget.id}`}
                        className="absolute"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{
                          opacity: 1,
                          scale: position.scale,
                          x: position.x,
                          y: position.y,
                          rotate: position.rotation,
                        }}
                        exit={{ opacity: 0, scale: 0.6, transition: { duration: 0.3 } }}
                        transition={{
                          duration: 0.8,
                          ease: [0.25, 0.8, 0.25, 1],
                          delay: index * 0.05,
                        }}
                        style={{
                          zIndex: position.zIndex,
                        }}
                      >
                        <div className="relative w-[120px] h-[60px] md:w-[140px] md:h-[70px] lg:w-[160px] lg:h-[80px] rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                          <Image
                            src={widget.imgSrc}
                            alt={`Widget ${widget.id}`}
                            fill
                            className="object-cover rounded-xl"
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicInlineWidgets;