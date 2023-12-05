// In energy-dashboard/src/App.js
import React, { useState } from 'react';
import styled from 'styled-components';
import InputForm from './components/InputForm';

const AppContainer = styled.div`
  background-image: url(/background.jpg);
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const ResultContainer = styled.div`
  margin-top: 20px;

`;

const App = () => {
  const [result, setResult] = useState(null);

  const handleSubmit = async (formData) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/process_data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <AppContainer>
      <h1 style={{ color: 'white' }}>Energy Dashboard</h1>
      <InputForm onSubmit={handleSubmit} />
      {/* Display result if available */}
      {result && Object.keys(result).length > 0 && (
        <ResultContainer>
          <h2>Result:</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </ResultContainer>
      )}
    </AppContainer>
  );
};

export default App;
