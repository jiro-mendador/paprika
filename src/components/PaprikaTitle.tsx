import FadeIn from "./FadeIn";

const PaprikaTitle = () => {
  return (
    <FadeIn direction="right">
      <div className="relative inline-block p-4 z-20">
        <h1 className="text-[12rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-orange-200 to-white drop-shadow-[0_4px_8px_rgba(255,200,150,0.5)] animate-pulse">
          PAPRIKA
        </h1>
        <div className="absolute bottom-[0.6rem] left-0 right-0 h-[4px] bg-gradient-to-r from-yellow-200 via-orange-300 to-red-400 transform rotate-[-2deg] animate-pulse" />
      </div>
    </FadeIn>
  );
};

export default PaprikaTitle;
