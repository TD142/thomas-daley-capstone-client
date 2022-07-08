import Main from "../../main/Main";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../../utils/api";

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

  let context =
    window.AudioContext || window.webkitAudioContext
      ? new (window.AudioContext || window.webkitAudioContext)()
      : null;

  let allowBackgroundPlayback = false;
  let forceIOSBehavior = false;

  if (context) {
    let unmuteHandle = unmute(
      context,
      allowBackgroundPlayback,
      forceIOSBehavior
    );

    unmuteHandle.dispose();
    unmuteHandle = null;
  }

  return (
    <div>
      <Main handleSoundChange={handleSoundChange} sounds={sounds} />
    </div>
  );
};

export default HomePage;
