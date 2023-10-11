import React, {useState} from "react";
import axios from "axios";
import styles from "./auth.module.css";
import { Link, useNavigate } from "react-router-dom";


function Signup() {
    const navigate = useNavigate();
    let loginName = sessionStorage.getItem("username");
    let user_id = sessionStorage.getItem("id");


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const signup = (event) => {
        event.preventDefault()
        console.log(username, password)
        
        if(username === "") {
            alert("enter username");
        } else if (password === "") {
            alert("must enter password");
        } else {
            axios.post("http://localhost:4040/signup", { username, password }).then((res) => {
                if(res.data == "username already exists") {
                    alert(res.data)
                } else {
                    sessionStorage.setItem("username", res.data.username)
                    alert(`registration complete for: ${username}`)
                navigate('/')
            }
        }) .catch((err) => console.log(err))
    }
}
    
    return (
        <main className={styles.login_form}>
        <div className={styles.form_container}>
          <form className={styles.form} id="signup_form" onSubmit={signup}>
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
            className={styles.signup_btn}
            type="submit"
            value="Signup"
            />
          </form>
      </div>
        <nav>
            <Link to="/login">
                <button className={styles.question_btn}>
                Click here to Login
                </button>
            </Link>
        </nav>
      </main>
    )

};

export default Signup;