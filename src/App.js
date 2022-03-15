import "./App.css";
import Card from "./Card";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect, } from "react";

const api = "http://www.omdbapi.com/?i=tt3896198&apikey=435dc4";

function App() {
  const [arr, setarr] = useState([]);
  const [search, setsearch] = useState('');

  const searchmovies = async (title) => {
    const response = await fetch(`${api}&s=${title}`);
    const data = await response.json();
    console.log(data);
    setarr(data.Search);
  };

  useEffect(() => {
    searchmovies("batman");
  }, []);

  const Wrap = styled.div`
    width: 100%;
    background-color: black;
  `;
  function finalfunction(e) {
    e.preventDefault();
    searchmovies(search);
    setsearch("");
    
  }
  const inp= (e) => {
    setsearch(e.target.value)
  }
 

  return (
    <>
      <Wrap>
        <div className="app">
          <div
            className="header"
            style={{ textAlign: "center", paddingTop: "30px" }}
          >
            <h1
              className="title"
              style={{ padding: "0px", margin: "0px", color: "red" }}
            >
              MovieWorld
            </h1>
          </div>

          <div className="inp-src">
            <form className="input-search" onSubmit={finalfunction}>
              <input
                onChange={inp}
                type="text"
                className="input"
                placeholder="Search for movies"
                value={search}
                id="search"
                ref={(input) => {input && input.focus()}}
                
                
                name="search"
                
              ></input>
              <button type="submit" className="button">
                <SearchIcon className="icon" />
              </button>
            </form>
          </div>

          <div className="movie-card">
            {arr.map((value,i) => {
              console.log(value)
              return(
                
                <Card key={i} value={value} />

              )
              
            })}
          </div>
        </div>
      </Wrap>
    </>
  );
}

export default App;
