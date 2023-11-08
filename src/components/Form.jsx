import style from './Form.module.css';
import '../index.css';
import { useState } from 'react';

const Form = () => {
  const [email, setEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(true);

  const [password, setPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  const changeEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const changePasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const emailIsValid = email.includes('@');
    const passwordIsValid = password.trim().length >= 6;
    setEmailIsValid(emailIsValid);
    setPasswordIsValid(passwordIsValid);
    if (!emailIsValid || !passwordIsValid) {
      return;
    }
    alert('Successfully logged-in!');
  };
  return (
    <form className={style.flex} onSubmit={submitHandler}>
      <div className={style.flex}>
        <label htmlFor="text" className={style.label}>
          {'Email'}
        </label>
        <input
          className={style.input}
          type="email"
          name="Email"
          placeholder="Email"
          onChange={changeEmailHandler}
        />
      </div>

      <div className={style.flex}>
        <label htmlFor="text" className={style.label}>
          {'Pasword'}
        </label>
        <input
          className={style.input}
          type="password"
          name="password"
          placeholder="Password"
          onChange={changePasswordHandler}
        />
      </div>
      <button type="submit" className={style.button}>
        Submit
      </button>
    </form>
  );
};

export default Form;
