export const LOGIN_FORM_NAME = 'Login';
export const REGISTER_FORM_NAME = 'Register';

export const registerFormConfig = {
  link: '/register',
  title: 'Register',
};

export const loginFormConfig = {
  link: '/login',
  title: 'Login',
};

export const registerFormInputs = [
  { inputTitle: 'Email', type: 'text' },
  { inputTitle: 'Password', type: 'password' },
  { inputTitle: 'Username', type: 'text' },
  { inputTitle: 'Age', type: 'text' },
];

export const loginFormInputs = [
  { inputTitle: 'Email', type: 'text' },
  { inputTitle: 'Password', type: 'password' },
];
