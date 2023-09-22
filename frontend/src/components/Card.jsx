import { useContext, useEffect, useRef, useState } from "react";
import { DispatchContext, cartContext } from "./ContextReducer";

const Card = ({ _id, name, CategoryName, img, description, options }) => {
  const opt = options[0];
  const price = Object.keys(opt);

  const dispatch = useContext(DispatchContext);
 
  const data = useContext(cartContext);
  const priceRef = useRef();

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");

  const finalPrice = quantity * parseInt(opt[size]);

  const handleAddToCart = async () => {
    let food = [];
    for (const item of data) {
      if (item.id === _id) {
        food = item;
        break;
      }
    }
    if (food.length !== 0) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", _id, finalPrice, quantity: quantity });
        return;
      } else if (food.size !== size) {
        await dispatch({ type: "ADD", _id, name, finalPrice, quantity, size });
        return;
      }
      return
    } 
    await dispatch({ type: "ADD", _id, name, finalPrice, quantity, size });
  };

  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem", height: "300px" }}>
        <img
          src={img}
          className="card-img-top"
          style={{ height: "120px", objectFit: "fill" }}
          alt="..."
        />

        <div className="card-body">
          <h5 className="card-title">{name}</h5>

          <div className="container w-100">
            <select
              className="m-2 h-100 bg-success rounded"
              onChange={(e) => setQuantity(e.target.value)}
            >
              {Array.from(Array(6), (e, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select
              className="m-2 h-100 bg-success rounded"
              ref={priceRef}
              onChange={(e) => setSize(e.target.value)}
            >
              {price.map((data) => (
                <option key={data} value={data}>
                  {data}
                </option>
              ))}
            </select>

            <div className="d-inline h-100 fs-5">₹{finalPrice}/-</div>
          </div>
          <hr />
          <div
            className="btn btn-success justify-center ms-2"
            onClick={handleAddToCart}
          >
            Add To Cart
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
