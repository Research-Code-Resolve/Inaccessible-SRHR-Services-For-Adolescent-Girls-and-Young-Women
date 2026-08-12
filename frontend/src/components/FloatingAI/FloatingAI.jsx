import "./FloatingAI.css";
import { MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

function FloatingAI(){

    const navigate = useNavigate();


    return(

        <button
            type="button"
            aria-label="Open AI assistant"
            className="floating-ai"
            onClick={() => navigate("/ai-assistant")}
        >

            <MessageCircle size={24} />

        </button>

    );

}

export default FloatingAI;