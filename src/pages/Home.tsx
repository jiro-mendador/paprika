import { useRef, useState } from "react";
import FadeIn from "../components/FadeIn";
import NavigationBar from "../components/NavigationBar";
import { CircleSvg } from "../assets/CircleSvg";
import { PlaySvg } from "../assets/PlaySvg";

type Music = {
  title: string;
  music: string;
};

const Home = () => {
  const listOfMusics: Music[] = [
    {
      title: "1man2cupBT",
      music: "1man2cupBT.wav",
    },
    {
      title: "CreepinBT",
      music: "CreepinBT.wav",
    },
    {
      title: "I_LikeBT",
      music: "I_LikeBT.wav",
    },
    {
      title: "InterludeBT",
      music: "InterludeBT.wav",
    },
    // * samples
    {
      title: "CreepinBT2",
      music: "CreepinBT.wav",
    },
    {
      title: "I_LikeBT2",
      music: "I_LikeBT.wav",
    },
    {
      title: "InterludeBT2",
      music: "InterludeBT.wav",
    },
    {
      title: "1man2cupBT2",
      music: "1man2cupBT.wav",
    },
  ];

  const [musicPlaying, setMusicPlaying] = useState<Music | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const onButtonClick = (music: Music) => {
    let isSameMusic = false;
    if (musicPlaying) {
      isSameMusic = musicPlaying?.title === music.title;
    }

    if (isSameMusic) {
      // Stop current audio
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      setMusicPlaying(null);
    } else {
      // Stop any audio that might be playing
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }

      // Create and play new audio
      audioRef.current = new Audio(`/sounds/${music.music}`);
      audioRef.current.play();

      setMusicPlaying(music);
    }
  };

  return (
    <div className="flex h-screen min-h-[30rem] bg-[linear-gradient(to_bottom,_#ef4444_10%,_#f97316_40%,_#1a0000_90%)]">
      <NavigationBar />
      <div className="flex-1 flex flex-col justify-center items-center gap-24">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        >
          <source src="/fire.webm" type="video/webm" />
        </video>

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        >
          <source src="/smoke-orig.webm" type="video/webm" />
        </video>

        <FadeIn direction="right">
          <div className="relative inline-block p-4 z-20">
            <h1 className="text-[12rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-orange-200 to-white drop-shadow-[0_4px_8px_rgba(255,200,150,0.5)] animate-pulse">
              PAPRIKA
            </h1>
            <div className="absolute bottom-[0.6rem] left-0 right-0 h-[4px] bg-gradient-to-r from-yellow-200 via-orange-300 to-red-400 transform rotate-[-2deg] animate-pulse" />
          </div>
        </FadeIn>

        <div className="flex flex-col gap-16 text-white p-16 rounded-4xl z-20">
          <FadeIn direction="left">
            <p className="text-4xl font-semibold text-center">Latest Music</p>
          </FadeIn>
          <div className="grid grid-cols-4 items-center gap-4">
            {listOfMusics.map((music, index) => {
              return (
                <FadeIn delay={index * 0.2} key={index}>
                  <div className="bg-black/25 hover:bg-black rounded-4xl px-12 py-6 flex flex-col gap-4 items-center">
                    <div
                      className="relative flex justify-center items-center select-none"
                      onClick={() => onButtonClick(music)}
                    >
                      {musicPlaying?.title === music.title ? (
                        <CircleSvg className={"absolute z-20"} />
                      ) : (
                        <PlaySvg className={"absolute z-20"} />
                      )}
                      <img
                        src="/paprika-orig.png"
                        alt="Wave Image"
                        width={100}
                        height={50}
                      />
                    </div>
                    <p className="text-sm">{music.title}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
