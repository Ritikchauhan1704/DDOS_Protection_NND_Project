import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const generateCaptchaCode = () => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let captcha = '';
  for (let i = 0; i < 6; i++) {
    captcha += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return captcha;
};
const Captcha = () => {
  const navigate=useNavigate();
  const [captcha, setCaptcha] = useState(generateCaptchaCode());
  const [inputText, setInputText] = useState('');
  const [verificationStatus, setVerificationStatus] = useState('');

  const regenerateCaptcha = () => {
    setCaptcha(generateCaptchaCode());
    setInputText('');
    setVerificationStatus('');
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText=== captcha ){
      setVerificationStatus('CAPTCHA verification successful!');
      navigate("/home")
    } else {
      setVerificationStatus('CAPTCHA verification failed. Please try again.');
    }
  };
  return (
    <div className="h-screen bg-black flex flex-col p-20 items-center">
      <h1 className='text-white text-xl mb-10'>Recaptcha for stoping bots</h1>
      <div className="bg-white p-6 rounded-xl">
        <h2 className="text-3xl ">CAPTCHA Verification</h2>
        <div className="h-[1px] bg-black mb-5"></div>
        <div className="m-auto text-center flex">
          <p className="text-4xl bg-black text-white p-2 rounded-xl w-56 text-left line-through">{captcha}</p>
          <button
            className="mt-3 px-1 bg-white m-auto  text-sky-600 text-xl"
            type="button"
            onClick={regenerateCaptcha}
          >
            &#8634;
          </button>
        </div>
        <form className="mt-5" onSubmit={handleSubmit}>
          <div>
            <label className='text-xl'>Enter CAPTCHA code:</label>
            <br />
            <input
              className="bg-transparent border-2 border-sky-500 outline-none p-1"
              type="text"
              value={inputText}
              onChange={handleChange}
            />
            <br />
            <button className='bg-sky-500 px-3 py-1 text-white rounded-2xl mt-4 outline-none' type="submit">Verify</button>
          </div>
        </form>
        {verificationStatus && <p>{verificationStatus}</p>}
      </div>
    </div>
  );
};

export default Captcha;
