import {useContext, useState} from "react";
import {ItemContextDispatch} from "../../contexts/ItemContext";
import {CardContainer} from "../Card/CardStyles";
import CustomButton from "../Styles/CustomButton";
import FormContainer from "./FormContainer";
import CustomInput from "../Styles/CustomInput";
import axios from "axios";
import {data} from "autoprefixer";

let lastId = 11;

const initialValue = {
    id:'',
    name:'',
    phone:'',
    email:'',
    address: {
        city:''
    }
};

const FormInput = () => {
    const [itemInfo,setItemInfo] = useState(initialValue);
    const dispatch = useContext(ItemContextDispatch);
    const {name,phone,email,address} = itemInfo;

    const handleSubmit = async () => {
        const res = await axios.post(`https://jsonplaceholder.typicode.com/users`,itemInfo);
        if(res.status >= 200 && res.status < 300) {
            dispatch({
                type:'add',
                payload:itemInfo
            });
        } else {
            throw new Error("Wrong Request");
        }
        setItemInfo(initialValue);
    }

    const handleChange = e => {
        const {name,value} = e.target;
        setItemInfo({
            ...itemInfo,
            id:lastId++,
            [name]:value
        });
    }

    const handleAddressChange = e => {
        setItemInfo({
            ...itemInfo,
            address: {
                ...itemInfo.address,
                city: e.target.value
            }
        })
    }

    return (
        <CardContainer>
            <FormContainer onSubmit={e => {
                e.preventDefault();
                handleSubmit();
            }}>
                <CustomInput name="name" value={name} placeholder="Enter name" onChange={handleChange} />
                <CustomInput name="phone" value={phone} placeholder="Enter phone" onChange={handleChange} />
                <CustomInput name="email" value={email} placeholder="Enter email" onChange={handleChange} />
                <CustomInput name="address" value={address.city} placeholder="Enter city" onChange={handleAddressChange} />
                <CustomButton type="submit">Submit</CustomButton>
            </FormContainer>
        </CardContainer>
    )
}

export default FormInput;