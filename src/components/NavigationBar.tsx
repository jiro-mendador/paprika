import { Link } from "react-router-dom";
import { MusicSvg } from "../assets/MusicSvg";
import FadeIn from "./FadeIn";

const NavigationBar = () => {
  return (
    <>
      <nav className="flex justify-between items-center bg-black text-white p-4 rounded-4xl m-4 z-20 px-4 py-2">
        <Link to="/">
          <FadeIn direction="right">
            <p className="font-semibold text-sm">Paprika.Paprika</p>
          </FadeIn>
        </Link>
        <Link to="/">
          <FadeIn direction="left">
            <MusicSvg />
          </FadeIn>
        </Link>
      </nav>
    </>
  );
};

export default NavigationBar;
