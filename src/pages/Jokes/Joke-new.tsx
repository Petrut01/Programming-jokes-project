import axios from "axios";
import React, {useState, useEffect} from "react";

interface newProps{
    jok: string;
}

const New = ({jok}: newProps) =>{

    const [loading , setLoading] = useState(true);
    const [joke, setJoke] = useState({joke: ""});


    useEffect(()=>{
        console.log('ok');
        axios.get('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=single').then((result)=>{
      setJoke({joke: result.data.joke});
      setLoading(false);
    })
    }, [jok]
    )

    return (<p>{joke.joke}</p>);
}

export default New;