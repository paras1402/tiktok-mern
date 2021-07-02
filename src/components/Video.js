import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
const Video = ({
  link,
  channel,
  description,
  song,
  likes,
  shares,
  messages,
}) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        loop
        ref={videoRef}
        className="video__player"
        src={link}
      ></video>
      <VideoFooter
        channel={channel}
        description={description}
        song={song}
      ></VideoFooter>
      <VideoSidebar
        likes={likes}
        shares={shares}
        messages={messages}
      ></VideoSidebar>
    </div>
  );
};

export default Video;
