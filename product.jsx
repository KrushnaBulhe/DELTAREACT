import "./Product.css";
import Price from "./price";

function Product({ title, idx }) {
  let oldPrices = ["12,499", "14,999", "599", "799"];
  let newPrices = ["11,499", "12,999", "299", "599"];
  let description = [
    ["8000 DPI", "5 programmable buttons"],
    ["intutive surface", "designed for ipad pro"],
    ["designed for ipad pro", "intutive surface"],
    ["wireless", "optical oriented"],
  ];
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}

export default Product;
