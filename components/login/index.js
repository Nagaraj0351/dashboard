import styles from "../../styles/Login.module.css";
import Input from "../../components/elements/Input";
import Button from "../../components/elements/Button";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setAuthState } from "../../slices/authSlice";

const Error = styled.div`
  color: red;
  font-size: 14px;
`;

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [fieldValues, setFieldValues] = useState({
    userName: "",
    password: "",
  });
  const [showError, setShowError] = useState(false);

  const handleOnChange = (e) => {
    setFieldValues({
      ...fieldValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    let userName = "admin";
    let password = "admin";

    if (
      fieldValues.userName === userName &&
      fieldValues.password === password
    ) {
      dispatch(setAuthState(true));
      router.push("/dashboard");
    } else {
      setShowError(true);
    }
  };

  return (
    <form className={styles.form}>
      <h1 className={styles.heading}>Login</h1>
      {showError && <Error>User name and password is not matching</Error>}
      <Input label={"User Name"} name={"userName"} onChange={handleOnChange} />
      <Input label={"Password"} name={"password"} onChange={handleOnChange} />
      <Button text={"Login"} onClick={handleSubmit} />
    </form>
  );
};

export default Login;
