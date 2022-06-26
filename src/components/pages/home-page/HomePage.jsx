import Main from "../../main/Main";
import Sampler from "../../../sampler/Sampler.jsx";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const HomePage = () => {
  const [sounds, setSounds] = useState({});

  const getSounds = async () => {
    const { data } = await axios.get("http://localhost:8080/atmospheric");
    setSounds(data);
    console.log(data);
  };

  useEffect(() => {
    getSounds();
  }, []);

  return (
    <div>
      <Main />
      <Sampler sounds={sounds} />
    </div>
  );
};

export default HomePage;
