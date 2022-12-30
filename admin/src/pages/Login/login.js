import React, {useState} from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Container} from "@mui/material";
const Login = ({ setLoginUser}) => {

    const navigate = useNavigate()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:5000/posts/login", user)
        .then(res => {
            alert(res.data.message)
            console.log(res.data);
            setLoginUser(res.data.user);

            navigate("/")
        })
    }

    return (
        <Container align="center" sx={{marginTop:"12px"}}>
        <div className="login">
            <h1>Admin Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login</div>
            {/* <div>or</div>
            <div className="button" onClick={() => navigate("/register")}>Register</div> */}
        </div>
        </Container>
            
    )
}

export default Login