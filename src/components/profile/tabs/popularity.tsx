import React, { useState } from 'react';
import styled from 'styled-components';

interface popularityType {
  popularity: boolean;
}

export default function Popularity() {
  const [popularity, setPopularity] = useState(1);
  return (
    <Container popularity={popularity === 1}>
      <div className='buttons-wrapper'>
        <div>
          <PopularRecent popularity={popularity === 1} onClick={() => setPopularity(1)}>Popular</PopularRecent>
        </div>
        <div>
          <PopularRecent popularity={popularity === 2} onClick={() => setPopularity(2)}>Recent</PopularRecent>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div<popularityType>`
  display: flex;
  padding: 30px 0;

  .buttons-wrapper {
    display: grid;
    grid-template-columns: ${(p) => p.popularity ? " 5fr 2fr" : " 2fr 5fr"};
  }
`;

const PopularRecent = styled.button<popularityType>`
  width: 96%;
  border: none;
  background: transparent;
  cursor: pointer;
  border-bottom: ${(p) => (p.popularity ? '4px solid #000' : '2px solid #000')};

  font-family: 'Quicksand' 'san-serif';
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 30px;
`;

