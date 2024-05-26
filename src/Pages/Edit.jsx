import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const [Name, setName] = useState([]);
  const [Username, setUsername] = useState([]);
  const [Phone, setPhone] = useState([]);
  const [Email, setEmail] = useState([]);
  const [Website, setWebsite] = useState([]);
  const [Companyname, setCompanyname] = useState([]);

  const { id } = useParams();
  const navigate=useNavigate()

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    await axios
      .get(`https://665306ff813d78e6d6d6ee0c.mockapi.io/api/products/${id}`)
      .then((res) => {
        setName(res.data.name);
        setUsername(res.data.username);
        setPhone(res.data.phone);
        setEmail(res.data.email);
        setWebsite(res.data.website);
        setCompanyname(res.data.Companyname)
      })
      .catch((error) => console.log(error));
  };

  const update = async () => {
    await axios
      .put(`https://665306ff813d78e6d6d6ee0c.mockapi.io/api/products/${id}`,{
        name: Name,
        username: Username,
        email: Email,
        phone: Phone,
        website: Website
    })
      .then((res) => {
        setName(res.data.name);
        setUsername(res.data.username);
        setPhone(res.data.phone);
        setEmail(res.data.email);
        setWebsite(res.data.website);
        setCompanyname(res.data.Companyname)
      })
      .catch((error) => console.log(error));
      navigate('/products')
  };

  return (
    <div className="totaleditcontent">
    <div className="editcontent" >
      <p>
        Name{" "}
        <input
          type="text"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
      </p>
      <p>
        Username{" "}
        <input
          type="text"
          value={Username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </p>
      <p>
        Email{" "}
        <input
          type="text"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </p>
      <p>
        Phone{" "}
        <input
          type="text"
          value={Phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </p>
      <p>
        Website{" "}
        <input
          type="text"
          value={Website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </p>
      <p>
      Companyname{" "}
        <input
          type="text"
          value={Companyname}
          onChange={(e) => setCompanyname(e.target.value)}
        />
      </p>
      <p>
        <button className="btn btn-primary" onClick={()=>update()}>
          Update
        </button>
      </p>
    </div>
    </div>
  );
};

export default Edit;
