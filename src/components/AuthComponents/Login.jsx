import axios from "axios";
import styles from "./auth.module.css";
import { Link } from "react-router-dom";


const Login = () => {
    return (
      <main className={styles.login_form}>
        <div className={styles.form_container}>
          <form className={styles.form}>
            <h1 className={styles.welcome}>Welcome!</h1>
            <input className={styles.form_input} placeholder="Username"/>
            <input className={styles.form_input} placeholder="Password"/>
            <button className={styles.login_btn}>Login</button>
          </form>
      </div>
        <nav>
            <Link to="/register">
                <button className={styles.question_btn}>
                Click here to register
                </button>
            </Link>
        </nav>
      </main>
    )
}

export default Login;