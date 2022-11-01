import React from 'react';
import styles from './style.module.scss';

const Genres = ({data, clickHandler}) => {  
    let genreData = data.map((i)=> {
        //let clickHandler = () => console.log(i.id)
        return <p key={i.id} className={styles.item} onClick={(e) => clickHandler(i.id)}>
            {i.name} <span>Genre id:{i.id}</span>
        </p>
    })
    return (
        <div>
            <h3>Filter search by genre</h3>
            <div className={styles.container}>{genreData}</div>
        </div>
    )
}

export default Genres