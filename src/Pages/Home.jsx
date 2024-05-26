import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import "../Pages/Create.css"

const Home = () => {
    const[products,setProducts]=useState([])
  useEffect(() => {
    fetchdata()
  },[]);


  const fetchdata = async () => {
    await axios
      .get("https://665306ff813d78e6d6d6ee0c.mockapi.io/api/products")
      .then(res=>setProducts(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
       <div className="totalcontent">
           <div className="row row-cols-1 row-cols-md-3 g-4">
      {products.map((element,index)=>{
        return(
            <div key={index}>
             
                <div className="col">
        <div className="card">
            <div className="card-header "><b>USER DETAILS</b></div>
          <div className="card-body">
            <h5 className="card-title"></h5>
            <p className="card-text"><b>Name:</b> {element.name}</p>
            <p className="card-text"><b>Username:</b>{element.username}</p>
            <p className="card-text"><b>Email:</b>{element.email}</p>
            <p className="card-text"><b>Phone:</b>{element.phone}</p>
            <p className="card-text"><b>Website:</b>{element.website}</p>
            <p className="card-text"><b>Company Name: </b>{element.Companyname}</p>
          </div>
        </div>
      </div>
      </div>
            
        )
      })}
        </div>
    </div>
    </div>
  );
};

export default Home;
