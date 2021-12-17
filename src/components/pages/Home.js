import React,{useState,useEffect} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

const Home = () =>{
    const [users,setUser]= useState([]); 
    useEffect(() => {
        loadUsers();
    },[]);
    const loadUsers = async() =>{
        const result =await axios.get("http://localhost:3003/users");
        console.log(result);
        setUser(result.data);
    };
    return(
        <div className="container"> 
        <div className="py-4">
            <h1>Home page</h1>
    <table class="table table-success table-striped">
     <caption>List of users</caption>
     <thead  >
     <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
  {
      users.map((user,index) =>(
          <tr>
          <th scope="row">{index + 1}
          </th><td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>
          <Link class="btn btn-primary mr-2">view</Link>
          <Link class="btn btn-outline-primary mr-2">Edit</Link>
          <Link class="btn btn-danger">Delete</Link>

          </td>
          </tr>

    ))
  }
  </tbody>
</table>
        
            </div>
        </div>
    );
};
export default Home;