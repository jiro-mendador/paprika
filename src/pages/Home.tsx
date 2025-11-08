import { useRef, useState } from "react";
import FadeIn from "../components/FadeIn";
import { CircleSvg } from "../assets/CircleSvg";
import { PlaySvg } from "../assets/PlaySvg";
import VideoBackground from "../components/VideoBackground";

type Music = {
  title: string;
  music: string;
};

const Home = () => {
  const listOfMusics: Music[] = [
    {
      title: "YesPleaseBT",
      music: "YesPleaseBT.wav",
    },
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
    {
      title: "MdusaBT",
      music: "MdusaBT.wav",
    },
    {
      title: "NonsenseBT",
      music: "NonsenseBT.wav",
    },
    {
      title: "PullUpBT",
      music: "PullUpBT.wav",
    },
    {
      title: "rickyyaoBT",
      music: "rickyyaoBT.wav",
    },
    {
      title: "RockBT",
      music: "RockBT.wav",
    },
    {
      title: "SnakeneckBT",
      music: "SnakeneckBT.wav",
    },
    {
      title: "TrashBeatBT",
      music: "TrashBeatBT.wav",
    },
    {
      title: "WakeUpBT",
      music: "WakeUpBT.wav",
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
    <div className="relative flex flex-col min-h-screen bg-[linear-gradient(to_bottom,_#ef4444_10%,_#f97316_40%,_#1a0000_90%)]">
      <div className="flex flex-col justify-center items-center gap-24">
        <VideoBackground
          source="/smoke-orig.webm"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />

        <VideoBackground
          source="/fire-orig.webm"
          className="absolute bottom-0 w-full h-1/2 object-cover opacity-50"
        />

        <div className="relative z-20 flex flex-col items-center gap-16 text-white p-16 rounded-4xl overflow-y-auto h-screen">
          <FadeIn direction="down">
            <div className="hover:bg-black/25 rounded-4xl px-6 py-4 flex flex-col gap-4 items-center w-[100px] lg:w-[140px]">
              <div
                className="relative flex justify-center items-center select-none"
                onClick={() => onButtonClick(listOfMusics[0])}
              >
                {musicPlaying?.title === listOfMusics[0].title ? (
                  <CircleSvg className="absolute z-20 w-[20px] lg:w-[35px]" />
                ) : (
                  <PlaySvg className="absolute z-20 w-[20px] lg:w-[35px]" />
                )}
                <img
                  src="/paprika-orig.png"
                  alt="Wave Image"
                  width={100}
                  height={50}
                />
              </div>
              <p className="text-sm">{listOfMusics[0].title}</p>
            </div>
          </FadeIn>

          <div className="flex flex-wrap justify-center gap-4 max-w-[calc(8*140px)] mx-auto">
            {listOfMusics.slice(1).map((music, index) => (
              <FadeIn delay={index * 0.2} key={index}>
                <div className="hover:bg-black/25 rounded-4xl px-6 py-4 flex flex-col gap-4 items-center w-[100px] lg:w-[140px]">
                  <div
                    className="relative flex justify-center items-center select-none"
                    onClick={() => onButtonClick(music)}
                  >
                    {musicPlaying?.title === music.title ? (
                      <CircleSvg className="absolute z-20  w-[20px] lg:w-[35px]" />
                    ) : (
                      <PlaySvg className="absolute z-20 w-[20px] lg:w-[35px]" />
                    )}
                    <img
                      src="/paprika-orig.png"
                      alt="Wave Image"
                      width={100}
                      height={50}
                    />
                  </div>
                  <p className="text-sm font-semibold">{music.title}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
