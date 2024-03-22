import {Link} from 'react-router-dom';

const OptionsHome = () => {
  return (
      <div className="h-screen bg-black  text-white p-5 flex flex-col  items-center">
        <h1 className='text-7xl text-center my-16'>You have following options</h1>
        <p className='mt-3 mb-10 text-center'>Click for demo</p>
        <div className="grid grid-cols-2 gap-4 w-[50vw]">
          <Link className="col-span-1" to="recaptcha">
            <div className="text-center p-4 border-2 border-sky-500">
              CAPTCHA
            </div>
          </Link>
          <Link className="col-span-1" to="rate-limiting">
            <div className="text-center p-4 border-2 border-sky-500">
              Rate Limiting
            </div>
          </Link>
          <Link className="col-span-1" to="ip-blocklist">
            <div className="text-center p-4 border-2 border-sky-500">IP BlackListing</div>
          </Link>
          <Link className="col-span-1" to="blackhole">
            <div className="text-center p-4 border-2 border-sky-500 text-sm">
              Bad Bot Detection
            </div>
          </Link>
          <Link className="col-span-2" to="firewall">
            <div className=" p-4 border-2 border-sky-500 text-center ">
              Firewall
            </div>
          </Link>
        </div>
      </div>
  );
};

export default OptionsHome;
