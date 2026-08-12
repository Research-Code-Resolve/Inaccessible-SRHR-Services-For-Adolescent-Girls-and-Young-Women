import "./GetStarted.css";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { motion } from "framer-motion";

import Button from "../../components/Button/Button";
import hero from "../../assets/illustrations/get-started.png";

const GetStarted = () => {

    const navigate = useNavigate();

    return (

        <main className="getStarted">

            <button
                className="backButton"
                onClick={() => navigate("/consent")}
            >
                <IoArrowBack />
            </button>

            <motion.img

                src={hero}

                alt="ValeCare Illustration"

                className="hero"

                initial={{opacity:0,y:40}}

                animate={{opacity:1,y:0}}

            />

            <motion.h1

                initial={{opacity:0}}

                animate={{opacity:1}}

            >

                Welcome to ValeCare

            </motion.h1>

            <p>

                Your trusted companion for sexual and reproductive
                health information, education and care.

            </p>

            <div className="buttonGroup">

                <Button

                    text="Create Account"

                    onClick={()=>navigate("/signup")}

                />

                <button

                    className="guestButton"

                    onClick={()=>navigate("/dashboard?guest=true")}

                >

                    Continue as Guest

                </button>

            </div>

            <p className="signinText">

                Already a member?

                <span

                    onClick={()=>navigate("/login")}

                >

                    Sign In

                </span>

            </p>

        </main>

    );

};

export default GetStarted;