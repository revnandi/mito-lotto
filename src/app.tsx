import { useState, useEffect } from 'preact/hooks';
import { Fragment } from 'preact/compat';

export type Hits = {
  [key: number]: number;
};

import CheckBox from './components/checkBox';
import CustomRangeSlider from './components/rangeSlider';
import Container from './components/container';
import Header from './components/header';
import Logo from './components/logo';
import Main from './components/main';
import Matches from './components/matches';
import Numbers from './components/numbers';
import ResultsBox from './components/resultsBox';
import SingleNumber from './components/singleNumber';

export const App = () => {
  const [isPlayable, setisPlayable] = useState<boolean>(true);
  const [numbers, setNumbers] = useState<number[]>([]);
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [ticketCount, setTicketCount] = useState<number>(0);
  const [hits, setHits] = useState<Hits>({ 2: 0, 3: 0, 4: 0, 5: 0 });
  const [moneySpent, setMoneySpent] = useState<number>(0);
  const [yearsPlaying, setYearsPlaying] = useState<number>(0);
  const [speed, setSpeed] = useState(1000);
  const [isRandom, setisRandom] = useState<boolean>(false);

  const handleCheckboxChange = (value: boolean) => {
    setisRandom(value);
  };

  const generateSecureRandomNumber = () => {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0] % 90 + 1; // modulo % 90 operation returns a number from 0 and 89 so we need to add 1 to go from 0 to 90
  };

  const handleSpeedValueChange = (value: number)  => {
    setSpeed(value);
  };

  const generateFiveUniqueNumbers = () => {
    const winningNumbers: number[] = [];
    while (winningNumbers.length < 5) {
      const newNumber = generateSecureRandomNumber();
      if (!winningNumbers.includes(newNumber)) {
        winningNumbers.push(newNumber);
      }
    }
    return winningNumbers;
  };

  const stopPlaying = () => {
    setisPlayable(false);
  };

  useEffect(() => {
    setSelectedNumbers(generateFiveUniqueNumbers);
  }, [isRandom]);

  useEffect(() => {
    if (!isPlayable) return;

    const interval = setInterval(() => {
      if (isRandom) setSelectedNumbers(generateFiveUniqueNumbers());

      const hitCount = selectedNumbers.filter(n => numbers.includes(n)).length;

      setTicketCount(ticketCount + 1);
      setMoneySpent(moneySpent + 300);
      setYearsPlaying(Math.floor(ticketCount / 52));
      setNumbers(generateFiveUniqueNumbers());

      if (hitCount >= 2) {
        setHits((prevHits) => ({
          ...prevHits,
          [hitCount]: prevHits[hitCount] + 1,
        }));

        if(hitCount === 5) {
          stopPlaying();
        };
      }
    }, speed);
    return () => clearInterval(interval);
  }, [isPlayable, numbers, selectedNumbers, hits, ticketCount, moneySpent, speed]);

  return (
    <Fragment>
      <Header>
        <Logo/>
      </Header>
      <Main>
        <Container>
          <h2>Result</h2>
          <ResultsBox
            numberOfTickets={ ticketCount }
            yearsSpent={ yearsPlaying }
            costOfTickets={ moneySpent }
          />
          <Matches hits={ hits }/>
          <Numbers label="Winning numbers:">
            {
              numbers.length > 0 ? (
                numbers.map(num => {
                  return <SingleNumber key={num} value={num} />;
                })
              ) : (
                [0, 0, 0, 0, 0].map((num, index) => {
                  return <SingleNumber key={index} value={num} />;
                })
              )
            }
          </Numbers>
          <Numbers label="Your numbers:">
            {
              selectedNumbers.map(num => {
                return (
                  <SingleNumber key={ num } value={ num }/>
                  )
                })
            }
          </Numbers>
          <CheckBox
            checked={ isRandom }
            label="Play with random numbers: "
            onChange={ handleCheckboxChange }
          />
          <CustomRangeSlider
            label="Speed"
            onValueChange={ handleSpeedValueChange }
          />  
        </Container>
      </Main>
    </Fragment>
  )
}
