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
    FormOutputContainer,
    FormOutput,
} from "./InputsSectionElements";

const InputSection = () => {
    function calculateCalories() {
        let age = null;
        document.getElementsByName("age").forEach((radio) => {
            if (radio.checked) {
                age = radio.value;
            }
        });
        console.log("age: " + age);

        let gender = null;
        document.getElementsByName("gender").forEach((radio) => {
            if (radio.checked) {
                gender = radio.value;
            }
        });
        console.log("gender: " + gender);

        let height =
            Number(document.getElementsByName("height-feet")[0].value * 12) +
            Number(document.getElementsByName("height-inch")[0].value);
        console.log("height: " + height);

        let weight = Number(document.getElementsByName("weight")[0].value);
        console.log("weight: " + weight);

        let calories = height * weight;
        document.getElementById("calories").innerHTML =
            calories + " Calories 🔥";
    }

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
                        name="age"
                        value="child"
                        id="child"
                    ></FormInputRadio>
                    <FormLabel htmlFor="child">0-17</FormLabel>
                    <FormInputRadio
                        type="radio"
                        name="age"
                        value="young-adult"
                        id="young-adult"
                    ></FormInputRadio>
                    <FormLabel htmlFor="young-adult">18-35</FormLabel>
                    <FormInputRadio
                        type="radio"
                        name="age"
                        value="adult"
                        id="adult"
                    ></FormInputRadio>
                    <FormLabel htmlFor="young-adult">36-55</FormLabel>
                    <FormInputRadio
                        type="radio"
                        name="age"
                        value="senior"
                        id="senior"
                    ></FormInputRadio>
                    <FormLabel htmlFor="adult">55+</FormLabel>
                </FormInputs>

                <FormInputTitle>Gender</FormInputTitle>
                <FormInputs>
                    <FormInputRadio
                        type="radio"
                        name="gender"
                        value="male"
                        id="male"
                    ></FormInputRadio>
                    <FormLabel htmlFor="male">Male</FormLabel>
                    <FormInputRadio
                        type="radio"
                        name="gender"
                        value="female"
                        id="female"
                    ></FormInputRadio>
                    <FormLabel htmlFor="female">Female</FormLabel>
                </FormInputs>

                <FormInputTitle>Height</FormInputTitle>
                <FormInputsWrapper>
                    <FormLabel htmlFor="height-feet">Feet</FormLabel>
                    <FormInputHeight
                        type="text"
                        name="height-feet"
                        id="height-feet"
                    ></FormInputHeight>
                    <FormLabel htmlFor="height-inch">Inches</FormLabel>
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
                    <FormLabel htmlFor="weight">Lbs</FormLabel>
                </FormInputsWrapper>

                <FormSubmitButton onClick={calculateCalories}>
                    Calculate Calories
                </FormSubmitButton>
            </FormInputsContainer>
            <FormOutputContainer>
                <FormOutput id="calories"></FormOutput>
            </FormOutputContainer>
        </InputSectionContainer>
    );
};

export default InputSection;
