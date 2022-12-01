import Image from "next/image";

import { useKeenSlider } from "keen-slider/react";

import img1 from "../assets/Camisetas/1.png";
import img2 from "../assets/Camisetas/2.png";

import { HomeContainer, Product } from "../styles/pages/home";

import "keen-slider/keen-slider.min.css";

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    },
  });
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={img1} width={520} height={480} alt="teste" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={img2} width={520} height={480} alt="teste" />
        <footer>
          <strong>Camiseta 2</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={img2} width={520} height={480} alt="teste" />
        <footer>
          <strong>Camiseta 3</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={img1} width={520} height={480} alt="teste" />
        <footer>
          <strong>Camiseta 4</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
