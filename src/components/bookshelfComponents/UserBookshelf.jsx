import React from "react"
import { Link } from "react-router-dom";
import styles from "./bookshelf.module.css";


const UserBookshelf = () => {
    
    const username = sessionStorage.getItem("username")
    const id = sessionStorage.getItem("id")

    return (
        <div> 
            { username == null  ? (
                <Link to="/login">
                    <button className={styles.login_btn}>Login/Sign-up</button>
                </Link>
            ) : (  
           <div>
            <h1 className={styles.bookshelf_title}>Your Bookshelf</h1>
            <div className={styles.dropdown}>
                <label className={styles.dropdown_label}>Select a genre:</label>
                <select className={styles.dropdown_box}>
                    <option>All</option>
                    <option>Adventure Fiction</option>
                    <option>Arts & New Media</option>
                    <option>Biographies & Memoirs</option>
                    <option>Business Literature</option>
                    <option>Classic Literature</option>
                    <option>Classic Foreign Literature</option>
                    <option>Crime</option>
                    <option>Criticism</option>
                    <option>Detective Fiction</option>
                    <option>Fantasy</option>
                    <option>Health, Fitness, & Dieting</option>
                    <option>Historicl Fiction</option>
                    <option>History</option>
                    <option>Horror</option>
                    <option>Humor & Entertainment</option>
                    <option>Modern Literature</option>
                    <option>Mystery, Thriller, & Suspense</option>
                    <option>Nonfiction</option>
                    <option>Plays</option>
                    <option>Poetry</option>
                    <option>Psychology</option>
                    <option>Religion</option>
                    <option>Romance</option>
                    <option>Science & Philosophy</option>
                    <option>Science Fiction</option>
                    <option>Self Help</option>
                    <option>Short Stories</option>
                    <option>Spirituality</option>
                    <option>Sports</option>
                    <option>Travel</option>
                    <option>Other</option>
                </select>
            </div>
           </div>
                )
            }
        </div>
    )
}

export default UserBookshelf;