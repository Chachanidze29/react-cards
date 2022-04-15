import CustomInputContainer from "./CustomInputContainer";

const CustomInput = (props)=> (
    <CustomInputContainer {...props} required={true} autoComplete="off" />
)

export default CustomInput;