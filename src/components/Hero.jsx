import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/main.css';

const heroData = [
  {
    id: 1,
    image: require('../images/img-hero1old.jpg'),
    title: 'THE PERFECT PARTNER FOR YOUR GROWING BUSINESS',
    description: 'Establish a partnership with Rising Horizon Associates to provide tailored training sessions on effective financial record-keeping practices.',
    link: '/about'
  },
  {
    id: 2,
    image: require('../images/img-hero2old.jpg'),
    title: 'START YOUR FUTURE FINANCIAL PLAN',
    description: 'Collaborate with financial advisors and institutions to create a financial planning framework that helps businessmen anticipate and manage economic fluctuations',
    link: '/about'
  },
  {
    id: 3,
    image: require('../images/img-hero3old.jpg'),
    title: 'ENJOY THE DIFFERENCE',
    description: 'Develop a comprehensive tax benefits guide in partnership with Rising Horizon Associates, outlining available incentives and deductions.',
    link: '/about'
  },
];

const AppHero = () => {
  return (
    <section>
      <Carousel>
        {heroData.map(hero => (
          <Carousel.Item key={hero.id}>
            <img
              id="herodes"
              className="d-block w-100"
              src={hero.image}
              alt={"Slide " + hero.id}
            />
            <Carousel.Caption>
              <h3 className='text'>{hero.title}</h3>
              <p className='text'>{hero.description}</p>
              <a id='btndes' className='btn' href={hero.link}>
                Learn More <FontAwesomeIcon icon={faChevronRight} />
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default AppHero;