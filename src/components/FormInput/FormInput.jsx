import {useContext, useState} from "react";
import {ItemContextDispatch} from "../../contexts/ItemContext";
import {CardContainer} from "../Card/CardStyles";
import CustomButton from "../Styles/CustomButton";
import FormContainer from "./FormContainer";
import CustomInput from "../Styles/CustomInput";

let lastId = 5;

const initialValue = {
    name:'',
    phone:'',
    email:'',
    address:'',
    postalZip:'',
    region:'',
    country:'',
};

const FormInput = () => {
    const [itemInfo,setItemInfo] = useState(initialValue);
    const dispatch = useContext(ItemContextDispatch);
    const {name,phone,email,address,postalZip,region,country} = itemInfo;

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({
            type:'add',
            payload:itemInfo
        })
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

    return (
        <CardContainer>
            <FormContainer onSubmit={handleSubmit}>
                <CustomInput name="name" value={name} placeholder="Enter name" onChange={handleChange} />
                <CustomInput name="phone" value={phone} placeholder="Enter phone" onChange={handleChange} />
                <CustomInput name="email" value={email} placeholder="Enter email" onChange={handleChange} />
                <CustomInput name="address" value={address} placeholder="Enter address" onChange={handleChange} />
                <CustomInput name="postalZip" value={postalZip} placeholder="Enter postalZip" onChange={handleChange} />
                <CustomInput name="region" value={region} placeholder="Enter region" onChange={handleChange} />
                <CustomInput name="country" value={country} placeholder="Enter country" onChange={handleChange} />
                <CustomButton type="submit">Submit</CustomButton>
            </FormContainer>
        </CardContainer>
    )
}

export default FormInput;