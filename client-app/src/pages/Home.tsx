import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import videoBackground from "../images/play-background.mp4";
import imageBackground from "../images/background.png";
import pointRight from "../images/point-right.png";
const Home = () => {
  const [adverse, setAdverse] = useState<JSX.Element | null>(null);
  const [topStyles, setTopStyles] = useState<JSX.Element | null>(null);

  useEffect(() => {
    const showAdTimer = setTimeout(() => {
      setAdverse(
        <div className="mt-[3em] rounded-[12px] shadow-xl shadow-blue-950 text-white relative animate-ad-moving w-[600px] h-[90vh] flex flex-col items-center justify-center">
          <h2 className="flex flex-row gap-[1em] italic text-[36px] text-center mb-[2em]">
            <svg
              fill="#ebf565"
              height="48px"
              width="48px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 32.811 32.811"
              xmlSpace="preserve"
            >
              <g>
                <path
                  d="M0,1.356v16.743h5.249v7.154v3.617v2.586h3.61v-2.586h15.423v2.586h3.606V18.098h4.923V1.356H0z M31.136,2.281
		l-7.764,14.658h-4.783l7.762-14.658C26.351,2.281,31.136,2.281,31.136,2.281z M23.016,2.245l-7.766,14.66h-4.785l7.767-14.66
		C18.232,2.245,23.016,2.245,23.016,2.245z M1.31,2.429l5.617-0.017L1.281,12.99L1.31,2.429z M7.468,17.06H2.684l7.763-14.658h4.785
		L7.468,17.06z M24.282,25.252H8.859v-7.154h15.423C24.282,18.098,24.282,25.252,24.282,25.252z M32.149,16.811l-5.616-0.006
		l5.646-10.576L32.149,16.811z"
                />
                <path
                  d="M0,1.356v16.743h5.249v7.154v3.617v2.586h3.61v-2.586h15.423v2.586h3.606V18.098h4.923V1.356H0z M31.136,2.281
		l-7.764,14.658h-4.783l7.762-14.658C26.351,2.281,31.136,2.281,31.136,2.281z M23.016,2.245l-7.766,14.66h-4.785l7.767-14.66
		C18.232,2.245,23.016,2.245,23.016,2.245z M1.31,2.429l5.617-0.017L1.281,12.99L1.31,2.429z M7.468,17.06H2.684l7.763-14.658h4.785
		L7.468,17.06z M24.282,25.252H8.859v-7.154h15.423C24.282,18.098,24.282,25.252,24.282,25.252z M32.149,16.811l-5.616-0.006
		l5.646-10.576L32.149,16.811z"
                />
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </g>
            </svg>
            <span>Comming soon ...</span>
          </h2>
          <h2 className="text-[48px] text-center">
            Empowering Your Journey to New Heights!
          </h2>
          <div className="flex italic text-[24px] text-lime-100 flex-col items-center gap-[1em] mt-[2em]">
            <div className="flex flex-row items-center gap-[1em] ">
              <div className="flex flex-row animate-bounce-stop items-center gap-[1em] ">
                <img src={pointRight} width="30px" />
                <p>Helping you more professional!</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-[1em] ">
              <div className="flex flex-row animate-bounce-stop  items-center gap-[1em] ">
                <img src={pointRight} width="30px" />
                <p>Elevate your online presence!</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-[1em] ">
              <div className="flex flex-row animate-bounce-stop  items-center gap-[1em] ">
                <img src={pointRight} width="30px" />
                <p>Solutions for your business success!</p>
              </div>
            </div>
          </div>
        </div>
      );
    }, 1000);
    return () => {
      clearTimeout(showAdTimer);
    };
  }, []);

  useEffect(() => {
    const topStylesHandle = () => {
      if (window.scrollY >= 210 && !topStyles) {
        setTopStyles(
          <div className="w-full flex flex-col px-[3%] text-white border border-[3px] border-blue-900">
            <h2 className="text-[36px] font-[600] italic">Top Styles</h2>
            <div className="flex flex-col items-center">
              <div className="grid grid-cols-3 gap-[1em]">
                <div>Style01</div>
                <div>Style02</div>
                <div>Style03</div>
              </div>
              <div className="grid grid-cols-2 gap-[1em]">
                <div>Style04</div>
                <div>Style05</div>
              </div>
            </div>
          </div>
        );
      }
    };
    window.addEventListener("scroll", topStylesHandle);
    return () => {
      window.removeEventListener("scroll", topStylesHandle);
    };
  }, [topStyles]);

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
      <div className="absolute flex flex-col items-center box-border mx-auto left-0 top-0 w-full h-full bg-blue-950/60">
        {adverse}
        {topStyles}
      </div>
    </div>
  );
};

export default Home;
