import styles from "./homeScreen.module.css";


const NewEntryForms = () => {
    return (
        <div className={styles.form_container}>
        <form>
            <div className={styles.quoteForm}>
                <h1 className={styles.form_title}>Add to your quote collection!</h1>
                <div>
                    <h4 className={styles.input_title}>Quote:</h4>
                    <input name="quote" type="text" className={styles.entry_box}/>
                </div>
                <div>
                    <h4 className={styles.input_title}>Name of the author/writer:</h4>
                    <input name="author" type="text" className={styles.entry_box}/>
                </div>
                <div>
                    <h4 className={styles.input_title}>Title of book/article:</h4>
                    <input name="article_title" type="text" className={styles.entry_box}/>
                </div>
                <div>
                    <h4 className={styles.input_title}>Category:</h4>
                    <input name="article_title" type="text" className={styles.entry_box}/>
                </div>
                <button className={styles.submit_btn}>Add to collection</button>
            </div>
        </form>
        <form>
        <div className={styles.bookForm}>
            <h1 className={styles.form_title}>Add to your bookshelf!</h1>
            <div>
                <h4 className={styles.input_title}>Title of Book/Article:</h4>
                <input name="book/article" type="text" className={styles.entry_box}/>
            </div>
            <div>
                <h4 className={styles.input_title}>Name of the author/writer:</h4>
                <input name="author" type="text" className={styles.entry_box}/>
            </div>
            <div>
                <h4 className={styles.input_title}>Genre:</h4>
                <select name="article_title" type="text" className={styles.entry_box}>
                    <option></option>
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
            <button className={styles.submit_btn}>Add to bookshelf</button>
        </div>
    </form>
    </div>
    )
}

export default NewEntryForms;