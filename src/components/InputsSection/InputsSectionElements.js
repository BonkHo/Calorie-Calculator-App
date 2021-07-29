import styled from "styled-components";

export const InputSectionContainer = styled.div`
	display: flex;
	background: orange;
	max-width: 100vw;
	height: 100vh;
	flex-direction: column;
	align-items: center;
`;

export const BannerMessage = styled.div`
	padding: 0.5em;
	padding-top: 1em;
	padding-bottom: 1em;
	font-size: 1.2em;
	text-align: center;
	color: white;
`;
export const FormInputsContainer = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
`;
export const FormInputTitle = styled.h1`
	font-size: 1.3em;
	color: black;
`;
export const FormInputs = styled.form``;

export const FormLabel = styled.label`
	color: white;
`;

export const FormInputRadio = styled.input`
	margin: 1em;
`;

export const FormInputsWrapper = styled.div``;

export const FormInputAge = styled.input`
	place-self: center;
	margin: 0.5em;
	width: 4vw;
	border-radius: 5px;
	border: 0.1em solid grey;
	text-align: center;
`;

export const FormInputHeight = styled.input`
	margin: 0.5em;
	width: 3vw;
	border-radius: 5px;
	border: 0.1em solid grey;
	text-align: center;
`;

export const FormInputWeight = styled.input`
	place-self: center;
	margin: 0.5em;
	width: 4vw;
	border-radius: 5px;
	border: 0.1em solid grey;
	text-align: center;
`;

export const FormSubmitButton = styled.button`
	margin-top: 1em;
	padding: 0.25em;
	width: auto;
	place-self: center;
	border-radius: 5px;
	border: 0.1em solid grey;
	white-space: normal;
	cursor: pointer;
`;

export const FormOutputContainer = styled.div``;

export const FormOutput = styled.h1`
	padding-top: 1em;
`;
