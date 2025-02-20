import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

interface CarouselProps {
  images: { src: string; alt: string }[];
  width?: string;
  height?: string;
  autoplay?: boolean;
  autoplaySpeed?: number;
  transitionSpeed?: number;
  snapMode?: boolean;
  fadeMode?: boolean; // ✅ Enables fade-over mode
}

export const SwiperCarousel: React.FC<CarouselProps> = ({
  images,
  width = "100%",
  height = "100%",
  autoplay = true,
  autoplaySpeed = 2000,
  transitionSpeed = 500,
  snapMode = false,
  fadeMode = false, // Default: false
}) => {
  return (
    <div style={{ maxWidth: width }}>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        loop={true} 
        autoplay={autoplay ? { delay: autoplaySpeed, disableOnInteraction: false } : false}
        speed={snapMode ? 0 : transitionSpeed} 
        effect={fadeMode ? "fade" : snapMode ? "none" : "slide"} 
        fadeEffect={fadeMode ? { crossFade: true } : undefined} 
        style={{ width: "100%", height }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.src}
              alt={image.alt}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

// // Props interface
// interface CarouselProps {
//   images: { src: string; alt: string }[];
//   width?: string;
//   height?: string;
//   autoplay?: boolean;
//   autoplaySpeed?: number;
//   transitionSpeed?: number;
//   snapMode?: boolean; 
//   fadeMode?: boolean; 
// }

// export const SwiperCarousel: React.FC<CarouselProps> = ({   
//   images,
//   width = "100%",
//   height = "100%",
//   autoplaySpeed, 
//   transitionSpeed, 
//   snapMode,
//   fadeMode,
// }) => {
//   return (
//     <Swiper
//       style={{ maxWidth: width, margin: "auto" }}
//       modules={[Autoplay, Navigation, EffectFade]}
//       loop={true} 
//       autoplay={{
//         delay: autoplaySpeed,
//         disableOnInteraction: false, 
//       }}
//       speed={transitionSpeed} 
//       pagination={{ clickable: true }} 
    
//       effect={fadeMode ? "fade" : snapMode ? "none" : "slide"} 
//     >
//       {images.map((image, index) => (
//         <SwiperSlide key={index}>
//           <img
//             src={image.src}
//             alt={image.alt}
//             style={{ width: "100%", height: "100%", objectFit: "cover" }}
//           />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };


// // Props interface
// interface CarouselProps {
//   images: { src: string; alt: string }[];
//   width?: string;
//   height?: string;
//   autoplay?: boolean;
//   autoplaySpeed?: number;
//   transitionSpeed?: number;
//   snapMode?: boolean; 
// }

// export const SwiperCarousel: React.FC<CarouselProps> = ({   
//     images,
//     width = "600px",
//     height = "400px",
//     autoplay = true,
//     autoplaySpeed = 0, 
//     transitionSpeed = 0, 
//     snapMode = false, 
// }) => {
//   return (
//     <div style={{ maxWidth: width, margin: "auto" }}>
//       <Swiper
//      modules={snapMode ? [ Autoplay, EffectFade] : [Autoplay]}
//      pagination={{ clickable: true }}
//      autoplay={autoplay ? { delay: autoplaySpeed, disableOnInteraction: false } : false}
//      loop={true}
//      speed={snapMode ? 0 : transitionSpeed} // If snapMode, set speed to 0
//      effect={snapMode ? "fade" : undefined} // Enable fade effect only for snap mode
//      fadeEffect={snapMode ? { crossFade: false } : undefined}
//      style={{ width: "100%", height }}
//       >
//         {images.map((image, index) => (
//           <SwiperSlide key={index}>
//             <img src={image.src} alt={image.alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };
