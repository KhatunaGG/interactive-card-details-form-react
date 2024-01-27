import styled from "styled-components"



export const Card_section = styled.div`
    width: 100%;
    height: 100%;

`

export const Card_div = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    
    @media screen and (width > 375px) {
        justify-content: flex-start;
    }
`

export const Back_div = styled.div`
    position: relative;
    background-image: url(/assets/card-back-mobile.png);
    background-size: cover; 
    background-repeat: no-repeat;
    width: 286px;
    height: 157px; 
    z-index: 3;
    border-radius: 6px;
    margin-left: 56px;

    @media screen and (width > 375px) {
        width: 447px;
        height: 245px;
        order: 2;
        margin-left: 94px;
        margin-top: 37px;
    }
`

export const Card__front_div = styled(Card_div)`
    justify-content: flex-start;
`

export const Front_div = styled.div`
    background-image: url(/assets/card-front-mobile.png);
    background-size: cover; 
    background-repeat: no-repeat;
    width: 286px;
    height: 157px; 
    z-index: 3;
    border-radius: 6px;
    margin-top: -63px;
    padding: 17.6px 20.89px 19.6px 19px ;
    display: flex;
    flex-direction: column;
    gap: 37px;

    @media screen and (width > 375px) {
        width: 447px;
        height: 245px;
        order: 1;
        margin-top: 0;
        gap: 64px;
    }
`

export const Oval_img = styled.img`
    width: 54px;
    height: 30px;

    @media screen and (width > 375px) {
        width: 84px;
        height: 47px;
    }
`

export const Frunt__detales_div = styled.div`
    display: flex;
    flex-direction: column;
    gap: 17px;

    @media screen and (width > 375px) {
        gap: 25.5px;
    }
`

export const Num__h2 = styled.h2`
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 2.2px;
   
    @media screen and (width > 375px) {
        font-size: 31px;
        letter-spacing: 2.5px;
    }
`

export const Card__holder_div = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Name_p = styled.p`
    font-size: 9px;
    font-weight: 500;
    letter-spacing: 1.29px; 
    text-transform: uppercase;

    @media screen and (width > 375px) {
        font-size: 18px;
    }
`

export const Date_p = styled.p`
    font-size: 9px;
    font-weight: 500;
    letter-spacing: 1.29px; 
    text-transform: uppercase;

    @media screen and (width > 375px) {
        font-size: 18px;
    }
`

export const Cvc_p = styled.p`
    font-size: 9px;
    font-weight: 500;
    letter-spacing: 1.29px; 
    position: absolute;
    top: 76px;
    right: 35px;

    @media screen and (width > 375px) {
        font-size: 18px;
        top: 114px;
        right: 55px;
    }
`