import React from 'react';
import styled from 'styled-components';
import GenericCard from '../genericCard/index';
const discoveryData = [
  {
    image: 'https://www.culturepartnership.eu/upload/news/5901f2092b739.png',
    title: 'Five Different Approaches',
    description:
      'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.',
  },
  {
    image: 'https://www.culturepartnership.eu/upload/news/5901f2092b739.png',
    title: 'Five Different Approaches',
    description:
      'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.',
  },
  {
    image: 'https://www.culturepartnership.eu/upload/news/5901f2092b739.png',
    title: 'Five Different Approaches',
    description:
      'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.',
  },
  {
    image: 'https://www.culturepartnership.eu/upload/news/5901f2092b739.png',
    title: 'Five Different Approaches',
    description:
      'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.',
  },
  {
    image: 'https://www.culturepartnership.eu/upload/news/5901f2092b739.png',
    title: 'Five Different Approaches',
    description:
      'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.',
  },
];

export default function DiscoverComponent() {
  return (
    <DiscoverComponentWrapper>
      <DiscoverContent>
        {discoveryData.map((item, key) => {
          return (
            <GenericCard
              image={item.image}
              description={item.description}
              title={item.title}
            />
          );
        })}
      </DiscoverContent>
    </DiscoverComponentWrapper>
  );
}

const DiscoverComponentWrapper = styled.div`
  width: 96%;
  margin: 0 auto;
  padding-top: 150px;
`;
const DiscoverContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 20px;
`;
