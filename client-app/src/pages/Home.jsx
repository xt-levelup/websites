import {Helmet} from "react-helmet";
import backgroundVideo from "../images/play-background.mp4";
import backgroundImage from "../images/background.png";

const Home=()=>{
    return <div className="static...">
        <Helmet>
            <title>Home</title>
        </Helmet>
        <div className="absolute border border-blue-600 mx-auto h-screen max-w-7xl w-full">
            <div className="flex flex-col justify-center gap-6 items-center border border-green-600 h-full text-white">
                <h2 className="text-3xl font-semibold">The smartest way for you to shine and succeed is</h2>
                <h3 className="text-4xl font-semibold">Create your own website!</h3>
            </div>
        </div>
        <div>
            <video width="100%" controls autoPlay loop><source src={backgroundVideo} type="video/mp4"/></video>
            <img src={backgroundImage} width="100%" />
        </div>
    </div>
};

export default Home;