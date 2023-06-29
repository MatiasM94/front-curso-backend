import Image from "next/image";
import BuyButtons from "./buyButtons";
import getCookies from "../utils/getCookies";

export default function ProductInfo({ productDetail }) {
  const { title, description, price, thumbnails, stock, category, owner, _id } =
    productDetail;
  const tokenName = "authToken";
  const cookie = getCookies(tokenName);
  return (
    <section className="flex justify-evenly items-center bg-white w-[80%] m-auto">
      <Image src={thumbnails[1]} width={400} height={400} />
      <div>
        <h1>{title}</h1>
        <div className="flex w-fit">
          <h1 className="mr-2">Recomendado</h1>
          <p>en {category}</p>
        </div>
        <p>$ {price}</p>
        <div className="flex bg-[#F2E001] w-fit px-2">
          <h1 className="mr-2">Stock:</h1>
          <p>{stock}</p>
        </div>
        <p>{description}</p>
        <h3>
          Vendido por <span className="text-purple-700">{owner}</span>
        </h3>
        <BuyButtons cookies={cookie} pid={_id} />
      </div>
    </section>
  );
}
