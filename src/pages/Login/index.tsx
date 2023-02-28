import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import LOGO_IMG from '../../assets/Logo.svg';
import { Logo } from '../../global';
import { UserLogin } from '../../interfaces/User';
import { setUser } from '../../redux/User.store';
import Api from '../../services/api/Api';
import {
  Button, Form, LoginContainer, LoginImageBox,
} from './styles';

export default function Login() {
  const [userData, setUserData] = useState<UserLogin>({
    username: '',
    password: '',
  });
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const res = Api.login();
    dispatch(setUser(res));
  };
  return (
    <LoginContainer>
      <Logo src={LOGO_IMG} alt="logo" />
      <div>
        <Form>
          <label htmlFor="username">
            Usuário:
            <input
              type="text"
              name="username"
              placeholder="JohnDoe"
              value={userData.username}
              onChange={handleChange}
              id="username"
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              type="password"
              name="password"
              placeholder="123567"
              value={userData.password}
              onChange={handleChange}
              id="password"
            />
          </label>
          <Button type="button" onClick={handleSubmit}>
            Entrar
          </Button>
        </Form>
      </div>
      <LoginImageBox>
        { /* eslint-disable-next-line global-require */ }
        <img src={require('../../assets/casal-exercitando.png')} alt="" />
      </LoginImageBox>
    </LoginContainer>
  );
}
