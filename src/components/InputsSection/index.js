import React from "react";
import {
    InputSectionContainer,
    BannerMessage,
    FormInputsContainer,
    FormInputTitle,
    FormInputs,
    FormInputRadio,
    FormInputsWrapper,
    FormLabel,
    FormInputHeight,
    FormInputWeight,
    FormSubmitButton,
} from "./InputsSectionElements";

const InputSection = () => {
    return (
        <InputSectionContainer>
            <BannerMessage>
                Calculates calories to lose 1% of body weight per week.
            </BannerMessage>
            <FormInputsContainer>
                <FormInputTitle>Age</FormInputTitle>
                <FormInputs>
                    <FormInputRadio
                        type="radio"
                        name="choice"
                        value="child"
                        id="choice-child"
                    ></FormInputRadio>
                    <FormLabel for="choice-child">0-17</FormLabel>
                    <FormInputRadio
                        type="radio"
                        name="choice"
                        value="young-adult"
                        id="choice-young-adult"
                    ></FormInputRadio>
                    <FormLabel for="choice-young-adult">18-35</FormLabel>
                    <FormInputRadio
                        type="radio"
                        name="choice"
                        value="adult"
                        id="choice-adult"
                    ></FormInputRadio>
                    <FormLabel for="choice-young-adult">36-55</FormLabel>
                    <FormInputRadio
                        type="radio"
                        name="choice"
                        value="senior"
                        id="choice-senior"
                    ></FormInputRadio>
                    <FormLabel for="choice-young-adult">55+</FormLabel>
                </FormInputs>
                <FormInputTitle>Gender</FormInputTitle>
                <FormInputs>
                    <FormInputRadio
                        type="radio"
                        name="choice"
                        value="male"
                        id="choice-male"
                    ></FormInputRadio>
                    <FormLabel for="choice-young-adult">Male</FormLabel>
                    <FormInputRadio
                        type="radio"
                        name="choice"
                        value="female"
                        id="choice-female"
                    ></FormInputRadio>
                    <FormLabel for="choice-young-adult">Female</FormLabel>
                </FormInputs>

                <FormInputTitle>Height</FormInputTitle>
                <FormInputsWrapper>
                    <FormLabel for="height-feet">Feet</FormLabel>
                    <FormInputHeight
                        type="text"
                        name="height-feet"
                        id="height-feet"
                    ></FormInputHeight>
                    <FormLabel for="height-inch">Inches</FormLabel>
                    <FormInputHeight
                        type="text"
                        name="height-inch"
                        id="height-inch"
                    ></FormInputHeight>
                </FormInputsWrapper>
                <FormInputTitle>Weight</FormInputTitle>
                <FormInputsWrapper>
                    <FormInputWeight
                        type="text"
                        name="weight"
                        id="weight"
                    ></FormInputWeight>
                    <FormLabel for="height-inch">Lbs</FormLabel>
                </FormInputsWrapper>
                <FormSubmitButton onClick="#">
                    Calculate Calories
                </FormSubmitButton>
            </FormInputsContainer>
        </InputSectionContainer>
    );
};

export default InputSection;
