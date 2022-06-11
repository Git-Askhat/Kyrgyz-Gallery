import architecture from '../../assets/images/carousel/architecture.jpg';
import design from '../../assets/images/carousel/design.jpg';
import historical from '../../assets/images/carousel/historical.jpg';
import home from '../../assets/images/carousel/home.jpg';
import nature from '../../assets/images/carousel/nature.jpg';
import city from '../../assets/images/carousel/city.jpg';
import travel from '../../assets/images/carousel/travel.jpg';
import winter from '../../assets/images/carousel/winter.jpg';
import { useTranslation } from 'react-i18next';

// interface DataInterface {
//     title?: string,
//     img?: any,
//     link?: string,
// }

export const carouselData = [
    {
        title: `Architecture`,
        img: architecture,
        link: '/chuy'
    },
    {
        title: 'Design',
        img: design,
        link: '/design'
    },
    {
        title: 'Winter',
        img: winter,
        link: '/winter'
    },
    {
        title: 'Home',
        img: home,
    },
    {
        title: 'Nature',
        img: nature,
    },
    {
        title: 'Historical',
        img: historical,
    },
    {
        title: 'City',
        img: city,
    },
    {
        title: 'Travel',
        img: travel,
    },
    
]