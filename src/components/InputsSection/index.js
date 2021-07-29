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
        // Checks and stores age value
        let age = null;
        document.getElementsByName("age").forEach((radio) => {
            if (radio.checked) {
                age = radio.value;
            }
        });
        console.log("age: " + age);

        // Checks and stores gender value
        let gender = null;
        document.getElementsByName("gender").forEach((radio) => {
            if (radio.checked) {
                gender = radio.value;
            }
        });
        console.log("gender: " + gender);

        // Checks and stores height value
        let height =
            Number(document.getElementsByName("height-feet")[0].value * 12) +
            Number(document.getElementsByName("height-inch")[0].value);
        console.log("height: " + height);

        // Checks and stores weight value
        let weight = Number(document.getElementsByName("weight")[0].value);
        console.log("weight: " + weight);

        // Initialize multiplier and 1% of body weight to lose
        let multiplier = 1;
        let onePercent = (weight * 0.01 * 3500) / 7;
        let baseCalories = 0;

        // Base amount of calories burned per day by age
        if (age === "child") {
            baseCalories = 2300;
        } else if (age === "young-adult") {
            baseCalories = 2700;
        } else if (age === "adult") {
            baseCalories = 2500;
        } else if (age === "senior") {
            baseCalories = 2300;
        }

        // Multiplier for gender (21% decrease)
        if (gender === "female") {
            multiplier -= 0.21;
        }

        // Multiplier for height (2% per inch)
        multiplier += height * 0.001;
        console.log(multiplier);

        let calories = Math.trunc((baseCalories - onePercent) * multiplier);
        document.getElementById("calories").innerHTML =
            "Eat " + calories + " Calories per Day 🔥";
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
                    <FormLabel htmlFor="child">Under 17</FormLabel>
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
                    <FormInputHeight
                        type="text"
                        name="height-feet"
                        id="height-feet"
                    ></FormInputHeight>
                    <FormLabel htmlFor="height-feet">Feet</FormLabel>
                    <FormInputHeight
                        type="text"
                        name="height-inch"
                        id="height-inch"
                    ></FormInputHeight>
                    <FormLabel htmlFor="height-inch">Inches</FormLabel>
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
