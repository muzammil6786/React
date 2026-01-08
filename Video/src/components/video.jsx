import { useRef } from "react";

const VideoPlayer = () => {
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  const handleRestart = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  };

  return (
    <div>
      <video
        ref={videoRef}
        width="400"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
      />

      <div style={{ marginTop: "10px" }}>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleRestart}>Restart</button>
      </div>
    </div>
  );
};

export default VideoPlayer;
