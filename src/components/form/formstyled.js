import styled from "styled-components"

export const Form_div = styled.div`
    padding-left: 8px;
    padding-right: 8px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 28px;

    @media screen and (width > 375px) {
        margin-top: 88px;
    }
`

export const Input__item_div = styled.div`
    /* display: ${({flexItem}) => flexItem ? 'flex' : ''}; */
    width: 100%;
    position: relative;
`

export const Label = styled.div`
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    width: 100%;
    margin-bottom: 9px;
    color: #21092F;
`


export const Input__wrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    align-items: center;
`

export const Input = styled.input`
    width: 100%;
    padding: 11px 0 11px 16px;
    border: none;
    outline: none;
    border-radius: 8px;
    border: 1px solid #DFDEE0;
`

export const Exp__detales = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-items: flex-start;
    gap: 9px;
`

export const Exp__month_input = styled.input`
    width: 102px;
    margin-top: 9px;
    padding: 11px 0 11px 16px;
    border-radius: 8px;
    border: none;
    outline: none;
    border: 1px solid #DFDEE0;
    position: relative;

    @media screen and (width > 375px) {
        width: 110px;
    }
`

export const Month_div = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: relative;
`

export const Exp__inner = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 11px;
`

export const Exp__label = styled.div`
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    color: #21092F;
    display: flex;
    justify-content: flex-start;
    gap: 8px;
    margin-top: 9px;
`

export const Cvc_div = styled.div`
    width: 100%;
    position: relative;
`

export const Btn_button = styled.button`
    padding: 15px 0;
    background-color: #21092F;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 8px;
    font-size: 14px;
`

export const Small = styled.small`
    font-size: 8px;
    color: red;
    position: absolute;
    bottom: -11px;
    left: 5px;
`

export const SmallMonthDiv = styled(Small)