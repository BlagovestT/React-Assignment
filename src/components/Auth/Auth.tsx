import { AuthLogic } from "./authLogic";
import {
  AuthContainer,
  AuthCard,
  AuthTitle,
  AuthForm,
  AuthInput,
  AuthButton,
  ErrorMessage,
} from "./Auth.styles";

export const Auth: React.FC = () => {
  const { name, error, handleSubmit, handleNameChange } = AuthLogic();

  return (
    <AuthContainer>
      <AuthCard>
        <AuthTitle>Welcome to Yara</AuthTitle>
        <AuthForm onSubmit={handleSubmit}>
          <AuthInput
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
            autoFocus
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <AuthButton type="submit">Login</AuthButton>
        </AuthForm>
      </AuthCard>
    </AuthContainer>
  );
};
