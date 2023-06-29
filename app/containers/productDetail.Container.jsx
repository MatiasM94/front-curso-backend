import ProductInfo from "../components/ProductInfo";

export default function ProductDetail({ productDetail }) {
  return (
    <section className="bg-[#80808021] h-[80vh] flex justify-center">
      <ProductInfo productDetail={productDetail} />
    </section>
  );
}
