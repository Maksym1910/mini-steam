import { registrationValidator } from './authValidation';

export const register = async (inputValues) => {
  const registrationData = {
    email: inputValues.Email,
    password: inputValues.Password,
    username: inputValues.Username,
    age: inputValues.Age,
  };

  const validationResult = await registrationValidator(registrationData);
  if (validationResult instanceof Error) {
    alert(validationResult);
    return;
  }

  const response = await fetch('http://localhost:8080/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(registrationData),
  });

  const { message } = await response.json();
  alert(message);
};

export const login = async (inputValues, dispatch, authAction) => {
  const loginData = {
    email: inputValues.Email,
    password: inputValues.Password,
  };

  const response = await fetch('http://localhost:8080/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginData),
  });
  const responseData = await response.json();

  if (response.status === 400) {
    return alert('Invalid email or password');
  }

  if (response.status === 200) {
    const { jwtToken } = responseData;
    localStorage.setItem('AUTH', JSON.stringify(jwtToken));
    dispatch(authAction(true));
  }
};
