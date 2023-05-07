import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormDefinition, Inputs } from 'types';
import styles from './AuthForm.module.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

interface AuthFormProps {
  definition: FormDefinition;
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthForm = ({ definition, isLogin, setIsLogin }: AuthFormProps) => {
  const { title, text, linkText } = definition;
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.auth}>
      <h2 className="fw-bold mb-5">{title}</h2>
      <Form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            placeholder="Enter e-mail"
            {...register('email')}
            autoComplete="off"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="password" placeholder="Password" {...register('password')} />
        </Form.Group>

        <Button variant="primary" type="submit" className="mb-4">
          {title}
        </Button>

        <p>
          {text}
          <span className={styles.link} onClick={() => setIsLogin(!isLogin)}>
            {linkText}
          </span>
        </p>
      </Form>
    </div>
  );
};
