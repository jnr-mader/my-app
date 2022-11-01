import React from 'react';
import styles from './style.module.scss';

const Trending = ({data}) => {
    const imgPath = "https://image.tmdb.org/t/p/original/"

    let trendingData = data.map((i)=> {
        return (
            <div key={i.id} className={styles.item}>
                <p>{i.name}</p>
                <img src={imgPath + i.poster_path} alt={i.name}/>
            </div>            
        )
    })

    return (
        <div>
            <h3>Trending TV shows</h3>
            <div className={styles.container}>            
                {trendingData}
            </div>
        </div>        
    )
}

export default Trending