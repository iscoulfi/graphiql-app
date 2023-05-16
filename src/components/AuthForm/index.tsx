import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, logInWithEmailAndPassword, registerWithEmailAndPassword } from 'config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormDefinition, Inputs } from 'types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './AuthForm.module.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PuffLoader from 'react-spinners/PuffLoader';
import { useTranslation } from 'react-i18next';

interface AuthFormProps {
  definition: FormDefinition;
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthForm = ({ definition, isLogin, setIsLogin }: AuthFormProps) => {
  const { title, text, linkText } = definition;
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    isLogin
      ? logInWithEmailAndPassword(data.email, data.password)
      : registerWithEmailAndPassword(data.username, data.email, data.password);
  };

  const switchForm = () => {
    setIsLogin(!isLogin);
    reset();
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate('/main');
  }, [user, loading, navigate]);

  if (loading) return <PuffLoader className={styles.loader} color="#e535ab" />;

  if (user) return null;

  return (
    <div className={styles.auth}>
      <h2 className="fw-bold mb-5">{t(title)}</h2>
      <Form noValidate onSubmit={handleSubmit(onSubmit)}>
        {!isLogin && (
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder={t('Enter username') as string}
              {...register('username', {
                required: {
                  value: true,
                  message: t('Please enter username'),
                },
              })}
              autoComplete="off"
              isInvalid={!!errors.username}
            />
            {errors.username ? (
              <span className={styles.error}>{errors.username.message}</span>
            ) : (
              <span>{t('Username')}</span>
            )}
          </Form.Group>
        )}

        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            placeholder={t('Enter e-mail') as string}
            {...register('email', {
              required: {
                value: true,
                message: t('Please enter e-mail'),
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: t('Invalid email address'),
              },
            })}
            autoComplete="off"
            isInvalid={!!errors.email}
          />
          {errors.email ? (
            <span className={styles.error}>{errors.email.message}</span>
          ) : (
            <span>{t('E-mail')}</span>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            placeholder={t('Password') as string}
            {...register('password', {
              required: {
                value: true,
                message: t('Please enter password'),
              },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                message: t('Length error'),
              },
            })}
            isInvalid={!!errors.password}
          />
          {errors.password ? (
            <span className={styles.error}>{errors.password.message}</span>
          ) : (
            <span>{t('Password')}</span>
          )}
        </Form.Group>

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
