import {useRef} from 'react';
import styles from './style.module.scss';

const Search = ({onInput, inputType}) => {
    const searchRef = useRef(null);
        
    function sumbitQuery () {
        onInput(searchRef.current.value);
    }
    return (
        <div>
            <h3>{inputType === "search" ? "Search section" : "Submit api key"}</h3>
            <input ref={searchRef} className={styles.field} />
            <button className={styles.btn} onClick={sumbitQuery}>{inputType === "search" ? "Search" : "Submit"}</button>
        </div>
    )
}

export default Search;
