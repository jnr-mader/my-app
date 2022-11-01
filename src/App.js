import React, { useState, useEffect } from "react";
import './App.css';
import Genres from "./components/genres";
import Pager from "./components/pager";
import Results from "./components/results";
import Search from "./components/search";
import Trending from "./components/trending";
import Error from "./components/error";

const App = () => {

  const [apiKey, setApiKey] = useState(process.env.REACT_APP_API_KEY);
  const [searchInput, setSearchInput] = useState();
  const [searchData, setSearchData] = useState([]);
  const [searchDataCurrentPages, setSearchCurrentDataPages] = useState(1);
  const [searchDataTotalPages, setSearchDataTotalPages] = useState();
  const [trendingTvData, setTrendingTvData] = useState([]);
  const [genreData, setGenreData] = useState([]);
  const [showError, setShowError] = useState(false)

  // general search
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}search/multi?api_key=${apiKey}&query=${searchInput}&page=${searchDataCurrentPages}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        if(res.status === 401) {
          setShowError(true)
        } 
      })
      .then((data) => {
        setSearchData(data.results)
        setSearchCurrentDataPages(data.page)
        setSearchDataTotalPages(data.total_pages)
      });
  },[apiKey, searchInput, searchDataCurrentPages]);

  // trending tv shows
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}trending/tv/week?api_key=${apiKey}&query=${searchInput}&page=${searchDataCurrentPages}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      if(res.status === 401) {
        setShowError(true)
      } 
    })
      .then((data) => {
        setTrendingTvData(data.results)
      });
  }, [apiKey]);

  // get genres
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}genre/movie/list?api_key=${apiKey}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      if(res.status === 401) {
        setShowError(true)
      } 
    })
      .then((data) => {
        setGenreData(data.genres)
      });
  }, [apiKey]);

  // filter results by genres
  const genreFilter = (e) => {
    let filteredData = searchData.filter((i) => {
      if (i.genre_ids.includes(e)) {
        return i
      }  
    })
    setSearchData(filteredData)
  }

  return (
    <div className="App">
      <Search onInput={setApiKey} inputType="api" />
      {showError && <Error hide={setShowError}/>}
      <div className="app-container">
        <Trending data={trendingTvData} />
        <div>
          <Search onInput={setSearchInput} inputType="search" />
          <Genres data={genreData} clickHandler={genreFilter}/>
          {searchInput && <p>Results for {searchInput}</p>}
          {searchInput && <Results data={searchData} />}
          {searchInput && <Pager currentPage={searchDataCurrentPages} totalPages={searchDataTotalPages} setCurrentPage={setSearchCurrentDataPages} />}
        </div>
      </div>            
    </div>
  );
}

export default App;
