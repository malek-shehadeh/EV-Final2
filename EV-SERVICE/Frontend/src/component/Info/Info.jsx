// import { intro } from "../../constants";
// import carImage from "../../assets/download (1).png";
// const Info = () => {
//   return (
//     <section className="p-5 dark:bg-slate-700 md:p-16 ">
//       <div className="mx-auto flex max-w-6xl flex-col items-start gap-10 rounded-md bg-slate-300 p-5 dark:bg-slate-800 sm:flex-row "></div>
//     </section>
//   );
// };

// export default Info;
//////////////////////////////////////////

// import { useState, useEffect, useRef } from "react";
// import { Play, Pause, RotateCcw } from "lucide-react";

// const Info = () => {
//   const [currentFrame, setCurrentFrame] = useState(0);
//   const [isMouseDown, setIsMouseDown] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [isAutoRotating, setIsAutoRotating] = useState(true);
//   const [rotationSpeed, setRotationSpeed] = useState(100);
//   const [isLoading, setIsLoading] = useState(true);
//   const [loadedImages, setLoadedImages] = useState(0);

//   const containerRef = useRef(null);
//   const autoRotateRef = useRef(null);
//   const frameCount = 24;
//   const frames = Array.from(
//     { length: frameCount },
//     (_, i) => `/car-frames/frame-${i}.png`
//   );

//   useEffect(() => {
//     let loadedCount = 0;
//     frames.forEach((src) => {
//       const img = new Image();
//       img.onload = () => {
//         loadedCount++;
//         setLoadedImages(loadedCount);
//         if (loadedCount === frameCount) {
//           setIsLoading(false);
//         }
//       };
//       img.src = src;
//     });

//     return () => {
//       setIsLoading(true);
//       setLoadedImages(0);
//     };
//   }, []);

//   useEffect(() => {
//     if (isAutoRotating && !isLoading) {
//       autoRotateRef.current = setInterval(() => {
//         setCurrentFrame((prev) => (prev + 1) % frameCount);
//       }, rotationSpeed);
//     }

//     return () => {
//       if (autoRotateRef.current) {
//         clearInterval(autoRotateRef.current);
//       }
//     };
//   }, [isAutoRotating, rotationSpeed, isLoading]);

//   const handleManualInteractionStart = () => {
//     setIsAutoRotating(false);
//   };

//   const handleMouseDown = (e) => {
//     handleManualInteractionStart();
//     setIsMouseDown(true);
//     setStartX(e.pageX - containerRef.current.offsetLeft);
//   };

//   const handleMouseUp = () => {
//     setIsMouseDown(false);
//   };

//   const handleMouseMove = (e) => {
//     if (!isMouseDown) return;
//     const x = e.pageX - containerRef.current.offsetLeft;
//     const walk = (x - startX) * 2;

//     let frame = currentFrame + (walk > 0 ? 1 : -1);
//     if (frame >= frameCount) frame = 0;
//     if (frame < 0) frame = frameCount - 1;

//     setCurrentFrame(frame);
//     setStartX(x);
//   };

//   const handleTouchStart = (e) => {
//     handleManualInteractionStart();
//     const touch = e.touches[0];
//     setIsMouseDown(true);
//     setStartX(touch.pageX - containerRef.current.offsetLeft);
//   };

//   const handleTouchMove = (e) => {
//     if (!isMouseDown) return;
//     const touch = e.touches[0];
//     const x = touch.pageX - containerRef.current.offsetLeft;
//     const walk = (x - startX) * 2;

//     let frame = currentFrame + (walk > 0 ? 1 : -1);
//     if (frame >= frameCount) frame = 0;
//     if (frame < 0) frame = frameCount - 1;

//     setCurrentFrame(frame);
//     setStartX(x);
//   };

//   const handleReset = () => {
//     setCurrentFrame(0);
//     setIsAutoRotating(true);
//   };

//   const handleSpeedChange = (speed) => {
//     setRotationSpeed(speed);
//     if (!isAutoRotating) {
//       setIsAutoRotating(true);
//     }
//   };

//   return (
//     <section className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300">
//       {/* Enhanced Background */}
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-gradient-to-br from-slate-200/50 via-white/30 to-slate-200/50" />
//         <div className="absolute inset-0 backdrop-blur-[2px]" />

//         {/* Enhanced lighting effects */}
//         <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent" />
//         <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-400/40 to-transparent" />
//       </div>

//       <div className="relative h-full w-full max-w-7xl mx-auto">
//         {isLoading && (
//           <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 z-50 backdrop-blur-sm">
//             <div className="w-20 h-20 border-3 border-slate-300 border-t-slate-800 rounded-full animate-spin mb-4" />
//             <div className="text-slate-800 text-sm font-light">
//               Loading... {Math.round((loadedImages / frameCount) * 100)}%
//             </div>
//           </div>
//         )}

