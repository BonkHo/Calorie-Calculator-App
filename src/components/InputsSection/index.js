import React, { useState } from "react";
import firebase from "../../config/firebase";
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
    const [gender, setGender] = useState(null);
    const [activity, setActivity] = useState(null);
    const [age, setAge] = useState(null);
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [calories, setCalories] = useState(null);

    function calculateCalories() {
        let calcHeight = height.feet + height.inch / 12;

        console.log("gender: " + gender);
        console.log("activity: " + activity);
        console.log("age: " + age);
        console.log("height: " + height);
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
            calories = 66 + 6.2 * weight + 12.7 * calcHeight - 6.76 * age;
            calories *= activityMult;
        } else if (gender === "female") {
            calories = 655.1 + 4.35 * weight + 4.7 * calcHeight - 4.7 * age;
            calories *= activityMult;
        }

        // Calculates caloric deficit to lose 1% of weight per week
        let onePercent = (weight * 0.01 * 3500) / 7;
        console.log(onePercent);

        setCalories(calories - onePercent);

        const userID = 1;

        let userObject = {
            gender,
            activity,
            age,
            height,
            weight,
            calories,
        };

        firebase
            .database()
            .ref("userData/" + userID)
            .set({
                ...userObject,
            });

        firebase
            .database()
            .ref("userData/" + userID)
            .get()
            .then((resp) => {
                return resp.val();
            })
            .then(console.log);
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
                        onChange={(e) => setGender(e.target.value)}
                    ></FormInputRadio>
                    <FormLabel htmlFor="male">Male</FormLabel>
                    <FormInputRadio
                        type="radio"
                        name="gender"
                        value="female"
                        id="female"
                        onChange={(e) => setGender(e.target.value)}
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
                        onChange={(e) => setActivity(e.target.value)}
                    ></FormInputRadio>
                    <FormLabel htmlFor="low">None</FormLabel>
                    <FormInputRadio
                        type="radio"
                        name="activity"
                        value="light"
                        id="light"
                        onChange={(e) => setActivity(e.target.value)}
                    ></FormInputRadio>
                    <FormLabel htmlFor="light">1-3 days</FormLabel>
                    <FormInputRadio
                        type="radio"
                        name="activity"
                        value="moderate"
                        id="moderate"
                        onChange={(e) => setActivity(e.target.value)}
                    ></FormInputRadio>
                    <FormLabel htmlFor="moderate">4-5 days</FormLabel>
                    <FormInputRadio
                        type="radio"
                        name="activity"
                        value="active"
                        id="active"
                        onChange={(e) => setActivity(e.target.value)}
                    ></FormInputRadio>
                    <FormLabel htmlFor="active">6-7 days</FormLabel>
                    <FormInputRadio
                        type="radio"
                        name="activity"
                        value="extreme"
                        id="extreme"
                        onChange={(e) => setActivity(e.target.value)}
                    ></FormInputRadio>
                    <FormLabel htmlFor="extreme">Extreme</FormLabel>
                </FormInputs>

                <FormInputTitle>Age</FormInputTitle>
                <FormInputs>
                    <FormInputAge
                        type="text"
                        name="age"
                        id="age"
                        onChange={(e) => {
                            setAge(parseInt(e.target.value));
                        }}
                    ></FormInputAge>
                    <FormLabel htmlFor="age"></FormLabel>
                </FormInputs>

                <FormInputTitle>Height</FormInputTitle>
                <FormInputsWrapper>
                    <FormInputHeight
                        type="text"
                        name="height-feet"
                        id="height-feet"
                        onChange={(e) =>
                            setHeight({ ...height, feet: e.target.value })
                        }
                    ></FormInputHeight>
                    <FormLabel htmlFor="height-feet">Feet</FormLabel>
                    <FormInputHeight
                        type="text"
                        name="height-inch"
                        id="height-inch"
                        onChange={(e) =>
                            setHeight({ ...height, inch: e.target.value })
                        }
                    ></FormInputHeight>
                    <FormLabel htmlFor="height-inch">Inches</FormLabel>
                </FormInputsWrapper>

                <FormInputTitle>Weight</FormInputTitle>
                <FormInputsWrapper>
                    <FormInputWeight
                        type="text"
                        name="weight"
                        id="weight"
                        onChange={(e) => {
                            setWeight(parseInt(e.target.value));
                        }}
                    ></FormInputWeight>
                    <FormLabel htmlFor="weight">Lbs</FormLabel>
                </FormInputsWrapper>

                <FormSubmitButton onClick={calculateCalories}>
                    Calculate Calories
                </FormSubmitButton>
            </FormInputsContainer>
            <FormOutputContainer>
                {calories && (
                    <FormOutput id="calories">
                        Eat {Math.trunc(calories)} Calories per Day 🔥
                    </FormOutput>
                )}
            </FormOutputContainer>
        </InputSectionContainer>
    );
};

export default InputSection;
