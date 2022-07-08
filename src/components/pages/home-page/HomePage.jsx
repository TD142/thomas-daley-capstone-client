import Main from "../../main/Main";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../../utils/api";
const unmuteiOSAudio = require("unmute-ios-audio");

const HomePage = () => {
  const [sounds, setSounds] = useState({});

  const getSounds = async () => {
    const { data } = await axios.get(`${API_URL}/atmospheric`);
    setSounds(data);
  };

  const handleSoundChange = async (event) => {
    const genre = event.target.value;
    const { data } = await axios.get(`${API_URL}/${genre.toLowerCase()}`);
    setSounds(data);
  };

  useEffect(() => {
    getSounds();
  }, []);

  // Enables iOS audio to play when in silent mode.

  unmuteiOSAudio();

  return (
    <div>
      <Main handleSoundChange={handleSoundChange} sounds={sounds} />
    </div>
  );
};

export default HomePage;
