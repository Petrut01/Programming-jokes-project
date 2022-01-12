import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import CommentSection from "../Comments";
import New from "./Joke-new";


const Jokes = () => {
  const [loading , setLoading] = useState(true);
  const [joke, setJoke] = useState({setup: "", delivery : ""});
  const dispatch = useDispatch();
  const {deleteAllComments} = bindActionCreators(actionCreators, dispatch); 
  
  useEffect(() => {
    axios.get('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=twopart').then((result)=>{
      setJoke({setup: result.data.setup, delivery:result.data.delivery});
      setLoading(false);
    })
  }, []);

  function getJoke(){
    setLoading(true);
    axios.get('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=twopart').then((result)=>{
      setJoke({setup: result.data.setup, delivery:result.data.delivery});
      setLoading(false);
      
    })
  }

  return (
    <div className="Home">

     {loading ? <h4>Loading...</h4> : 
     <div className="Joke">
       <h3>{joke.setup}</h3> <br /> 
       <label> {joke.delivery}</label>
       </div>}
      <button className="JokeButton" onClick={() => {getJoke(); deleteAllComments();}} disabled={loading}>Get another joke!</button>
      <CommentSection/>
    </div>
  );
};

export default Jokes;