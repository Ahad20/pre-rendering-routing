import axios from "axios";

const ProductList = ({ products }) => {
  return (
    <div>
      <h1>Produdct List page</h1>
      {products.map((p) => (
        <div key={p.id}>
          <h2>
            {p.id} - {p.title} - {p.price}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

export async function getStaticProps() {
  console.log(`Generating / Regenerating ProdutList`);

  const { data } = await axios.get("http://localhost:4000/products");
  return {
    props: {
      products: data,
    },
    revalidate: 20,
  };
}
