import React from 'react'
import { SOutput, SOutputImage, SOutputText, AboutCard } from './outputstyled'

const Output = ({ value }) => {
    return (
        <SOutput>
            <SOutputImage src="/assets/circle-mobile.svg" alt="" />
            <SOutputText className="text">
                <h2>THANK YOU!</h2>
                <AboutCard>We’ve added your card details</AboutCard>
            </SOutputText>
        </SOutput>
    )
}

export default Output