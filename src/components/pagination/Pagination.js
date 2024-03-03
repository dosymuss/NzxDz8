import styles from "./Pagination.module.css"

const Pagination = ( {handleNext, page, handlePrev}) => {
    return (
        <div className={styles.main}>
        <div className={styles.pagWrap}>
            <p className={styles.btn} onClick={handlePrev}>Prev</p>
            <p className={styles.pagText}>{page}</p>
            <p className={styles.btn} onClick={handleNext}>Next</p>
        </div>

        </div>
    );
};

export default Pagination;