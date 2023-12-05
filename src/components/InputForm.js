// In energy-dashboard/src/components/InputForm.js
import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: black; /* Set text color to black */
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 10px;
`;

const Select = styled.select`
  padding: 8px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
`;

const InputForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    month: '',
    year: '',
    generationOutage: '',
    category: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label>
        Month:
        <Input type="text" name="month" value={formData.month} onChange={handleChange} />
      </Label>
      <Label>
        Year:
        <Input type="text" name="year" value={formData.year} onChange={handleChange} />
      </Label>
      <Label>
        Generation Outage:
        <Input
          type="text"
          name="generationOutage"
          value={formData.generationOutage}
          onChange={handleChange}
        />
      </Label>
      <Label>
        Category:
        <Select name="category" value={formData.category} onChange={handleChange}>
          <option value="">Select Category</option>
          <option value="wind generation">Wind Generation</option>
          <option value="solar generation">Solar Generation</option>
          <option value="hydro generation">Hydro Generation</option>
          <option value="coal generation">Coal Generation</option>
          <option value="ignite gas, naphtha, diesel generation">
            Ignite Gas, Naphtha, Diesel Generation
          </option>
          <option value="nuclear generation">Nuclear Generation</option>
        </Select>
      </Label>
      <Button type="submit">Submit</Button>
    </FormContainer>
  );
};

export default InputForm;
