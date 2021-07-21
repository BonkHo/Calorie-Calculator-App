import React from "react";
import {
	InputSectionContainer,
	BannerMessage,
	FormInputsContainer,
	FormLabel,
	FormInput,
} from "./InputsSectionElements";

const InputSection = () => {
	return (
		<InputSectionContainer>
			<BannerMessage>
				Calculates calories to lose 1% of body weight per week.
			</BannerMessage>
			<FormInputsContainer>
				<FormLabel for='age'>Age</FormLabel>
				<FormInput></FormInput>
				<FormLabel for='gender'>Gender</FormLabel>
				<FormInput></FormInput>
				<FormLabel for='height'>Height</FormLabel>
				<FormInput></FormInput>
				<FormLabel for='weight'>Weight</FormLabel>
				<FormInput></FormInput>
			</FormInputsContainer>
		</InputSectionContainer>
	);
};

export default InputSection;
