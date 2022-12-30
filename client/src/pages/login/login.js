import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Container, Grow, Slide } from "@mui/material"

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
                     
                        <h3>Welcome to PC Mender</h3>
                        <h5>A Platform to Buy PC and PC Related Service. </h5>


                <Slide in direction="up">
                <div className="login">
                    <h3>Login</h3>
                    <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
                    <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
                    <div className="button" onClick={login}>Login</div>
                    <div>or</div>
                    <div>Create an Account</div>
                    <div className="button" onClick={() => navigate("/register")}>Register</div>
                </div>
                </Slide>


        </Container>

    )
}

export default Login