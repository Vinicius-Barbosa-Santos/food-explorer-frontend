// Components
import { Head } from "../../components/Head";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";

// Router
import { Link } from "react-router-dom";

// Styles
import * as C from "./styles";

// Assets
import logoImg from "../../assets/logo-main.svg";

export const SignIn = () => {
  return (
    <C.Container>
      <Head title="Login" />

      <C.Content>
        <C.LogoImage>
          <img src={logoImg} alt="Logo Food-Explorer" />
        </C.LogoImage>

        <C.Form>
          <C.FormContent>
            <header>
              <h2>Faça login</h2>
            </header>

            <Input>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Exemplo: exemplo@exemplo.com.br"
              />
            </Input>

            <Input>
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="No mínimo 6 caracteres"
              />
            </Input>

            <Button>
              <ButtonText title={"Entrar"} />
            </Button>

            <footer>
              <Link to={"/"}>Crie uma conta</Link>
            </footer>
          </C.FormContent>
        </C.Form>
      </C.Content>
    </C.Container>
  );
};
