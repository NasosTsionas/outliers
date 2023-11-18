import React from 'react';
// import DateTimeDisplay from './DateTimeDisplay';
// import { useCountdown } from './hooks/useCountdown';
import { useEffect, useState } from 'react';
import BackgroundSlider from './bgSlideshow'


import image1 from '../images/countdown1.jpeg'
import image2 from '../images/countdown2.jpeg'
import image3 from '../images/countdown3.jpeg'
import image4 from '../images/countdown4.jpeg'
import image5 from '../images/countdown5.jpeg'
import image6 from '../images/countdown6.jpeg'
import image7 from '../images/countdown7.jpeg'
import image8 from '../images/countdown8.jpeg'

const Countdownpage = () => {
    // const xmasPlace = 'Thessaloniki';
    const xmasDate = new Date('2023.12.21');
  
    return (
      <div>
        <CountdownTimer targetDate={xmasDate}/>
        {/* <h5>..until next meetup in {xmasPlace} !</h5> */}

        <BackgroundSlider
            images={[image1, image2, image3, image4, image5, image6, image7, image8]}
            duration={5}
            transition={2}
        />
  {/* </div> */}
      </div>
    );
}
 
const useCountdown = (targetDate) => {
    const countDownDate = new Date(targetDate).getTime();
  
    const [countDown, setCountDown] = useState(
      countDownDate - new Date().getTime()
    );
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCountDown(countDownDate - new Date().getTime());
      }, 1000);
  
      return () => clearInterval(interval);
    }, [countDownDate]);
  
    return getReturnValues(countDown);
  };
  
  const getReturnValues = (countDown) => {
    // calculate time left
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  
    return [days, hours, minutes, seconds];
  };

  

const DateTimeDisplay = ({ value, type, isDanger }) => {
    return (
      <div className={isDanger ? 'countdown danger' : 'countdown'}>
        <p>{value}</p>
        <span>{type}</span>
      </div>
    );
  };

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>You have now found each other again!</span>
      <p>Please add a future trip.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <a
        href="https://tapasadhikary.com"
        target="_blank"
        rel="noopener noreferrer"
        className="countdown-link"
      >
        <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
      </a>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default Countdownpage;

// export default CountdownTimer;