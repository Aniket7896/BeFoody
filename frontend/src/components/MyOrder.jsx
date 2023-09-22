import React, { useEffect, useState } from "react";

export default function MyOrder() {
  const [orderData, setorderData] = useState({});

  const fetchMyOrder = async () => {
    console.log(localStorage.getItem("userEmail"));
    await fetch("https://food-delivery-data.onrender.com/data/myOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem("userEmail"),
      }),
    }).then(async (res) => {
      let response = await res.json();
      await setorderData(response);
    });
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  /*============================================================================================== */

  return (
    <div>
      <div className="container">
        <div className="row">
          {Object.keys(orderData).length !== 0
            ? Array.isArray(orderData.orderData.order_data)
              ? orderData.orderData.order_data
                  .slice(0)
                  .reverse()
                  .map((item) => {
                    return Array.isArray(item)
                      ? // Map over the inner array
                        item.map((arrayData) => (
                          <div key={arrayData.id}>
                            {arrayData.order_date ? (
                              <div className="m-auto mt-5">
                                {arrayData.order_date}
                                <hr />
                              </div>
                            ) : (
                              <div className="col-12 col-md-6 col-lg-3">
                                <div
                                  className="card mt-3"
                                  style={{
                                    width: "16rem",
                                    maxHeight: "360px",
                                  }}
                                >
                                  <div className="card-body">
                                    <h5 className="card-title">
                                      {arrayData.name}
                                    </h5>
                                    <div
                                      className="container w-100 p-0"
                                      style={{ height: "38px" }}
                                    >
                                      <span className="m-1">
                                        {arrayData.quantity}
                                      </span>
                                      <span className="m-1">
                                        {arrayData.size}
                                      </span>
                                      <span className="m-1">
                                        {arrayData.order_date}
                                      </span>
                                      <div className=" d-inline ms-2 h-100 w-20 fs-5">
                                        ₹{arrayData.price}/-
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        ))
                      : null; // Handle non-array elements here, or you can omit them
                  })
              : null
            : null}
        </div>
      </div>
    </div>
  );
}
