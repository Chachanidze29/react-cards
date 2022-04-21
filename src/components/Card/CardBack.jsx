import React, {useContext, useState} from "react";
import {ItemContextDispatch} from "../../contexts/ItemContext";
import CustomButton from "../Styles/CustomButton";
import FormContainer from "../FormInput/FormContainer";
import CustomInput from "../Styles/CustomInput";
import {CardBackContainer} from "./CardStyles";
import axios from "axios";

const CardBack = ({id,isFrontShown,name,phone,email,address})=> {
    const [item,setItem] = useState({
        id:id,
        name:name,
        phone:phone,
        email:email,
        address: {
            city:address.city
        }
    });
    const [editMode,setEditMode] = useState(false);

    const dispatch = useContext(ItemContextDispatch);

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

    const handleAddressChange = e => {
        setItem({
            ...item,
            address: {
                ...item.address,
                city:e.target.value
            }
        });
    }

    const handleDelete = async id => {
        const res = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        if(res.status === 200) {
            dispatch({
                type:'delete',
                payload:id
            });
        } else {
            throw new Error("Wrong Request");
        }
    }

    const handleEdit = async id => {
        const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,item);
        if(res.status === 200) {
            dispatch({
                type:'edit_submit',
                payload:id
            });
        } else {
            throw new Error("Wrong Request");
        }
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
                            <CustomInput name="city" defaultValue={address.city} onClick={e=>e.stopPropagation()} onChange={handleAddressChange}/>
                            <CustomButton type="submit" onClick={e=>{
                                e.stopPropagation();
                                handleEdit(id)
                            }}>Submit</CustomButton>
                            <CustomButton type="button" onClick={e =>{
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
                        <p>{address.city}</p>
                        <CustomButton onClick={()=>handleDelete(id)}>Delete User</CustomButton>
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
