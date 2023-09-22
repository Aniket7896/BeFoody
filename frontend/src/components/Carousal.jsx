const Carousal = ({search,setSearch}) => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ objectFit: "contain !important" }}
      >
        <div
          className="carousel-inner"
          id="carousel"
          style={{ maxHeight: "500px" }}
        >
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <div className="d-flex justify-content-center">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="carousel-item active">
            <img
              src="https://media.istockphoto.com/id/1503222900/photo/crispy-cheesy-chicken-patty-zinger-burger-with-onion-rings.jpg?s=2048x2048&w=is&k=20&c=K3Ra-ha1lZVvcu3n1PqAIbtC27DBlLXWkwjSH8WKemY="
              className="d-block w-100"
              style={{
                maxHeight: "110%",
                objectFit: "cover",
                filter: "brightness(70%)",
              }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/1179402753/photo/seafood-pizza.jpg?s=2048x2048&w=is&k=20&c=BQoG515bRKCluj7Ffk1_ZT10f1ITWXmmw4qg0vREV5M="
              className="d-block w-100"
              style={{
                maxHeight: "100%",
                objectFit: "cover",
                filter: "brightness(70%)",
              }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/1045891932/photo/ready-to-eat.jpg?s=2048x2048&w=is&k=20&c=xtRU9DRLiwjDOCWfHVZKpHqHvoeLRfF2J_REGi03o5g="
              className="d-block w-100"
              style={{
                maxHeight: "100%",
                objectFit: "cover",
                filter: "brightness(70%)",
              }}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
export default Carousal;
