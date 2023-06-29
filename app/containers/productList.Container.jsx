import Card from "@/app/components/Card";

export default function ProductList({ products }) {
  const { docs } = products.payload;
  return (
    <>
      <div className="flex justify-center items-center flex-wrap bg-[#80808021]">
        {docs.map((doc, index) => {
          return <Card key={index} products={doc} />;
        })}
      </div>
    </>
  );
}
