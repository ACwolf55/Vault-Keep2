import React from "react"
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
    
    const username = sessionStorage.getItem("username")
    const id = sessionStorage.getItem("id")


    return (
        <header className={styles.header}>
            <nav>
                {
                   username === "" ? (
                       
                <Link to="/login">
                    <button className={styles.login_btn}>Login/Sign-up</button>
                </Link>
                       ):(
                        <div className={styles.logged_in_container}>
                       <p className={styles.logged_in}>Hi, {username}!</p>
                       <button className={styles.logout_btn}>Logout</button>
                       </div>
                   )
                }
            </nav>
            <Link className={styles.site_name_link} to="/homeScreen">
                Vault Keep
            </Link>
            <nav>
                <Link className={styles.header_btns} to="">
                    <button className={styles.home_btn}>Home</button>
                </Link>
                <Link className={styles.header_btns} to="/collection">
                    <button className={styles.collection_btn}>Collection</button>
                </Link>  
                <Link className={styles.header_btns} to="/bookshelf"> 
                    <button className={styles.bookshelf_btn}>Bookshelf</button>
                </Link> 
            </nav>
        </header>
    )
}

export default Header;