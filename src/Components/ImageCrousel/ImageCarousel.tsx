import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

// Props interface
interface CarouselProps {
  images: { src: string; alt: string }[];
  width?: string;
  height?: string;
  autoplay?: boolean;
  autoplaySpeed?: number;
  transitionSpeed?: number;
  snapMode?: boolean; 
}

export const SwiperCarousel: React.FC<CarouselProps> = ({   
  images,
  width = "100%",
  height = "100%",
  autoplaySpeed = 2000, // Default autoplay speed
  transitionSpeed = 500, // Default transition speed
  snapMode = false,
}) => {
  return (
    <Swiper
      style={{ maxWidth: width, margin: "auto" }}
      modules={[Autoplay, Navigation, EffectFade]}
      loop={true} 
      autoplay={{
        delay: autoplaySpeed,
        disableOnInteraction: false, 
      }}
      speed={transitionSpeed} 
      pagination={{ clickable: true }} 
      effect={snapMode ? "fade" : undefined} 
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
  );
};


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
