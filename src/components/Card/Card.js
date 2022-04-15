import React,{useState} from "react";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import {CardContainer} from "./CardStyles";

const imageUrl = "https://otakukart.com/wp-content/uploads/2021/12/lenore-f.jpg";

const Card = ({cardData:{id,name,phone,email,address,postalZip,region,country}}) => {
    const [isFrontShown,setIsFrontShown] = useState(true);

    return (
        <CardContainer isFrontShown={isFrontShown} onClick={()=>setIsFrontShown(!isFrontShown)}>
            <CardFront isFrontShown={isFrontShown} imageUrl={imageUrl}/>
            <CardBack isFrontShown={isFrontShown}
                       id={id}
                       name={name}
                       postalZip={postalZip}
                       address={address}
                       email={email}
                       region={region}
                       country={country}
                       phone={phone}
            />
        </CardContainer>
    )
}

export default Card;