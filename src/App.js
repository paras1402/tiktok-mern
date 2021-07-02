import { useEffect, useState } from "react";
import "./App.css";
import axios from "./axios";
import Video from "./components/Video";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get("/v2/posts").then((response) => {
      setVideos(response.data);
    });
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map((video) => (
          <Video
            channel={video.channel}
            description={video.description}
            song={video.song}
            link={video.link}
            likes={video.likes}
            shares={video.shares}
            messages={video.messages}
          ></Video>
        ))}
      </div>
    </div>
  );
}

export default App;
