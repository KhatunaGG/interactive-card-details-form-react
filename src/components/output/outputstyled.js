import styled from "styled-components"
// import Output from "./Output"


export const SOutput = styled.div`
  padding: 0 24px 10px 24px;
    color: #21092F;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;

    @media screen and (width > 375px) {
        padding: 0 59px 48px 59px;
    }
`

export const SOutputImage = styled.img`
    width: 80px;
    height: 80px;
    display: block;
`

export const SOutputText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`
export const AboutCard = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: #21092F;
`
export const OutputH2 = styled.h2`
    font-weight: 500;
    color: #21092F;
`
