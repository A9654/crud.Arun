import axios from 'axios'; 
import React,{useState}from 'react';
import { useHistory } from 'react-router-dom';
  
 const AddUser=() =>{
   let history= useHistory();
     const[user,setUser]=useState({
         name:"",
         usernname:"",
         email:"",
         phone :"",

     });
     const {name,username,email,phone}=user;
     const onInputChange= e=>{
        setUser({...user,[e.target.name]:e.target.value});
    
        
     };
     const onSubmit =  async (e) => {
         e.preventDefault();
         await axios.post("http://localhost:3003/users",user);
         history.push("/");
     };
    return ( 
        <div className="container">
        <div className="w-75 mx-auto shadow p-6">
        <h2 className="text-center mb-4">Add A user</h2>
        <form onSubmit={e => onSubmit (e)}>
        <div className="form-group">
        <input
        type="text"
        className="form-control form-contro-lg"
        placeholder="Enter your Name"
        name="Name"
        value={name}
        onChange={e => onInputChange(e)}
        />
        </div>
        <div className="form-group">
        <input
        type="text"
        className="form-control form-contro-lg"
        placeholder="Enter your UserName"
        name="UserName"
        value={username}
        onChange={e => onInputChange(e)}
        />
        </div>
        
        <div className="form-group">
        <input
        type="text"
        className="form-control form-contro-lg"
        placeholder="Enter your E-mail Address"
        name="Email"
        value={email}
        onChange={e => onInputChange(e)}
        />
        </div>
        <div className="form-group">
        <input
        type="text"
        className="form-control form-contro-lg"
        placeholder="Enter your Phone Number "
        name="Phone"
        value={phone}
        onChange={e => onInputChange(e)}
        />
        </div>
        <button className="btn btn-primary btn-block">Add User</button>
        
        </form>
        </div>
        </div>
        
    );
};

export default AddUser; 
