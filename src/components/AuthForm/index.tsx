import React from 'react';
import { logInWithEmailAndPassword, registerWithEmailAndPassword } from 'helpers';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormDefinition, Inputs } from 'types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './AuthForm.module.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';
import { Username, Email, Password } from './fields';

interface AuthFormProps {
  definition: FormDefinition;
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthForm = ({ definition, isLogin, setIsLogin }: AuthFormProps) => {
  const { title, text, linkText } = definition;
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    isLogin
      ? logInWithEmailAndPassword(data.email, data.password, t)
      : registerWithEmailAndPassword(data.username, data.email, data.password, t);
  };

  const switchForm = () => {
    setIsLogin(!isLogin);
    reset();
  };

  return (
    <div className={styles.auth}>
      <h2 className={styles.title}>{t(title)}</h2>
      <Form noValidate onSubmit={handleSubmit(onSubmit)}>
        {!isLogin && <Username register={register} errors={errors} />}

        <Email register={register} errors={errors} />

        <Password register={register} errors={errors} />

        <Button variant="primary" type="submit" className="mb-4">
          {t(title)}
        </Button>

        <p>
          {t(text)}
          <span className={styles.link} onClick={switchForm}>
            {t(linkText)}
          </span>
        </p>
      </Form>
      <ToastContainer autoClose={3000} />
    </div>
  );
};
