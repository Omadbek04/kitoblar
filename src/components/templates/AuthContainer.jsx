import Container from "./Container";

const AuthContainer = ({ img = "", children }) => {
  return (
    <div className=" auth-container">
      <Container>
        <div className="auth-inner">
          <div className="auth-cover-img">
            <img src={img} alt="auth-img" />
          </div>
          <div className="auth-form">{children}</div>
        </div>
      </Container>
    </div>
  );
};

export default AuthContainer;
