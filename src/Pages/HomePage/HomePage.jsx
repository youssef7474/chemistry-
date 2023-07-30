import React from 'react';
import Landing from '../../components/LandingPage/Landing';
import Description from '../../components/Description/Description';
import LastHome from '../../components/LastInHome/LastHome';

const HomePage = () => {
  return (
    <div className='min-h-[100v]' >
      <Landing></Landing>
      <Description></Description>
      <LastHome></LastHome>
    </div>
  );
}

export default HomePage;
