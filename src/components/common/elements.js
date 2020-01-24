import styled from "styled-components";
import { Form } from "formik";

export const Container = styled.div`
  width: 100%;
  max-width: 140rem;
  margin: 0 auto;
  height: 100%;
`;

export const FormWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 8rem 7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-mainDark);
  box-shadow: 0rem 0.5rem 3.5rem var(--shadow);
  background-color: #333333;
  color: white;
  
`;

export const StyledForm = styled(Form)`
  display: flex;
  position: relative;
  align-items: center;
  width: 50%;
  flex-direction: column;
  /* border: solid red 1px; */
  background-color: white;
  color: black;
  
`;
