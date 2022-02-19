import React from "react";
import styled from "styled-components";

interface Props {
  image: string;
  title: string;
  description: string;
}

const GenericCard = ({ image, title, description }: Props) => {
  return (
    <GenericCardWrapper>
      <ImageContent>
        <img src={image} alt="" />
      </ImageContent>
      <div className="card_content">
        <Title>{title}</Title>
        <Description>{description}</Description>
      </div>
    </GenericCardWrapper>
  );
};

export default GenericCard;

const GenericCardWrapper = styled.div`
  background: #c4c4c4;

  .card_content {
    padding: 13px;
  }
`;
const ImageContent = styled.div`
  img {
    width: 100%;
    height: 280px;
    object-fit: cover;
  }
`;
const Title = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  color: #000000;
  margin: 15px 10px;
`;
const Description = styled.div`
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: #000000;
`;