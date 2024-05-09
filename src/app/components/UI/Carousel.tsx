import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

interface ImageData {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface CarouselProps {
  className?: string;
  imagesClassNames?: string;
  images: ImageData[];
}

export function Carousel({ images, className, imagesClassNames }: CarouselProps) {
  return (
    <Swiper
      spaceBetween={30}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      zoom={true}
      modules={[Autoplay, Pagination, Navigation]}
      className={`shadow-xl rounded-3xl ${className}`}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading="eager"
            className={`w-full h-full object-cover rounded-3xl ${imagesClassNames}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
