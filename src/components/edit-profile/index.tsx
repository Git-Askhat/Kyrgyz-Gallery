import React from 'react';
import styled from 'styled-components';
import ProfileImg from '../../assets/images/profile/Profile.jpg';
import SvgPen from '../../assets/svg/Pen'

export default function EditProfileComponent() {
  return (
    <Container>
      <ProfileContainer>
        <div></div>
        <form className='input-form'>
          <ProfImg>
              {/* <SvgEditProfile /> */}
            <Profile src={ProfileImg} className="svg-prof"/>
            <SvgPen className="svg-pen"/>
          </ProfImg>
          <StyledInput name='name' type='text' placeholder='Your name*' />
          <StyledInput name='surname' type='text' placeholder='Your surname*' />
          <StyledInput name='email' type='email' placeholder='Your e-mail*' />
          <StyledInput
            name='pay-pal'
            placeholder='PayPal e-mail for donation'
          />
          <StyledInput name='website' type='text' placeholder='Website' />
          <StyledInput name='location' type='text' placeholder='Location' />
          <StyledInput name='instagram' type='text' placeholder='Instagram' />
          <StyledInput
            name='telegram'
            type='text'
            placeholder='Telegram link'
          />
          <PwdButton>Change Password</PwdButton>
          <EditButton>Edit</EditButton>
        </form>
        <div></div>
      </ProfileContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const ProfileContainer = styled.div`
  width: 70%;
  height: 1100px;
  margin: 66px 0;
  padding: 50px 0;
  border: 1px solid #000000;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;

  .input-form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const ProfImg = styled.div`
    /* margin: 50px 0; */

    .svg-prof {
        
    }

    .svg-pen {
        position: absolute;
        margin-left: -230px;
        margin-top: 195px;
    }
`

const StyledInput = styled.input`
  width: 100%;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 2px;
  padding: 16px;

  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  display: flex;
  align-items: center;
`;

const PwdButton = styled.button`
  padding: 10px 0;
  width: 300px;
  background: #a20000;
  border-radius: 2px;
  border: none;
  cursor: pointer;

  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  display: flex;
  align-items: center;
  justify-content: center;
  color: #fefefe;
`;

const EditButton = styled(PwdButton)`
  width: 100%;
  padding: 18px 0;
  background: #202638;
`;

const Profile = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-size: cover;
  object-fit: cover;
  z-index: 100;
  padding: 0;
  margin-top: 0;
`;
