import {useEffect, useState} from 'react';
import axios from 'axios';
const RateLimiting = () => {
  const [phase, setPhase] = useState(null);
  const getData = async () => {
    try {
      const res = await axios('http://localhost:3000/ratelimit');
      if (res.data.success) {
        console.log('you can access the api');
      }
    } catch (error) {
      console.log("you can't access the api");
    }
  };
  const getDataAfter = async () => {
    try {
      const res = await axios('http://localhost:5000/');
      if (res.data.success) {
        console.log('you can access the api');
      }
    } catch (error) {
      console.log("you can't access the api");
    }
  };
  useEffect(() => {
    let rate;
    if (phase) {
      console.log(phase);
      rate = setInterval(() => {
        if (phase === 1) {
          getDataAfter();
        } else {
          getData();
        }
      }, .1);
    }
    return () => clearInterval(rate);
  }, [phase]);

  return (
    <div className="h-screen bg-black flex p-20 flex-col  text-white items-center justify-center">
      <div className="flex items-center justify-center mt-10">
        <button
          className="px-5 py-3 bg-red-700 rounded-3xl mr-10 text-4xl "
          onClick={() => setPhase(1)}
        >
          Before
        </button>
        <button
          className="px-7 py-3 bg-blue-700 rounded-3xl  text-4xl"
          onClick={() => setPhase(2)}
        >
          After
        </button>
      </div>
      {phase && (
        <div className="text-2xl mt-16">Open the console for Results</div>
      )}
    </div>
  );
};

export default RateLimiting;
