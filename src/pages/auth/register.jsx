import React from "react";
import AuthContainer from "../../components/templates/AuthContainer";
import { register } from "../../assets/images";
import ActionLink from "../../components/ui/ActionLink";
import Form from "../../components/templates/Form";
import TextInput from "../../components/ui/Text-Input";
import Button from "../../components/ui/Button";

const Register = () => {
  return (
    <AuthContainer img={register}>
      <h2 className="auth-title">Ro’yxatdan o’tish</h2>
      <p className="auth-desc">
        Sizning hisobingiz bormi? <ActionLink path={"/login"}>Kirish</ActionLink>
      </p>
      <Form className={"auth-form-control"}>
        <TextInput placeholder="ismingiz" />
        <TextInput placeholder="Familyangiz" />
        <TextInput placeholder="Telefon raqam" />
        <TextInput placeholder="Email" />
        <TextInput placeholder="Parol" />
        <Button>Keyingi qadam</Button>
      </Form>
    </AuthContainer>
  );
};

export default Register;
