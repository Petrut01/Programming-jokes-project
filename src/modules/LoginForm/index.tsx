import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { bindActionCreators } from "redux";
import Input from "../../components/Input";
import { actionCreators } from "../../state";

const LoginForm = () => {

    const dispatch = useDispatch();
    const { loginUser } =  bindActionCreators(actionCreators, dispatch);

    const [inputValue, setInputValue] = useState('');

    function handleSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        event.preventDefault();
        if(inputValue !== ''){
            loginUser(inputValue);
        }
        else{
            alert("Your name can't be empty!");
        }
    }

  return (
    <form>
      <h2>Login</h2>
      <label> Username</label>
      <input placeholder={'Username'} value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      <Input placeholder={"Password"} type={"password"} />

      <button type="submit" onClick={handleSubmit} id="LoginRegisterButton"><Link to="/jokes">Login</Link></button>
    </form>
  );
};

export default LoginForm;
