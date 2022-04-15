import React from "react";
import Card from "../Card/Card";
import CardListContainer from "./CardListStyles";
import FormInput from "../FormInput/FormInput";

const CardList = ({data}) => (
    <CardListContainer>
        {
            data.map(cardData => <Card key={cardData.id} cardData={cardData}/>)
        }
        <FormInput />
    </CardListContainer>
)

export default CardList;