import { useEffect, useState } from "react";
import Card from "./Card";
import Carousal from "./Carousal";

const Home = () => {
  const [fooditems, setfoodItems] = useState([]);
  const [foodCategory, setfoodCategory] = useState([]);
  const [search, setSearch] = useState("");
  const getData = async () => {
    try {
      const res = await fetch(
        "https://food-delivery-data.onrender.com/data/products"
      );
      const data = await res.json();
      setfoodItems(data[0]);
      setfoodCategory(data[1]);
      console.log(data[0], data[1]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Carousal search={search} setSearch={setSearch} />
      <div className="container">
        {foodCategory.length > 0 ? (
          foodCategory.map((data) => (
            <div className="row mb-3">
              <div key={data._id} className="fs-3 m-3">
                {data.CategoryName}
              </div>
              <hr />
              {fooditems.length === 0 ? (
                <div></div>
              ) : (
                fooditems
                  .filter(
                    (items) =>
                      items.CategoryName === data.CategoryName &&
                      items.name
                        .toLowerCase()
                        .includes(search.toLocaleLowerCase())
                  )
                  .map((foodItems) => (
                    <div
                      key={foodItems._id}
                      className="col-12 col-md-6 col-lg-3"
                    >
                      <Card {...foodItems} />
                    </div>
                  ))
              )}
            </div>
          ))
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <img
              src="https://icaengineeringacademy.com/wp-content/uploads/2019/01/ajax-loading-gif-transparent-background-2.gif"
              alt="loading"
              height={200}
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default Home;
