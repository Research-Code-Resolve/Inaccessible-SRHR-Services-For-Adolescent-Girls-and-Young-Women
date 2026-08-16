import "./ModuleCard.css";

function ModuleCard({

    title,

    subtitle,

    onClick

}){

    return(

        <button
            className="module-card"
            onClick={onClick}
        >

            <h3>{title}</h3>

            <p>{subtitle}</p>

        </button>

    );

}

export default ModuleCard;