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
    FormInputAge,
    FormInputHeight,
    FormInputWeight,
    FormSubmitButton,
    FormOutputContainer,
    FormOutput,
} from "./InputsSectionElements";

const InputSection = () => {
    function calculateCalories() {
        // Checks and stores gender value
        let gender = null;
        document.getElementsByName("gender").forEach((radio) => {
            if (radio.checked) {
                gender = radio.value;
            }
        });
        console.log("gender: " + gender);

        // Checks and stores activity level
        let activity = null;
        document.getElementsByName("activity").forEach((radio) => {
            if (radio.checked) {
                activity = radio.value;
            }
        });
        console.log("activity: " + activity);

        // Checks and stores age value
        let age = Number(document.getElementsByName("age")[0].value);
        console.log("age: " + age);

        // Checks and stores height value
        let height =
            Number(document.getElementsByName("height-feet")[0].value) +
            Number(document.getElementsByName("height-inch")[0].value / 12);
        console.log("height: " + height);

        // Checks and stores weight value
        let weight = Number(document.getElementsByName("weight")[0].value);
        console.log("weight: " + weight);

        // Sets the activity multiplier
        let activityMult = 0;
        if (activity === "low") {
            activityMult = 1.3;
        } else if (activity === "light") {
            activityMult = 1.5;
        } else if (activity === "moderate") {
            activityMult = 1.7;
        } else if (activity === "active") {
            activityMult = 1.9;
        } else if (activity === "extreme") {
            activityMult = 2.1;
        }

        // Does calculations based off of BMR
        let calories = 0;
        if (gender === "male") {
            calories = 66 + 6.2 * weight + 12.7 * height - 6.76 * age;
            calories *= activityMult;
        } else if (gender === "female") {
            calories = 655.1 + 4.35 * weight + 4.7 * height - 4.7 * age;
            calories *= activityMult;
        }

        // Calculates caloric deficit to lose 1% of weight per week
        let onePercent = (weight * 0.01 * 3500) / 7;
        console.log(onePercent);

        // Returns the amount of calories
        document.getElementById("calories").innerHTML =
            "Eat " + Math.trunc(calories) + " Calories per Day 🔥";
    }

    return (
        <InputSectionContainer>
            <BannerMessage>
                Calculates calories to lose 1% of body weight per week.
            </BannerMessage>
            <FormInputsContainer>
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

                <FormInputTitle>Activity Level</FormInputTitle>
                <FormInputs>
                    <FormInputRadio
                        type="radio"
                        name="activity"
                        value="low"
                        id="low"
                    ></FormInputRadio>
                    <FormLabel htmlFor="male">None</FormLabel>
                    <FormInputRadio
                        type="radio"
                        name="activity"
                        value="light"
                        id="light"
                    ></FormInputRadio>
                    <FormLabel htmlFor="female">1-3 days</FormLabel>
                    <FormInputRadio
                        type="radio"
                        name="activity"
                        value="moderate"
                        id="moderate"
                    ></FormInputRadio>
                    <FormLabel htmlFor="female">4-5 days</FormLabel>
                    <FormInputRadio
                        type="radio"
                        name="activity"
                        value="active"
                        id="active"
                    ></FormInputRadio>
                    <FormLabel htmlFor="female">6-7 days</FormLabel>
                    <FormInputRadio
                        type="radio"
                        name="activity"
                        value="extreme"
                        id="extreme"
                    ></FormInputRadio>
                    <FormLabel htmlFor="female">Extreme</FormLabel>
                </FormInputs>

                <FormInputTitle>Age</FormInputTitle>
                <FormInputs>
                    <FormInputAge
                        type="text"
                        name="age"
                        id="age"
                    ></FormInputAge>
                    <FormLabel htmlFor="age"></FormLabel>
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
