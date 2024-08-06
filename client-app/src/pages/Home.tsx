import { Helmet } from "react-helmet";
import videoBackground from "../images/play-background.mp4";
import imageBackground from "../images/background.png";
const Home = () => {
  return (
    <div className="relative mx-[5%]">
      <Helmet>
        <title>Home Page - Design Websites</title>
      </Helmet>
      <div className="flex flex-col gap-[1em]">
        <video width="100%" controls autoPlay loop muted>
          <source src={videoBackground} />
        </video>
        <img width="100%" src={imageBackground} />
      </div>
      <div className="absolute box-border mx-auto left-0 top-0 w-full h-full bg-emerald-900/60 border-[3px] border-green-600">
        <h2>The smartest way to manage your data</h2>
      </div>
    </div>
  );
};

export default Home;
