import React, { useState } from 'react';
import styled from 'styled-components';

import SvgLogo from '../../assets/svg/LogoColored';
import SvgGoogle from '../../assets/svg/Google';
import SvgFacebook from '../../assets/svg/Facebook';
import SvgClose from '../../assets/svg/CloseSign';

export default function SignUp(props: {
  isOpen2: any;
  close2: any;
  signInModel: any;
}) {
  if (!props.isOpen2) return null;

  const modalOpen = () => {
    props.close2();
    props.signInModel();
  };

  const initialValues = {
    fullName: '',
    email: '',
    password: '',
  };

  const [{ fullName, email, password }, setInputValues] =
    useState(initialValues);

  function resetValues() {
    setInputValues({ ...initialValues });
  }

  const handleChange = (e: any) => {
    setInputValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log({ fullName, email, password });
    resetValues();
  };

  return (
    <Background>
      <Container>
        <SvgClose className='Close' onClick={props.close2} />
        <Logo>
          <SvgLogo />
        </Logo>
        <Buttons>
          <ButtonGoogle>
            Join in with <SvgGoogle className='Logo' />
          </ButtonGoogle>
          <ButtonFacebook>
            Join in with <SvgFacebook className='Logo' />
          </ButtonFacebook>
        </Buttons>
        <Or>
          <hr />
          OR
          <hr />
        </Or>
        <form action='' onSubmit={handleSubmit}>
          <InputName
            type='text'
            name='fullName'
            value={fullName}
            onChange={handleChange}
            placeholder='Full name'
          />
          <InputEmail
            type='text'
            name='email'
            value={email}
            onChange={handleChange}
            placeholder='E-mail'
          />
          <InputPass
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            placeholder='Password'
          />
          <SignButton onSubmit={handleSubmit}>Sign Up</SignButton>
          <Links>
            <span>Have an account?</span>
            <ButtonSign onClick={modalOpen}>Sign in</ButtonSign>
          </Links>
        </form>
      </Container>
    </Background>
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
  height: 622px;
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

const Or = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  width: 450px;

  hr {
    width: 200px;
    border: 1px solid #000000;
  }
`;

const Buttons = styled.div`
  width: 450px;
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
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
  margin-top: 21px;
`;

const InputEmail = styled(InputName)``;

const InputPass = styled(InputName)``;

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
  width: 216px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
`;

const ButtonSign = styled.button`
  background: transparent;
  border: none;
  padding: 5px;
  font-size: 18px;
  color: #0b1e43;
  cursor: pointer;
`;
