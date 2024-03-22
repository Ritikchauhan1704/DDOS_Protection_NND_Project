import {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const IPBlocklist = () => {
  const [ip, setIp] = useState(null);
  const [notValidIps, setNotValidIps] = useState([]);
  const [click,setClick]=useState(0)
  // const navigate=useNavigate();
  const [valid, setValid] = useState(null);

  const url =
    'https://api.ipgeolocation.io/ipgeo?apiKey=5c4d88f3de58413b8e3b55484a30fa13';

  const getIP = async () => {
    try {
      const res = await axios.get(url);
      console.log(res.data);
      setIp(res.data);
    } catch (error) {
      console.log('coudnt get ip');
    }
  };
  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    if(renderCount.current>5){
      setValid(1);
      setIp(null)
    }
    console.log(renderCount.current);
  });
  useEffect(() => {
    getIP();
  }, []);

  const handleClick = () => {
    const ipaddr = ip.ip;
    setIp(null);
    if (notValidIps.includes(ipaddr)) {
      setValid(1);
    } else setValid(0);
  };
  return (
    <div className="h-screen bg-black  text-white p-5 flex flex-col items-center">
      {ip && (
        <>
          <div className="flex flex-col  items-center">
            <p className="text-3xl mb-10">Your Information</p>
            <ul>
              <li>Continent name:{ip.continent_name}</li>
              <li>Country name:{ip.country_name}</li>
              <li>City:{ip.city}</li>
              <li>IP:{ip.ip}</li>
              <li>Lat:{ip.latitude}</li>
              <li>Lon:{ip.longitude}</li>
            </ul>
          </div>
          <button
            className="mt-10 border-2 border-sky-500 px-8 py-3"
            onClick={handleClick}
          >
            Access the site
          </button>
        </>
      )}
      {valid !== null ? (
        <>
          {valid === 0 ? (
            <div className="">you have access</div>
          ) : (
            <div className="">Your Ip is blocked</div>
          )}
          <button className="mt-10 border-2 border-sky-500 px-8 py-3" onClick={()=>{setClick((prev)=>prev+1)}}> Access the site</button>
        </>
      ) : null}
    </div>
  );
};

export default IPBlocklist;
