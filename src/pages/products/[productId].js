import axios from "axios";
import { useRouter } from "next/router";

const Product = ({ product }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading ....</h1>;
  }

  return (
    <div>
      <h1>Produdct detail page</h1>
      <h2>
        {product.id} - {product.title} - {product.price}
      </h2>
    </div>
  );
};

export default Product;

export async function getStaticPaths() {
  // const { data } = await axios.get("http://localhost:4000/products");
  return {
    paths: [
      {
        params: { productId: "1" },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { data } = await axios.get(`http://localhost:4000/products/${params.productId}`);
  console.log(`Regenrating ProductId Page ${params.productId}`);
  return {
    props: {
      product: data,
    },
    revalidate: 10,
  };
}
