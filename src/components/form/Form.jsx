import React, { useRef } from 'react'
import Output from '../output/Output';
import "../../App.css";

import {
    Form_div, Input__item_div, Label, Input, Input__wrapper,
    Exp__detales, Exp__month_input, Exp__inner, Month_div, Exp__label, Btn_button, Small
} from "./formstyled";



import { InputMask } from '@react-input/mask';
// import * as masked from "masked-credit-card-number";
// import maskedCreditCardnumber from 'masked-credit-card-number';



const Form = ({ formValidation, value, handleChange, error, show }) => {

const inputRef = useRef(null)
console.log(inputRef.current)

    return (
        <Form_div>
            {show ? <Output /> : <Input__wrapper>
                <Input__item_div>
                    <Label htmlFor="cardholder">cardholder name</Label>
                    <Input type="text" name="cardholder" id="cardholder" required placeholder="e.g. Jane Appleseed"
                        onChange={handleChange}
                        value={value.cardholder}
                    />
                    {error.cardholder && <Small>{error.cardholder}</Small>}
                </Input__item_div>
                <Input__item_div>
                    <Label htmlFor="cardnumber">card number</Label>


                    <Input
                        // mask='9999 9999 9999 9999'
                        mask='9999 9999 9999 9999'
                        maskchar='_'



                        className='input' type="number" name="cardnumber" id="cardnumber" required placeholder="e.g. 1234 5678 9123 0000" maxLength={19}
                        onChange={handleChange}
                        value={value.cardnumber}
                        ref={inputRef}

                    />

                    {error.cardnumber && <Small>{error.cardnumber}</Small>}


                </Input__item_div>



                <Exp__inner className="exp__inner">
                    <Exp__detales>
                        <Month_div>
                            <Exp__label htmlFor="">Exp. Date </Exp__label>
                            <Exp__month_input type="number" maxLength={2} placeholder="MM" name='month'
                                onChange={handleChange}
                                value={value.month}
                            />
                            {error.month && <Small>{error.month}</Small>}
                        </Month_div>
                        <Month_div>
                            <Exp__label htmlFor="" >(MM/YY)</Exp__label>
                            <Exp__month_input withoutlable='true' type="number" maxLength={2} placeholder="YY" name='year'
                                onChange={handleChange}
                                value={value.year}
                            />
                            {error.year && <Small>{error.year}</Small>}
                        </Month_div>
                        <Month_div >
                            <Exp__label htmlFor="">CVC</Exp__label>
                            <Exp__month_input type="number" maxLength={3} placeholder="e.g. 123" name='cvc'
                                onChange={handleChange}
                                value={value.cvc}
                            />
                            {error.cvc && <Small>{error.cvc}</Small>}
                        </Month_div>
                    </Exp__detales>
                </Exp__inner>
            </Input__wrapper>}
            <Btn_button type="submit"
                onClick={formValidation}
            >Confirm</Btn_button>
        </Form_div>
    )
}

export default Form


