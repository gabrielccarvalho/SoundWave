import React from 'react'
import styled from 'styled-components'
import TimeBox from './TimeBox';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 3rem;

  @media (max-width: 414px) {
    flex-direction: row;
    row-gap: 1rem;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`


const Countdown = () => {
  const [days, setDays] = React.useState(0);
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);

  const deadline = "May, 5, 2023";

  const getTime = (deadline: string) => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  }

  React.useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <TimeBox time={days} und='Days' />
      <TimeBox time={hours} und='Hours' />
      <TimeBox time={minutes} und='Minutes' />
      <TimeBox time={seconds} und='Seconds' />
    </Container>
  )
}

export default Countdown
