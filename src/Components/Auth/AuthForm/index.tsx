import React, { useEffect, useState } from 'react';
import { CustomInput } from '../../Commons/CustomInput';
import styles from './AuthForm.module.scss';

export const AuthForm = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const [isError, setIsError] = useState(false);

  const handleChangeFieldForm = (fieldName: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prevValues) => ({ ...prevValues, [fieldName]: e.target.value }));
  };

  const handleFinishForm = () => {
    if (formState.password.length < 5) {
      setIsError(true);
    } else {
      console.log('Auth');
    }
  };

  useEffect(() => {
    if (isError && formState.password.length > 5) {
      setIsError(false);
    }
  }, [formState.password]);

  return (
    <div>
      <CustomInput
        fieldLabel="Email"
        fieldName="email"
        value={formState.email}
        handleChangeFieldForm={handleChangeFieldForm}
      />
      <CustomInput
        fieldLabel="Password"
        fieldName="password"
        value={formState.password}
        type="password"
        handleChangeFieldForm={handleChangeFieldForm}
      />
      <span className={`${styles.errorTitle} ${isError ? styles.hasError : styles.noError}`}>
        Пароль должен быть больше 5 символов
      </span>
      <button onClick={handleFinishForm}>AUTH</button>
    </div>
  );
};
