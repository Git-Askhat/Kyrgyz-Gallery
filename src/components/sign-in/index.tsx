import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import SignUp from '../sign-up/index';

import SvgLogo from '../../assets/svg/LogoColored';
import SvgGoogle from '../../assets/svg/Google';
import SvgFacebook from '../../assets/svg/Facebook';
import SvgClose from '../../assets/svg/CloseSign';

export default function SignIn(props: { isOpen: any; close: any }) {
  if (!props.isOpen) return null;

  const [isOpen, setOpen] = useState(false);
  const inputRef = useRef(null);

  const modalOpen = () => {
    setOpen(true);
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
          <ButtonGoogle>
            Sign in with <SvgGoogle className='Logo' />
          </ButtonGoogle>
          <ButtonFacebook>
            Sign in with <SvgFacebook className='Logo' />
          </ButtonFacebook>
        </Buttons>
        <InputName
          ref={inputRef}
          placeholder='Username or E-mail'
          // onMouseEnter={() => {
          //   inputRef.current.focus();
          // }}
        />
        <InputName type='password' ref={inputRef} placeholder='Password' />
        <SignButton>Sign In</SignButton>
        <Links>
          <ButtonForgot>Forgot password?</ButtonForgot>
          <ButtonSign onClick={modalOpen}>Sign up</ButtonSign>
        </Links>
      </Container>
    </Background>
    <SignUp isOpen={isOpen} close={() => setOpen(false)} />
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
  color: #0B1E43;
  cursor: pointer;
`;

const ButtonSign = styled(ButtonForgot)``
