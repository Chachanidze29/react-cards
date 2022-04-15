import React from "react";
import {CardFrontContainer} from "./CardStyles";

const CardFront = ({isFrontShown,imageUrl})=> {
    return (
        <CardFrontContainer isFrontShown={isFrontShown}>
            <img src={imageUrl}  alt="Lenore Castlevania"/>
        </CardFrontContainer>
    )
}

export default CardFront;