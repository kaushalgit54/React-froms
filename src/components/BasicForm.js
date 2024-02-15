import useFormInput from "./hooks/use-form-input";

const BasicForm = (props) => {
  //For first-name
   const { value: enteredFirstName,
           isValid: enteredFirstNameIsValid,
           hasError : firstNameHasError,
           valueChangedHandler: firstNameChangeHandler,
           inputBlurHandler: firstNameBlurHandler,
           resetForm: resetFirstName,
         } = useFormInput(
     (value) => value.trim().length > 2 && value.trim() !== ""
   );
   //for last-name
   const { value: eneteredLastName,
           isValid: enteredLastNameIsValid,
           hasError : lastNameHasError,
           valueChangedHandler: lastNameChangeHandler,
           inputBlurHandler: lastNameBlurHandler,
           resetForm: resetLastName,
         } = useFormInput(
     (value) => value.trim().length > 2 && value.trim() !== ""
   );
   //for email-address
   const { value: enteredEmail,
           isValid: enteredEmailIsValid,
           hasError : emailHasError,
           valueChangedHandler: emailChangeHandler,
           inputBlurHandler: emailBlurHandler,
           resetForm: resetEmail,
         } = useFormInput(
     (value) => value.trim().length > 4 && value.includes('@'));

    let formIsValid = false;
     if(enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
      formIsValid = true;
     }

    
     const formSubmitHandler = (event)=>{
      event.preventDefault();

      if(!formIsValid) return;
      console.log(enteredFirstName, eneteredLastName, eneteredLastName);
      
       resetFirstName();
       resetLastName();
       resetEmail();
     }

     const firstNameInputClasses = firstNameHasError?'form-control invalid':'form-control'; 
     const lastNameInputClasses = lastNameHasError?'form-control invalid':'form-control'; 
     const emailInputClasses = emailHasError?'form-control invalid':'form-control'; 

    return (
      <form onSubmit={formSubmitHandler}>
        <div className='control-group'>
          <div className={firstNameInputClasses}>
            <label htmlFor='name'>First Name</label>
            <input type='text' id='name' onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler} value={enteredFirstName}/>
            {firstNameHasError && <p className="error-text">Please enter your name correctly</p>}
          </div>
          <div className={lastNameInputClasses}>
            <label htmlFor='name'>Last Name</label>
            <input type='text' id='name' onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} value={eneteredLastName} />
            {lastNameHasError && <p className="error-text">Please enter last name correctly</p>}
          </div>
        </div>
        <div className={emailInputClasses}>
          <label htmlFor='name'>E-Mail Address</label>
          <input type='text' id='name' onChange={emailChangeHandler} onBlur={emailBlurHandler} value={enteredEmail} />
          {emailHasError && <p className="error-text">Please enter email correctly</p>}
        </div>
        <div className='form-actions'>
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>
    );
  };
  
  export default BasicForm;
  