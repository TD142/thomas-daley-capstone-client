import Main from "../../main/Main";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const HomePage = () => {
  const [sounds, setSounds] = useState({});

  const getSounds = async () => {
    const { data } = await axios.get("http://localhost:8080/atmospheric");
    setSounds(data);
  };

  const handleSoundChange = async (event) => {
    const genre = event.target.value;
    const { data } = await axios.get(
      `http://localhost:8080/${genre.toLowerCase()}`
    );
    setSounds(data);

    const sounds = document.getElementsByClassName("sound");
  };

  useEffect(() => {
    getSounds();
  }, []);

  return (
    <div>
      <Main handleSoundChange={handleSoundChange} sounds={sounds} />
    </div>
  );
};

export default HomePage;
