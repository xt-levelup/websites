import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import videoBackground from "../images/play-background.mp4";
import imageBackground from "../images/background.png";
// import pointRight from "../images/point-right.png";
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
                <svg
                  height="48px"
                  width="48px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512.816 512.816"
                  xmlSpace="preserve"
                >
                  <g>
                    <polygon
                      style={{ fill: "#FFCC67" }}
                      points="346.712,70.264 278.12,70.264 256.416,0 234.712,70.264 166.104,70.264 221.608,112.696 
		200.096,182.368 256.416,139.304 312.728,182.376 291.224,112.696 	"
                    />
                    <polygon
                      style={{ fill: "#FFCC67" }}
                      points="181.032,201.304 112.432,201.304 90.728,131.032 69.016,201.304 0.408,201.304 
		55.92,243.728 34.408,313.4 90.728,270.336 147.04,313.4 125.528,243.728 	"
                    />
                    <polygon
                      style={{ fill: "#FFCC67" }}
                      points="512.408,201.304 443.808,201.304 422.104,131.032 400.392,201.304 331.784,201.304 
		387.296,243.728 365.784,313.4 422.104,270.336 478.416,313.4 456.904,243.728 	"
                    />
                    <polygon
                      style={{ fill: "#FFCC67" }}
                      points="448.264,400.712 379.656,400.712 357.96,330.432 336.248,400.712 267.64,400.712 
		323.144,443.136 301.64,512.816 357.96,469.752 414.272,512.816 392.76,443.136 	"
                    />
                    <polygon
                      style={{ fill: "#FFCC67" }}
                      points="245.176,400.712 176.576,400.712 154.872,330.432 133.168,400.712 64.552,400.712 
		120.064,443.136 98.552,512.816 154.872,469.752 211.184,512.816 189.672,443.136 	"
                    />
                  </g>
                </svg>
                <p>Helping you more professional!</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-[1em] ">
              <div className="flex flex-row animate-bounce-stop  items-center gap-[1em] ">
                <svg
                  height="48px"
                  width="48px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512.816 512.816"
                  xmlSpace="preserve"
                >
                  <g>
                    <polygon
                      style={{ fill: "#FFCC67" }}
                      points="346.712,70.264 278.12,70.264 256.416,0 234.712,70.264 166.104,70.264 221.608,112.696 
		200.096,182.368 256.416,139.304 312.728,182.376 291.224,112.696 	"
                    />
                    <polygon
                      style={{ fill: "#FFCC67" }}
                      points="181.032,201.304 112.432,201.304 90.728,131.032 69.016,201.304 0.408,201.304 
		55.92,243.728 34.408,313.4 90.728,270.336 147.04,313.4 125.528,243.728 	"
                    />
                    <polygon
                      style={{ fill: "#FFCC67" }}
                      points="512.408,201.304 443.808,201.304 422.104,131.032 400.392,201.304 331.784,201.304 
		387.296,243.728 365.784,313.4 422.104,270.336 478.416,313.4 456.904,243.728 	"
                    />
                    <polygon
                      style={{ fill: "#FFCC67" }}
                      points="448.264,400.712 379.656,400.712 357.96,330.432 336.248,400.712 267.64,400.712 
		323.144,443.136 301.64,512.816 357.96,469.752 414.272,512.816 392.76,443.136 	"
                    />
                    <polygon
                      style={{ fill: "#FFCC67" }}
                      points="245.176,400.712 176.576,400.712 154.872,330.432 133.168,400.712 64.552,400.712 
		120.064,443.136 98.552,512.816 154.872,469.752 211.184,512.816 189.672,443.136 	"
                    />
                  </g>
                </svg>
                <p>Elevate your online presence!</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-[1em] ">
              <div className="flex flex-row animate-bounce-stop  items-center gap-[1em] ">
                <svg
                  height="48px"
                  width="48px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512.816 512.816"
                  xmlSpace="preserve"
                >
                  <g>
                    <polygon
                      style={{ fill: "#FFCC67" }}
                      points="346.712,70.264 278.12,70.264 256.416,0 234.712,70.264 166.104,70.264 221.608,112.696 
		200.096,182.368 256.416,139.304 312.728,182.376 291.224,112.696 	"
                    />
                    <polygon
                      style={{ fill: "#FFCC67" }}
                      points="181.032,201.304 112.432,201.304 90.728,131.032 69.016,201.304 0.408,201.304 
		55.92,243.728 34.408,313.4 90.728,270.336 147.04,313.4 125.528,243.728 	"
                    />
                    <polygon
                      style={{ fill: "#FFCC67" }}
                      points="512.408,201.304 443.808,201.304 422.104,131.032 400.392,201.304 331.784,201.304 
		387.296,243.728 365.784,313.4 422.104,270.336 478.416,313.4 456.904,243.728 	"
                    />
                    <polygon
                      style={{ fill: "#FFCC67" }}
                      points="448.264,400.712 379.656,400.712 357.96,330.432 336.248,400.712 267.64,400.712 
		323.144,443.136 301.64,512.816 357.96,469.752 414.272,512.816 392.76,443.136 	"
                    />
                    <polygon
                      style={{ fill: "#FFCC67" }}
                      points="245.176,400.712 176.576,400.712 154.872,330.432 133.168,400.712 64.552,400.712 
		120.064,443.136 98.552,512.816 154.872,469.752 211.184,512.816 189.672,443.136 	"
                    />
                  </g>
                </svg>
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
