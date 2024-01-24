import "./App.css";
// import desktop from "../public/assets/bg-desktop-color.png";
import desktop from "../src/assets/bg-desktop-color.png";
// import mobile from "../public/assets/bg-mobile-color.png";
import mobile from "../src/assets/bg-mobile-color.png";
import Form from "./components/form/Form";
import Card from "./components/card/Card";
import { useState } from "react";
import { SMain } from "./styled";


// -----------------------------------------------
import { InputMask } from "@react-input/mask";
// import  InputMask from "react-input-mask";
// import * as masked from "masked-credit-card-number";
// import maskedCreditCardnumber from "masked-credit-card-number";
// -----------------------------------------------



function App() {
  const [show, setShow] = useState(false);
  const [submit, setSubmit] = useState(false)
  const [inputWrapper, setInputWrapper] = useState(false)
  const [error, setError] = useState({});
  const [value, setValue] = useState({
    cardholder: '',
    cardnumber: '',
    month: '',
    year: '',
    cvc: ''
  })



  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    })
  }

  const getErrors = (value) => {
    let error = {};
    if (!value.cardholder) {
      error.cardholder = 'Wrong format, letters only'
    }
    if (!value.cardnumber) {
      error.cardnumber = 'Wrong format, numbers only'
    }
    else if (value.cardnumber.length !== 19) {
      error.cardnumber = 'not a valid...'
    }
    if (!value.month) {
      error.month = 'Can’t be blank'
    } else if (value.month.length !== 2 || + value.month > 12 || + value.month < 0) {
      error.month = 'not a valid...'
    }
    //     else {
    //   error.month = ''
    // }


    if (!value.year) {
      error.year = 'Can’t be blank';


    } else if (value.year.length !== 2 || +value.year < 0) {
      error.year = 'Not a valid expiration year';
    } 
    // else {
    //   error.year = ''
    // }

    if (!value.cvc) {
      error.cvc = 'Can’t be blank'
    } else if (value.cvc.length !== 3) {
      error.cvc = 'not a valid...'
    }
    return error
  }

  const formValidation = (e) => {
    e.preventDefault();
    setError(getErrors(value))


    if (value.cardholder.length !== '' &&
      value.cardnumber.length !== '' &&
      value.month.length !== '' &&
      value.year.length !== '' &&
      value.cvc.length !== ''
    ) {
      setSubmit(!submit)
    }

    if (submit === true) {
      setShow(!show)
      setInputWrapper(true)
      
    }
  }


  return (
    <div className="App">
      <picture>
        <source media="(width > 375px)" srcSet={desktop} />
        <img src={mobile} alt="" />
      </picture>
      <SMain>
        <Card
          value={value}
        />
        <Form
          formValidation={formValidation}
          setValue={setValue}
          value={value}
          handleChange={handleChange}
          error={error}
          submit={submit}
          show={show}
          setsShow={setShow}
          inputWrapper={inputWrapper}
          // InputMask={InputMask}
       
        />
      </SMain>
    </div>
  );
}

export default App;


