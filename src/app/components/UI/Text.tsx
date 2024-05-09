import React from "react";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export function Title({ className, children }: Props) {
  return (
    <h1 className={`text-white font-bold ${className}`}>
      {children}
    </h1>
  );
}

export function Subtitle({ className, children }: Props) {
  return (
    <h2 className={`text-[#ff003b] font-bold ${className}`}>
      {children}
    </h2>
  );
}

export function Text({ className, children }: Props) {
  return (
    <p className={`text-white ${className}`}>
      {children}
    </p>
  );
}

/* 

const Carousel = ({ images }: { images: ImageData[] }) => {
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
      className="mySwiper shadow-xl rounded-3xl w-auto h-auto"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading="eager"
            className="w-auto h-auto"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;

*/