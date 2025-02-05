"use client";

import { useState } from "react";

const phrases = [
  "No",
  "I think you misclicked :)",
  "Are you sure?",
  "Are you REALLY sure?",
  "Bambi plssss",
  "I'll be a lonely baby cub :(",
  "IMA CRY",
  "Baby cub cries....",
];

export default function Home() {
  const [phraseCount, setPhraseCount] = useState(0);
  const [sayYes, setSayYes] = useState(false);
  const [prize, setPrize] = useState(false);
  const [yesButtonSize, setYesButtonSize] = useState(1);

  const phraseCountHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      event.preventDefault();
      setPhraseCount(phraseCount + 1);
      setYesButtonSize(yesButtonSize + 1);
    } catch (error) {
      console.error(error);
    }
  };

  // Dynamically adjust the text size based on phraseCount

  return (
    <div className='bg-pink-300 w-full min-h-screen flex flex-col justify-center items-center'>
      {!sayYes ? (
        phraseCount > 7 ? (
          <img
            src='/MochaSad.gif'
            alt='Mocha Sad gif'
            className='w-[500px] h-[500px] animate-loopGif'
          />
        ) : (
          <>
            <img
              src='/Homepage.gif'
              alt='Homepage gif'
              className='w-[500px] h-[500px] animate-loopGif'
            />
            <h1 className='text-white text-2xl'>
              {" "}
              {"WILL YOU BE MY VALENTINES >:)"}{" "}
            </h1>
          </>
        )
      ) : (
        <img
          src='/yes.gif'
          alt='Yes gif'
          className='w-[500px] h-[500px] animate-loopGif'
        />
      )}

      {!sayYes ? (
        <div className='flex flex-row text-center mt-5'>
          <button
            onClick={() => {
              setSayYes(true);
              setPhraseCount(0);
            }}
            type='button'
            style={{
              width: `${yesButtonSize * 5}rem`, // Dynamically setting width
              height: `${yesButtonSize * 5}rem`, // Dynamically setting height
            }}
            className='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2'>
            YES
          </button>

          {phraseCount <= 7 && (
            <button
              onClick={phraseCountHandler}
              type='button'
              className='  text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
              {phrases[phraseCount]}
            </button>
          )}
        </div>
      ) : (
        <div className='flex flex-col text-center'>
          <p className='text-2xl font-semibold'>You ARE stuck with me now :D</p>
          <p
            className='text-2xl underline hover:cursor-pointer font-semibold'
            onClick={() => setPrize(true)}>
            Click Here to redeem your prize!!
          </p>
          {prize === true ? (
            <p className='text-2xl font-semibold mt-5'>
              Roses are Red, Violets are Blue
              <br />
              Every time I see flowers, I think of you
              <br />
              Oh Chau Chau, I know I read slow
              <br />
              But with you, time is slow.
              <br />
              Petals come and go,
              <br />
              But with you, I know
              <br />
              {"You'll be there."}
              <br />
              <br />
              Oh Chau Chau,
              <br />
              My Baby Chau Chau,
              <br />
              Every moment, is a thrill,
              <br />
              Love, Laughter, and Lost Money,
              <br />
              {`No matter what, you're my Chau Chau`}
            </p>
          ) : null}
        </div>
      )}
    </div>
  );
}
