import React from 'react'

import {
    Card_section, Card_div, Back_div, Front_div, Oval_img, Frunt__detales_div,
    Card__holder_div, Name_p, Date_p, Num__h2, Cvc_p
} from "./cardstyled";

const Card = ({value}) => {

    return (
        <Card_section>
            <Card_div>
                <Back_div >
                    <Cvc_p>{value.cvc ?  value.cvc : '000'}</Cvc_p>
                </Back_div>
                <Front_div >
                    <Oval_img src="/assets/ovals.svg" alt="" />
                    <Frunt__detales_div>
                        <Num__h2>{value.cardnumber ? value.cardnumber : '0000 0000 0000 0000'}</Num__h2>
                        <Card__holder_div>
                            <Name_p>{value.cardholder ? value.cardholder :'Card Holder'}</Name_p>
                            <Date_p>{value.month ? value.month : '00'}/{value.year ? value.year : '00'}</Date_p>
                        </Card__holder_div>
                    </Frunt__detales_div>
                </Front_div>
            </Card_div>
        </Card_section>
    )
}

export default Card