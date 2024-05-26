import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Components/NavBar.css';

const NavBar = () => {
    const navigate=useNavigate()
    return (
//         <div className='navbarcontent nav'>
//         <nav className="navbar navbar-expand-lg" >
//   <div className="container">
//     <Link className="navbar-brand " href="#">Axios-Task</Link>
//     <div className=" navbar-collapse" id="navbarNav">
//       <ul className="navbar-nav">
//         <li className="nav-item ">
//           <Link to='/'> Home </Link>
//         </li>
//         <li className="nav-item">
//           <Link to='/products'> Products </Link>
//         </li>
        
//       </ul>
//     </div>
//   </div>
// </nav>
//         </div>

  <div className='navbarcontent'>
    <nav className="navbar navbar-expand-lg bg-light ">
<div className="container-fluid">
  <div className='header'>
  <h1>Axios Task</h1>
  </div>

  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
    <li className="nav-item home NavBar">
      <Link to='/'>Home</Link>
      </li>
      <li className="nav-item NavBar">
      <Link to='/products'>products</Link>
      </li>
    </ul>
  </div>
</div>
</nav>
  </div>


    );
};

export default NavBar;