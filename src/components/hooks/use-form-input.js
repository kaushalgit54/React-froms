import { useState } from "react";

const useFormInput = (validateValue)=>{
    const [enteredvalue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);
     
    const valueIsValid = validateValue(enteredvalue);
     const hasError  = !valueIsValid && isTouched;
    const valueChangedHandler = (event)=>{
       setEnteredValue(event.target.value);
    };
    const inputBlurHandler =()=>{
     setIsTouched(true);
    }

    const resetForm = ()=>{
      setEnteredValue('');
      setIsTouched(false);
    };
    return{
      value: enteredvalue,
      isValid:valueIsValid,
      hasError,
      valueChangedHandler,
      inputBlurHandler,
      resetForm,
    }
};
export default useFormInput;