import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigator=useNavigate();
    const handleClick=()=>{
        navigator("/options")
    }
  return (
    <div>
      <div className="h-screen bg-black grid place-content-center text-white">
        <h1 className=" text-4xl text-center">
        WELCOME TO THE <br />DDOS PROTECTION SITE
        </h1>
        <button className="mt-28 bg-white w-1/2 m-auto border border-1 rounded-xl p-3 text-black" onClick={handleClick} > Lets Protect </button>
      </div>
    </div>
  );
};

export default Home;
