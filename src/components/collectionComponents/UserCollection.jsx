import styles from "./userCollection.module.css";

const UserCollection = () => {
    return (
        <div>
            <h1 className={styles.collection_title}>Your Collection</h1>
            <div className={styles.dropdown}>
                <label className={styles.dropdown_label}>Select a category:</label>
                <select className={styles.dropdown_box}>
                    <option>All</option>
                </select>
            </div>
        </div>
    )
}

export default UserCollection;