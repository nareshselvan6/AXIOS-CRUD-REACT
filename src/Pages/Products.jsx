import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const navigate=useNavigate();
    const[Del,setDel]=useState()

    const del=`https://665306ff813d78e6d6d6ee0c.mockapi.io/api/products/`
    const[products,setProducts]=useState([]);

  useEffect(()=>{
fetchdata()
  },[Del]);

  const handleEdit=(id)=>{
    navigate(`/edit/${id}`)

  }

  const create=()=>{
    navigate('/create')
  }



  const fetchdata = async () => {
    await axios
      .get("https://665306ff813d78e6d6d6ee0c.mockapi.io/api/products")
      .then(res=>setProducts(res.data))
      .catch((error) => console.log(error));
  };

    return (
        <div>
             <table className="table table-success">
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Website</th>
      <th scope="col">Companyname</th>
      <th scope="col" colSpan={3}>Action</th>
    </tr>
  </thead>
  <tbody>
    {products.map((ele,index)=>{
       return(
    <tr key={index}>
      <th scope="row">{ele.id}</th>
      <td>{ele.name}</td>
      <td>{ele.username}</td>
      <td>{ele.email}</td>
      <td>{ele.phone}</td>
      <td>{ele.website}</td>
      <td>{ele.Companyname}</td>
      <td><button className='btn btn-primary' onClick={()=>handleEdit(ele.id)}>Edit</button></td>
      <td><button className='btn btn-danger'onClick={async()=>setDel(await axios.delete(del+ele.id))}>Delete</button></td>
      
    </tr>


       )
    })}
    <button className='btn btn-success my-3 ' onClick={()=>create()}>Create</button>
    
  </tbody>
</table>
        </div>
    );
};

export default Products;