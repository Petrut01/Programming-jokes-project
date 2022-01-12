import React from "react";
import Input from "../../components/Input";

const RegisterForm = () => {
  return (
    <>
    <h1>Sign up</h1>
    <form>
      
      <Input placeholder={"Username"} />
      <Input placeholder={"Email address"} />
      <Input placeholder={"Password"} type={"password"} />

      <button type="submit" id="LoginRegisterButton">Register</button>
    </form>
    </>
  );
};

export default RegisterForm;
