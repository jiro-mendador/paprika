import { Link } from "react-router-dom";
import { MusicSvg } from "../assets/MusicSvg";
import FadeIn from "./FadeIn";

const NavigationBar = () => {
  return (
    <>
      <nav className="flex flex-col justify-center items-center bg-black text-white p-4 rounded-4xl m-6 z-20">
        <Link to="/">
          <FadeIn>
            <MusicSvg />
          </FadeIn>
        </Link>
      </nav>
    </>
  );
};

export default NavigationBar;
