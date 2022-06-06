import React, { useState } from 'react';
import styled from 'styled-components';

import SvgLogo from '../../assets/svg/LogoColored';
import SvgGoogle from '../../assets/svg/Google';
import SvgFacebook from '../../assets/svg/Facebook';
import SvgClose from '../../assets/svg/CloseSign';

import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

export default function SignIn(props: {
  isOpen: any;
  close: any;
  signUpModel: any;
}) {
  if (!props.isOpen) return null;

  const modalOpen = () => {
    props.close();
    props.signUpModel();
  };

  const initialValues = {
    email: '',
    password: '',
  };

  const [{ email, password }, setInputValues] = useState(initialValues);

  function resetValues() {
    setInputValues({ ...initialValues });
  }

  const handleChange = (e: any) => {
    setInputValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    console.log({ email, password });
    resetValues();
  };

  const [currUser, setCurrUser] = useState(null);

  const handleGoogle = () => {
    signInWithGoogle;

    // auth.onAuthStateChanged((user) => {
    //   setCurrUser(user);
    // });
  };

  return (
    <>
      <Background>
        <Container>
          <SvgClose className='Close' onClick={props.close} />
          <Logo>
            <SvgLogo />
          </Logo>
          <Buttons>
            <ButtonGoogle onClick={signInWithGoogle}>
              Sign in with <SvgGoogle className='Logo' />
            </ButtonGoogle>
            <ButtonFacebook>
              Sign in with <SvgFacebook className='Logo' />
            </ButtonFacebook>
          </Buttons>
          <form onSubmit={handleSubmit}>
            <InputName
              type='email'
              value={email}
              name='email'
              required
              onChange={handleChange}
              placeholder='E-mail*'
            />
            <InputName
              type='password'
              value={password}
              name='password'
              onChange={handleChange}
              placeholder='Password*'
            />
            <SignButton type='submit' onSubmit={handleSubmit}>
              Sign In
            </SignButton>
            <Links>
              <ButtonForgot>Forgot password?</ButtonForgot>
              <ButtonSign onClick={modalOpen}>Sign up</ButtonSign>
            </Links>
          </form>
        </Container>
      </Background>
    </>
  );
}

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  top: 0;
  left: 0;
`;

const Container = styled.div`
  position: absolute;
  width: 600px;
  height: 600px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  .Close {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 3rem;
    height: 3rem;
    padding: 5px;
    cursor: pointer;
  }
`;

const Logo = styled(SvgLogo)`
  display: flex;
  align-items: center;
  margin-top: 22px;
`;

const Buttons = styled.div`
  width: 450px;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const ButtonGoogle = styled.button`
  width: 220px;
  height: 45px;
  border: 1px solid black;
  border-radius: 30px;
  background: white;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  .Logo {
    margin-left: 10px;
  }
`;

const ButtonFacebook = styled(ButtonGoogle)`
  background: #2c5699;
  color: white;
`;

const InputName = styled.input`
  width: 430px;
  height: 56px;
  background: transparent;
  border: 1px solid #6e7c96;
  border-radius: 2px;
  font-size: 18px;
  padding: 0 10px;
  display: flex;
  margin-top: 30px;
`;

const SignButton = styled.button`
  width: 440px;
  height: 56px;
  border-radius: 2px;
  background-color: #202638;
  border: none;
  margin-top: 30px;
  font-size: 18px;
  color: white;
  cursor: pointer;
`;

const Links = styled.div`
  width: 450px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 33px;
`;

const ButtonForgot = styled.button`
  background: transparent;
  border: none;
  padding: 5px;
  font-size: 18px;
  color: #0b1e43;
  cursor: pointer;
`;

const ButtonSign = styled(ButtonForgot)``;
