import "./FeatureCard.css";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const FeatureCard = ({
    title,
    description,
    icon,
    path,
    guest = false,
    requiresAccount = false
}) => {

    const navigate = useNavigate();

    const handleClick = () => {

        if (guest && requiresAccount) {

            navigate("/guest-access");

            return;

        }

        navigate(path);

    };

    return (

        <motion.div

            className="featureCard"

            whileHover={{ y: -4 }}

            whileTap={{ scale: .97 }}

            initial={{ opacity: 0, y: 25 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: .35 }}

            onClick={handleClick}

        >

            <div className="featureIcon">

                {icon}

            </div>

            <div className="featureContent">

                <h3>{title}</h3>

                <p>{description}</p>

            </div>

            <div className="arrow">

                <HiArrowRight />

            </div>

        </motion.div>

    );

};

export default FeatureCard;