import React from "react";
import "./card.css";

const Card = ({obj}) => {

    return(
        <div className="card">

            <img src={obj.avatar} alt="Example" className="img"></img>

            <h2>
                {obj.first_name} {obj.last_name}
            </h2>

            <b>Id :</b> {obj.id}
            <br/>
            <b>Email :</b> {obj.email}

        </div>
    );
}

export default Card;