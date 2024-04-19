import React from "react";
import AuthContainer from "../../components/templates/AuthContainer";
import { login } from "../../assets/images";
import ActionLink from "../../components/ui/ActionLink";
import Form from "../../components/templates/Form";
import TextInput from "../../components/ui/Text-Input";
import Button from "../../components/ui/Button";

const Login = () => {
  return (
    <AuthContainer img={login}>
      <h2 className="auth-title"> Kirish</h2>
      <p className="auth-desc">
        Sizning hisobingiz yo’qmi? <ActionLink path={"/register"}>Ro’yxatdan o’tish</ActionLink>
      </p>
      <Form className={"auth-form-control"}>
        <TextInput placeholder="Email" />
        <TextInput placeholder="Parol" />
        <Button>Keyingi qadam</Button>
      </Form>
    </AuthContainer>
  );
};

export default Login;
