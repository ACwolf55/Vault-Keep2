import React from "react"
import { Link } from "react-router-dom";
import styles from "./userCollection.module.css";
import { useState } from "react";

const UserCollection = () => {

    const username = sessionStorage.getItem("username");
    // const id = sessionStorage.getItem("id");

    // const [collection, setCollection] = useState('');

    
    return (
        <div>
            { username == null  ? (
                <div className={styles.login_container}>
                    <h1 className={styles.no_user}>No user logged in. If you'd like to view your Collection, please click below to Login or Sign-up</h1>
                    <Link to="/login">
                        <button className={styles.login_btn}>Login/Sign-Up</button>
                    </Link>
                </div>
            ) : ( 
            <div>
                <h1 className={styles.collection_title}>Your Collection</h1>
                <div className={styles.dropdown}>
                <label className={styles.dropdown_label}>Select a category:</label>
                <select className={styles.dropdown_box}>
                    <option>All</option>
                    <option></option>
                </select>
                </div>
            </div>
              )
            }
        </div>
    )
}

export default UserCollection;