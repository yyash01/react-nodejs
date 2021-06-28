import React , {useState,useEffect} from "react";
import Axios from 'axios';
import './App.css';

function App() {
  const [movieName , setMovieName] = useState("");
  const [review , setReview] = useState("");
  const [MovieList , setMovieList] = useState([]);


  function handleName(event) {
    setMovieName(event.target.value);
  }

  function handleReview(event) {
    setReview(event.target.value);
  }

  useEffect(()=>{
    Axios.get("http://localhost:3001/api/get").then((Response)=>{
        setMovieList(Response.data)
    });
  },[]);

  const submitReview = () => {
    Axios.post("http://localhost:3001/api/insert",{
      movieName: movieName , 
      movieReview: review
    }).then(() => {
      alert("successful insert");
    });
  };

  return (
    <div className="App">
      <h1>CRUD Application</h1>

      <div className="form">
        <label>MovieName</label>
        <input type="text" name="movieName" onChange={handleName}/>
        <label>Review</label>
        <input type="text" name="review" onChange={handleReview}/>
        <button onClick={submitReview}>Submit</button>
        {MovieList.map((val) => {
          return(<h2>MovieName: {val.MovieName}</h2>);
        })
        }
      </div> 
    </div>
  );
}

export default App;