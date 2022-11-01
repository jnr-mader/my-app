import React from 'react';
import styles from './style.module.scss';

const Results = ({data}) => {
    const imgPath = "https://image.tmdb.org/t/p/original/"
    
    let returnedData = data.map((i)=> {
        let imgSrc = i.poster_path === null ? "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" : imgPath + i.poster_path

        return <div key={i.id} className={styles.item}>
            <p>{i.original_title} <span>{i.vote_average}</span></p>
            <img src={imgSrc} alt={i.name}/>          
        </div>
    })

    return (
        <div className={styles.container}>{returnedData}</div>
    )
}

export default Results