//         <div
//           ref={containerRef}
//           className="absolute inset-0 cursor-grab active:cursor-grabbing"
//           onMouseDown={handleMouseDown}
//           onMouseUp={handleMouseUp}
//           onMouseLeave={handleMouseUp}
//           onMouseMove={handleMouseMove}
//           onTouchStart={handleTouchStart}
//           onTouchEnd={handleMouseUp}
//           onTouchMove={handleTouchMove}
//         >
//           <div className="absolute inset-0 flex items-center justify-center px-4">
//             <div className="relative w-full max-w-5xl aspect-video">
//               {/* Enhanced Shadow System */}
//               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5">
//                 {/* Base shadow layer */}
//                 <div className="w-full h-24 bg-slate-950/30 blur-3xl transform scale-y-50 rounded-full" />

//                 {/* Middle shadow layer */}
//                 <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-slate-900/25 blur-2xl transform scale-y-50 rounded-full" />

//                 {/* Top sharp shadow */}
//                 <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-1/2 h-8 bg-slate-900/20 blur-xl transform scale-y-50 rounded-full" />
//               </div>

//               {/* Car Image with Enhanced Shadows */}
//               <div className="relative">
//                 <img
//                   key={currentFrame}
//                   src={frames[currentFrame]}
//                   alt="Car View"
//                   className="w-full h-full object-contain select-none transition-opacity duration-300"
//                   style={{
//                     filter: `
//                       drop-shadow(0 20px 30px rgba(0, 0, 0, 0.4))
//                       drop-shadow(0 15px 12px rgba(0, 0, 0, 0.4))
//                       drop-shadow(0 8px 8px rgba(0, 0, 0, 0.2))
//                       drop-shadow(0 4px 4px rgba(0, 0, 0, 0.1))
//                     `,
//                   }}
//                   draggable="false"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Controls */}
//         <div className="absolute left-1/2 bottom-16 -translate-x-1/2 flex items-center gap-3 px-5 py-3 rounded-full bg-white/80 shadow-xl backdrop-blur-md">
//           <button
//             onClick={() => setIsAutoRotating(!isAutoRotating)}
//             className="p-2.5 rounded-full bg-slate-100"
//           >
//             {isAutoRotating ? (
//               <Pause className="w-5 h-5 text-slate-700" />
//             ) : (
//               <Play className="w-5 h-5 text-slate-700" />
//             )}
//           </button>

//           <div className="w-px h-5 bg-slate-300" />

//           <button
//             onClick={handleReset}
//             className="p-2.5 rounded-full bg-slate-100"
//           >
//             <RotateCcw className="w-5 h-5 text-slate-700" />
//           </button>

//           <div className="w-px h-5 bg-slate-300" />

//           <div className="flex items-center gap-1.5">
//             {[
//               { label: "Slow", value: 150 },
//               { label: "Medium", value: 100 },
//               { label: "Fast", value: 50 },
//             ].map((speed) => (
//               <button
//                 key={speed.label}
//                 onClick={() => handleSpeedChange(speed.value)}
//                 className={`
//                   px-3.5 py-1.5 rounded-full text-xs font-medium
//                   ${
//                     rotationSpeed === speed.value
//                       ? "bg-slate-800 text-white"
//                       : "bg-slate-100 text-slate-700"
//                   }
//                 `}
//               >
//                 {speed.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Info;
//////////////////////////////////////

import { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";

const Info = () => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [rotationSpeed, setRotationSpeed] = useState(100);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);

  const containerRef = useRef(null);
  const autoRotateRef = useRef(null);
  const frameCount = 24;
  const frames = Array.from(
    { length: frameCount },
    (_, i) => `/car-frames/frame-${i}.png`
  );

  useEffect(() => {
    let loadedCount = 0;
    frames.forEach((src) => {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        setLoadedImages(loadedCount);
        if (loadedCount === frameCount) {
          setIsLoading(false);
        }
      };
      img.src = src;
    });

    return () => {
      setIsLoading(true);
      setLoadedImages(0);
    };
  }, []);

  useEffect(() => {
    if (isAutoRotating && !isLoading) {
      autoRotateRef.current = setInterval(() => {
        setCurrentFrame((prev) => (prev + 1) % frameCount);
      }, rotationSpeed);
    }

    return () => {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current);
      }
    };
  }, [isAutoRotating, rotationSpeed, isLoading]);

  const handleManualInteractionStart = () => {
    setIsAutoRotating(false);
  };

  const handleMouseDown = (e) => {
    handleManualInteractionStart();
    setIsMouseDown(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;

    let frame = currentFrame + (walk > 0 ? 1 : -1);
    if (frame >= frameCount) frame = 0;
    if (frame < 0) frame = frameCount - 1;

    setCurrentFrame(frame);
    setStartX(x);
  };

  const handleTouchStart = (e) => {
    handleManualInteractionStart();
    const touch = e.touches[0];
    setIsMouseDown(true);
    setStartX(touch.pageX - containerRef.current.offsetLeft);
  };

  const handleTouchMove = (e) => {
    if (!isMouseDown) return;
    const touch = e.touches[0];
    const x = touch.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;

    let frame = currentFrame + (walk > 0 ? 1 : -1);
    if (frame >= frameCount) frame = 0;
    if (frame < 0) frame = frameCount - 1;

    setCurrentFrame(frame);
    setStartX(x);
  };

  const handleReset = () => {
    setCurrentFrame(0);
    setIsAutoRotating(true);
  };

  const handleSpeedChange = (speed) => {
    setRotationSpeed(speed);
    if (!isAutoRotating) {
      setIsAutoRotating(true);
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 dark:from-slate-700 dark:via-slate-800 dark:to-slate-900 p-5 md:p-16">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-200/50 via-white/30 to-slate-200/50 dark:from-slate-800/50 dark:via-slate-900/30 dark:to-slate-800/50" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />

        {/* Enhanced lighting effects */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent dark:from-slate-900/30" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-400/40 to-transparent dark:from-slate-900/40" />
      </div>

      <div className="relative h-full w-full max-w-7xl mx-auto">
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 dark:bg-slate-900/80 z-50 backdrop-blur-sm">
            <div className="w-20 h-20 border-3 border-slate-300 border-t-slate-800 dark:border-slate-700 dark:border-t-slate-200 rounded-full animate-spin mb-4" />
            <div className="text-slate-800 dark:text-slate-200 text-sm font-light">
              Loading... {Math.round((loadedImages / frameCount) * 100)}%
            </div>
          </div>
        )}

        <div
          ref={containerRef}
          className="absolute inset-0 cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleMouseUp}
          onTouchMove={handleTouchMove}
        >
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="relative w-full max-w-5xl aspect-video">
              {/* Enhanced Shadow System */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5">
                {/* Base shadow layer */}
                <div className="w-full h-24 bg-slate-950/30 blur-3xl transform scale-y-50 rounded-full" />

                {/* Middle shadow layer */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-slate-900/25 blur-2xl transform scale-y-50 rounded-full" />

                {/* Top sharp shadow */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-1/2 h-8 bg-slate-900/20 blur-xl transform scale-y-50 rounded-full" />
              </div>

              {/* Car Image with Enhanced Shadows */}
              <div className="relative">
                <img
                  key={currentFrame}
                  src={frames[currentFrame]}
                  alt="Car View"
                  className="w-full h-full object-contain select-none transition-opacity duration-300"
                  style={{
                    filter: `
                      drop-shadow(0 20px 30px rgba(0, 0, 0, 0.4))
                      drop-shadow(0 15px 12px rgba(0, 0, 0, 0.4))
                      drop-shadow(0 8px 8px rgba(0, 0, 0, 0.2))
                      drop-shadow(0 4px 4px rgba(0, 0, 0, 0.1))
                    `,
                  }}
                  draggable="false"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="absolute left-1/2 bottom-16 -translate-x-1/2 flex items-center gap-3 px-5 py-3 rounded-full bg-white/80 dark:bg-slate-800/80 shadow-xl backdrop-blur-md">
          <button
            onClick={() => setIsAutoRotating(!isAutoRotating)}
            className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-700"
          >
            {isAutoRotating ? (
              <Pause className="w-5 h-5 text-slate-700 dark:text-slate-200" />
            ) : (
              <Play className="w-5 h-5 text-slate-700 dark:text-slate-200" />
            )}
          </button>

          <div className="w-px h-5 bg-slate-300 dark:bg-slate-600" />

          <button
            onClick={handleReset}
            className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-700"
          >
            <RotateCcw className="w-5 h-5 text-slate-700 dark:text-slate-200" />
          </button>

          <div className="w-px h-5 bg-slate-300 dark:bg-slate-600" />

          <div className="flex items-center gap-1.5">
            {[
              { label: "Slow", value: 150 },
              { label: "Medium", value: 100 },
              { label: "Fast", value: 50 },
            ].map((speed) => (
              <button
                key={speed.label}
                onClick={() => handleSpeedChange(speed.value)}
                className={`
                  px-3.5 py-1.5 rounded-full text-xs font-medium
                  ${
                    rotationSpeed === speed.value
                      ? "bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900"
                      : "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200"
                  }
                `}
              >
                {speed.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
