import Image from "next/image";

import { useKeenSlider } from "keen-slider/react";

import { HomeContainer, Product } from "../styles/pages/home";

import "keen-slider/keen-slider.min.css";
import { stripe } from "../lib/stipe";
import { GetServerSideProps } from "next";
import Stripe from "stripe";

interface homeProducts {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[];
}

export default function Home({ products }: homeProducts) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    },
  });
  console.log(products);
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => {
        return (
          <Product key={product.id} className="keen-slider__slide">
            <Image
              src={product.imageUrl}
              width={520}
              height={480}
              alt="teste"
            />
            <footer>
              <strong>{product.name}</strong>
              <span>R$ {product.price}</span>
            </footer>
          </Product>
        );
      })}
    </HomeContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((products) => {
    const price = products.default_price as Stripe.Price;

    return {
      id: products.id,
      name: products.name,
      imageUrl: products.images[0],
      price: price.unit_amount! / 100,
    };
  });

  console.log(products);

  return {
    props: {
      products,
    },
  };
};
