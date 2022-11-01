import React from 'react';
import styles from './style.module.scss';

const Pager = ({currentPage, totalPages, setCurrentPage}) => {
    function changePage(direction) {
        direction === "prev" ? setCurrentPage(prevState => prevState - 1) : setCurrentPage(prevState => prevState + 1)          
    }
    
    return (
        <div className={styles.pager}>
            <button id="prev" className={styles.btn} onClick={(e) => changePage("prev")} disabled={currentPage === 1 ? "disabled" : ""}>prev</button>
            {currentPage} of {totalPages}
            <button id="next" className={styles.btn} onClick={(e) => changePage("next")} disabled={currentPage === totalPages ? "disabled" : ""}>next</button>
        </div>
    )
}

export default Pager