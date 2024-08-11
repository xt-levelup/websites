import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import videoBackground from "../images/play-background.mp4";
import imageBackground from "../images/background.png";
// import pointRight from "../images/point-right.png";
const Home = () => {
  const [adverse, setAdverse] = useState<JSX.Element | null>(null);
  const [guaranty, setGuaranty] = useState<JSX.Element | null>(null);
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
    const googleSvg = (
      <svg
        width="21px"
        height="21px"
        viewBox="-0.5 0 48 48"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <title>Google-color</title>
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g
          id="Icons"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g id="Color-" transform="translate(-401.000000, -860.000000)">
            <g id="Google" transform="translate(401.000000, 860.000000)">
              <path
                d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                id="Fill-1"
                fill="#FBBC05"
              ></path>
              <path
                d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                id="Fill-2"
                fill="#EB4335"
              ></path>
              <path
                d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                id="Fill-3"
                fill="#34A853"
              ></path>
              <path
                d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                id="Fill-4"
                fill="#4285F4"
              ></path>
            </g>
          </g>
        </g>
      </svg>
    );

    const facebookSvg = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Facebook"
        role="img"
        viewBox="0 0 512 512"
        width="21px"
        height="21px"
      >
        <rect width="512" height="512" rx="15%" fill="#1877f2" />
        <path
          d="M355.6 330l11.4-74h-71v-48c0-20.2 9.9-40 41.7-40H370v-63s-29.3-5-57.3-5c-58.5 0-96.7 35.4-96.7 99.6V256h-65v74h65v182h80V330h59.6z"
          fill="#ffffff"
        />
      </svg>
    );

    const netflixSvg = (
      <svg
        width="52px"
        height="52px"
        viewBox="0 -187 512 512"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="xMidYMid"
      >
        <g>
          <path
            d="M340.657183,0 L340.657183,100.203061 C353.016406,100.778079 365.344207,101.473198 377.637095,102.293306 L377.637095,123.537553 C358.204486,122.242243 338.690182,121.253471 319.094879,120.57923 L319.094879,0 L340.657183,0 Z M512,0.0118710746 L483.922918,65.1060972 L511.993017,137.54371 L511.961595,137.557485 C503.784957,136.3909 495.597845,135.289637 487.386294,134.233936 L471.623048,93.5776798 L455.709676,130.459835 C448.168455,129.627123 440.61676,128.839275 433.047609,128.100899 L460.419447,64.6708546 L435.351871,0.0118710746 L458.677285,0.0118710746 L472.712335,36.1957639 L488.318473,0.0118710746 L512,0.0118710746 Z M245.093161,119.526252 L245.092462,0.0114869428 L305.282574,0.0114869428 L305.282574,21.4467074 L266.654767,21.4467074 L266.654767,49.2277266 L295.881884,49.2277266 L295.881884,70.4719734 L266.654767,70.4719734 L266.654767,119.521329 L245.093161,119.526252 Z M164.580156,21.448488 L164.579458,0.0103695593 L231.270382,0.0103695593 L231.270382,21.4469875 L208.705375,21.4469875 L208.705375,120.107799 C201.508397,120.296154 194.3191,120.519389 187.144466,120.790104 L187.144466,21.448488 L164.580156,21.448488 Z M90.8682168,126.966224 L90.8682168,0.0139657936 L150.758077,0.0139657936 L150.758077,21.4491862 L112.42703,21.4491862 L112.42703,50.4849807 C121.233151,50.3722116 133.754021,50.2444297 141.543822,50.2632828 L141.543822,71.5092753 C131.792954,71.388127 120.786264,71.6429923 112.42703,71.7264345 L112.42703,103.88974 C125.166805,102.887736 137.944984,102.011069 150.758077,101.270912 L150.758077,122.517253 C130.704017,123.672422 110.740031,125.160591 90.8682168,126.966224 Z M48.5710466,77.8540254 L48.5696502,0.0104745953 L70.1319549,0.0104745953 L70.1319549,128.968837 C62.2496338,129.779728 54.3823252,130.642465 46.5286328,131.553346 L21.5609083,59.8244682 L21.5609083,134.625696 C14.3597408,135.563565 7.17323695,136.54141 0,137.562338 L0,0.0118710746 L20.4911722,0.0118710746 L48.5710466,77.8540254 Z M395.425298,124.819071 L395.425298,124.819211 L395.425298,0.0120101224 L416.987603,0.0120101224 L416.987603,126.599777 C409.809478,125.960833 402.624371,125.369895 395.425298,124.819071 Z"
            fill="#DB202C"
            fill-rule="nonzero"
          ></path>
        </g>
      </svg>
    );
    const topStylesHandle = () => {
      if (window.scrollY >= 210 && !topStyles) {
        setGuaranty(
          <div className="w-full h-[150px] italic p-[1%] text-white text-[30px] bg-blue-900/80 items-center my-[2em] grid grid-cols-3">
            <h3 className="text-center">
              <span>Powerful technology</span>
              <span className="text-[24px] flex flex-rows items-center justify-center gap-[1em]">
                ({googleSvg} | {facebookSvg} | {netflixSvg})
              </span>
            </h3>
            <h3 className="text-center">Price optionals</h3>
            <h3 className="text-center">3 months editing support</h3>
          </div>
        );
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
        {guaranty}
        {topStyles}
      </div>
    </div>
  );
};

export default Home;
