import "./Sampler.scss";

const Sampler = ({
  triggerAudio,
  handleSoundChange,
  handleBankChange,
  handleVolumeChange,
  volumes,
  soundRefs,
}) => {
  const [
    bassSound,
    padSound1,
    padSound2,
    leadSound1,
    leadSound2,
    leadSound3,
    droneSound,
    arpSound,
  ] = soundRefs;

  const rangeInputs = document.querySelectorAll('input[type="range"]');

  // function handleInputColourChange(e) {
  //   let target = e.target;
  //   if (e.target.type !== "range") {
  //     target = document.getElementById("range");
  //   }
  //   const min = target.min;
  //   const max = target.max;
  //   const val = target.value;

  //   target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
  // }

  return (
    <div className="sampler">
      <div className="sampler__container">
        <div className="sampler__inner-container">
          <button
            onClick={(event) => {
              triggerAudio(event, padSound1);
            }}
            className="sampler__trigger"
          ></button>
          <input
            type="range"
            min={0}
            max={1}
            step={0.02}
            value={volumes.padSound1}
            onChange={(event) => {
              handleVolumeChange(event, padSound1);
              // handleInputColourChange(event);
            }}
          />
        </div>
        <div className="sampler__inner-container">
          <button
            onClick={(event) => {
              triggerAudio(event, leadSound2);
            }}
            className="sampler__trigger"
          ></button>
          <input
            type="range"
            min={0}
            max={1}
            step={0.02}
            value={volumes.leadSound2}
            onChange={(event) => {
              handleVolumeChange(event, leadSound2);
            }}
          />
        </div>
        <div className="sampler__inner-container">
          <button
            onClick={(event) => {
              triggerAudio(event, padSound2);
            }}
            className="sampler__trigger"
          ></button>
          <input
            type="range"
            min={0}
            max={1}
            step={0.02}
            value={volumes.padSound2}
            onChange={(event) => {
              handleVolumeChange(event, padSound2);
            }}
          />
        </div>
        <div className="sampler__inner-container">
          <button
            onClick={(event) => {
              triggerAudio(event, bassSound);
            }}
            className="sampler__trigger"
          ></button>
          <input
            type="range"
            min={0}
            max={1}
            step={0.02}
            value={volumes.bassSound}
            onChange={(event) => {
              handleVolumeChange(event, bassSound);
            }}
          />
        </div>
      </div>
      <div className="sampler__container">
        <div className="sampler__inner-container">
          <button
            onClick={(event) => {
              triggerAudio(event, leadSound1);
            }}
            className="sampler__trigger"
          ></button>
          <input
            type="range"
            min={0}
            max={1}
            step={0.02}
            value={volumes.leadSound1}
            onChange={(event) => {
              handleVolumeChange(event, leadSound1);
            }}
          />
        </div>
        <div className="sampler__inner-container">
          <button
            onClick={(event) => {
              triggerAudio(event, droneSound);
            }}
            className="sampler__trigger"
          ></button>
          <input
            type="range"
            min={0}
            max={1}
            step={0.02}
            value={volumes.droneSound}
            onChange={(event) => {
              handleVolumeChange(event, droneSound);
            }}
          />
        </div>
        <div className="sampler__inner-container">
          <button
            onClick={(event) => {
              triggerAudio(event, arpSound);
            }}
            className="sampler__trigger"
          ></button>
          <input
            type="range"
            min={0}
            max={1}
            step={0.02}
            value={volumes.arpSound}
            onChange={(event) => {
              handleVolumeChange(event, arpSound);
            }}
          />
        </div>
        <div className="sampler__inner-container">
          <button
            onClick={(event) => {
              triggerAudio(event, leadSound3);
            }}
            className="sampler__trigger"
          ></button>
          <input
            type="range"
            min={0}
            max={1}
            step={0.02}
            value={volumes.leadSound3}
            onChange={(event) => {
              handleVolumeChange(event, leadSound3);
            }}
          />
        </div>
      </div>

      <div className="sampler-dropdown__container ">
        <select
          onChange={(event) => {
            handleSoundChange(event);
            handleBankChange();
          }}
          className="sampler-dropdown"
        >
          <option value="Atmospheric">Atmospheric</option>
          <option value="Hyacintho">Hyancintho</option>
        </select>
      </div>
    </div>
  );
};

export default Sampler;
