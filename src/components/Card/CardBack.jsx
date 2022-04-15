import React, {useContext, useState} from "react";
import {ItemContextDispatch} from "../../contexts/ItemContext";
import CustomButton from "../Styles/CustomButton";
import FormContainer from "../FormInput/FormContainer";
import CustomInput from "../Styles/CustomInput";
import {CardBackContainer} from "./CardStyles";

const CardBack = ({id,isFrontShown,name,phone,email,address,postalZip,region,country})=> {
    const dispatch = useContext(ItemContextDispatch);

    const [item,setItem] = useState({
        id:id,
        name:name,
        phone:phone,
        email:email,
        address:address,
        postalZip:postalZip,
        region:region,
        country:country
    });
    const [editMode,setEditMode] = useState(false);

    const handleSubmit = e => {
        dispatch({
            type:'edit_submit',
            payload:item
        })
        setEditMode(false);
    }

    const handleChange = e => {
        const {name,value} = e.target;

        setItem({
            ...item,
            [name]:value
        })
    }

    return (
        <CardBackContainer isFrontShown={isFrontShown}>
            {
                editMode ?
                    (
                        <FormContainer onSubmit={handleSubmit}>
                            <CustomInput name="name" defaultValue={name} onClick={e=>e.stopPropagation()} onChange={handleChange}/>
                            <CustomInput name="phone" defaultValue={phone} onClick={e=>e.stopPropagation()} onChange={handleChange}/>
                            <CustomInput name="email" defaultValue={email} onClick={e=>e.stopPropagation()} onChange={handleChange}/>
                            <CustomInput name="address" defaultValue={address} onClick={e=>e.stopPropagation()} onChange={handleChange}/>
                            <CustomInput name="postalZip" defaultValue={postalZip} onClick={e=>e.stopPropagation()} onChange={handleChange}/>
                            <CustomInput name="region" defaultValue={region} onClick={e=>e.stopPropagation()} onChange={handleChange}/>
                            <CustomInput name="country" defaultValue={country} onClick={e=>e.stopPropagation()} onChange={handleChange}/>
                            <CustomButton type="submit" onClick={e => {
                                e.stopPropagation();
                                dispatch({
                                    type:'edit_submit',
                                    payload:item
                                })
                            }}>Submit</CustomButton>
                            <CustomButton type="submit" onClick={e =>{
                                e.stopPropagation();
                                setEditMode(false);
                            }}>Cancel</CustomButton>
                        </FormContainer>
                    )
                    :
                    (
                    <div>
                        <p>{name}</p>
                        <p>{phone}</p>
                        <p>{email}</p>
                        <p>{address}</p>
                        <p>{postalZip}</p>
                        <p>{region}</p>
                        <p>{country}</p>
                        <CustomButton
                            isDelete={true}
                            onClick={e => {
                                dispatch({
                                    type:'delete',
                                    payload:id
                                })
                            }}
                        >Delete</CustomButton>
                        <CustomButton onClick={e=> {
                            e.stopPropagation();
                            setEditMode(true);
                        }}>Edit</CustomButton>
                    </div>
                    )
            }
        </CardBackContainer>
    )
}

export default CardBack;
