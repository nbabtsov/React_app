import React, { useState } from "react";
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import Signup from "./Signup";


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Styling = {width:"20rem", background:"#FFFFFF", border:"none", padding:"0.5rem"};

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();

    }

    return (
        <div  className="Login">
            <header className="App-header">
                <p>Login</p>
            </header>
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="email" bsSize="large">
                    <FormControl
                        style={Styling}
                        placeholder='Email'
                        autoFocus
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    <FormControl
                        style={Styling}
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                </FormGroup>
                <Button block bsSize="large" disabled={!validateForm()} type="submit" >
                    Login
                </Button>
                <BrowserRouter>
                    <div style={{color: "white"}}>
                        Don't have an account?
                        <Link to="/Signup">Sign Up</Link>
                        <Route path="/Signup" component={Signup} />
                    </div>
                </BrowserRouter>

            </form>
        </div>
    );
}