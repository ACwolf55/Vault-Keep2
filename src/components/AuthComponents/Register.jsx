import React, {useState} from "react";
import axios from "axios";
import styles from "./auth.module.css";
import { Link, useNavigate } from "react-router-dom";


function Register() {
    const navigate = useNavigate();
    let loginName = sessionStorage.getItem("username");
    let id = sessionStorage.getItem("id");


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const register = (event) => {
        event.preventDefault()
        console.log(username, password)
        
        if(username === "") {
            alert("enter username");
        } else if (password === "") {
            alert("must enter password");
        } else {
            axios.post("http://localhost:4004/register", { username, password }).then((res) => {
                if(res.data == "username already exists") {
                    alert(res.data)
                } else {
                    sessionStorage.setItem("username", res.data.username)
                    alert(`registration complete! for: ${username}`)
                navigate('/')
            }
        }) .catch((err) => console.log(err))
    }
}
    
    return (
        <main className={styles.login_form}>
        <div className={styles.form_container}>
          <form className={styles.form} id="register_form" onSubmit={register}>
            <h1 className={styles.welcome}>Welcome!</h1>
            <input 
            className={styles.form_input} 
            placeholder="Username" 
            type="text" 
            name="username"
            onChange={(e) => setUsername(e.target.value)}/>
            <input 
            className={styles.form_input} 
            placeholder="Password" 
            type="password" 
            name="password"
            onChange={(e) => setPassword(e.target.value)}/>
            <input 
            className={styles.register_btn}
            type="submit"
            value="Register"
            />
          </form>
      </div>
        <nav>
            <Link to="/login">
                <button className={styles.question_btn}>
                Click here to login
                </button>
            </Link>
        </nav>
      </main>
    )

};

export default Register;