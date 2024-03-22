import axios from "axios"
import { useEffect, useState } from "react"
import Captcha from "./Captcha"
import HomePage from "../HomePage"

const BlackHole = () => {
  const [type, setType] = useState(null)
  const getType=async()=>{
    try {
      const res=await axios.get("http://localhost:5000/test")
      console.log(res.data);
      setType(res.data.type);
    } catch (error) {
      console.log("pta nhi");
    }

  }

  useEffect(() => {
    getType()
  }, [])
  

  return (
    <div className="h-screen bg-black  text-white p-5">
      {type?
      <>
      {
        (type==="humanContent")?
        <div className=""><HomePage/></div>:
        <div className=""><Captcha/></div>
      }
      </>
      :null}
    </div>
  )
}

export default BlackHole