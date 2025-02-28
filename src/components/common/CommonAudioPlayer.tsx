// import "./audio.css";
import { Pause, Play, ReplyAll } from "lucide-react";
import { useState, useRef, useEffect } from "react";

function CommonAudioPlayer({ voice } : { voice: string}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [barData, setBarData] = useState<any[]>([]);
  const audioRef = useRef(null);

  useEffect(() => {

    const fetchAudioData = async () => {
      const audioContext = new AudioContext();
      const response = await fetch(voice);
      const arrayBuffer = await response.arrayBuffer();
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

      const rawData = audioBuffer.getChannelData(0);
      const sampleSize = Math.floor(rawData.length / 100);
      const bars = [];

      for (let i = 0; i < 100; i++) {
        const start = i * sampleSize;
        const end = start + sampleSize;
        const segment = rawData.slice(start, end);
        const amplitude = Math.max(...segment.map(Math.abs));
        bars.push(amplitude * 50);
      }

      setBarData(bars);
    };

    fetchAudioData();
  }, []);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleReplay = () => {
    if (audioRef.current.currentTime > 0) {
      audioRef.current.currentTime=0;
      audioRef.current.play();
      setIsPlaying(true);
    }
  }

  const goToTime = (currentTime: number) => {
    console.log(currentTime);
    // audioRef.current.currentTime = duration * (event.offsetX / event.target.clientWidth);
    audioRef.current.currentTime = currentTime;
  }

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  useEffect(() => {
    if (currentTime == duration) {
      audioRef.current.currentTime = 0;
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, [currentTime])

  return (
    <div className="flex border flex-col items-center justify-center w-96 p-2 text-black dark:text-white rounded-lg">

      <div className="flex items-center justify-center">

        {/* Égaliseur dynamique */}
        <div className="flex items-center justify-center space-x-[2px] w-full max-w-md">
          {barData.map((height, index) => {

            const progress = (currentTime / duration) * 100;
            const isActive = index < progress;

            return height > 0 ? (
              <div
                key={index}
                onClick={() => goToTime(progress)}
                className={`w-[1px] rounded transition-all ${ isActive ? "bg-[#3b82f6]" : "bg-gray-400 dark:bg-white" } duration-300 ease-in-out`}
                style={{
                  height: `${height}px`,
                }}
              ></div>
            ) : (<div className="hidden"></div>);
          })}
        </div>

        {/* Balise audio */}
        <audio
          ref={audioRef}
          src={voice}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
        ></audio>

        {/* Commandes principales */}
        <div className="flex items-center justify-center">
          <button
            onClick={handlePlayPause}
            className="text-black dark:text-white p-2 transition-all"
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </button>
          <button
            title="_"
            onClick={handleReplay}
            className="text-black dark:text-white p-2 transition-all"
          >
            <ReplyAll size={16} />
          </button>
        </div>

      </div>

      {/* Temps actuel et durée */}
      <div className="flex justify-between w-full px-1 text-sm">
        <span>{(currentTime / 60).toFixed(2)}</span>
        <span>{(duration / 60).toFixed(2)}</span>
      </div>
    </div>
  );
}

export default CommonAudioPlayer;
