import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, logInWithEmailAndPassword, registerWithEmailAndPassword } from 'config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormDefinition, Inputs } from 'types';
import styles from './AuthForm.module.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PuffLoader from 'react-spinners/PuffLoader';

interface AuthFormProps {
  definition: FormDefinition;
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthForm = ({ definition, isLogin, setIsLogin }: AuthFormProps) => {
  const { title, text, linkText } = definition;
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

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
    if (user) navigate('/main');
  }, [user, loading, navigate]);

  if (loading) return <PuffLoader className={styles.loader} color="#e535ab" />;

  return (
    <div className={styles.auth}>
      <h2 className="fw-bold mb-5">{title}</h2>
      <Form noValidate onSubmit={handleSubmit(onSubmit)}>
        {!isLogin && (
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter username"
              {...register('username', {
                required: 'Please enter username',
              })}
              autoComplete="off"
              isInvalid={!!errors.username}
            />
            {errors.username ? (
              <span className={styles.error}>{errors.username.message}</span>
            ) : (
              <span>Username</span>
            )}
          </Form.Group>
        )}

        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            placeholder="Enter e-mail"
            {...register('email', {
              required: 'Please enter e-mail',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            autoComplete="off"
            isInvalid={!!errors.email}
          />
          {errors.email ? (
            <span className={styles.error}>{errors.email.message}</span>
          ) : (
            <span>E-mail</span>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            placeholder="Password"
            {...register('password', {
              required: 'Please enter password',
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                message:
                  'Length must be 8 or more, at least one letter, one digit, one special character',
              },
            })}
            isInvalid={!!errors.password}
          />
          {errors.password ? (
            <span className={styles.error}>{errors.password.message}</span>
          ) : (
            <span>Password</span>
          )}
        </Form.Group>

        <Button variant="primary" type="submit" className="mb-4">
          {title}
        </Button>

        <p>
          {text}
          <span className={styles.link} onClick={switchForm}>
            {linkText}
          </span>
        </p>
      </Form>
    </div>
  );
};
