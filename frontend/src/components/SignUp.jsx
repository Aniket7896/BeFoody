import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
const [name, setName] = useState("")
const [password, setPassword] = useState("");
const [email, setEmail] = useState("");
const [location, setLocation] = useState("");

const handleSubmit=async(e)=>{
    e.preventDefault();
    const payload={
        name,email,password,location
    }
    try {
       const res = await fetch(
         "https://food-delivery-data.onrender.com/user/signup",
         {
           method: "POST",
           headers: {
             "Content-type": "application/json",
           },
           body: JSON.stringify(payload),
         }
       ); 
     const data=await res.json();
       if (!data.success) {
         alert("Enter Valid Credential");
       }
       console.log(data)
    } catch (error) {
        console.log(error)
    }
}

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Location
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
          <Link to="/login" className="m-3 btn btn-danger">
            Already a user
          </Link>
        </form>
      </div>
    </>
  );
};
export default SignUp;
