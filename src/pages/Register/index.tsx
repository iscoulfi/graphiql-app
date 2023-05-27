import { registerWithEmailAndPassword } from 'helpers';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Inputs } from 'types';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Paths } from 'assets';
import { useTranslation } from 'react-i18next';
import { Username, Email, Password, AuthCheck } from 'components';
import styles from './Register.module.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'react-toastify/dist/ReactToastify.css';

export const Register = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    registerWithEmailAndPassword(data.username, data.email, data.password, t);
  };

  return (
    <section className="text-center">
      <div className="py-5 px-md-5">
        <div className="d-flex justify-content-center">
          <AuthCheck logOutRequired redirectTo={Paths.MAIN}>
            <div className={styles.auth}>
              <h2 className={styles.title}>{t('Sign up')}</h2>
              <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                <Username register={register} errors={errors} />

                <Email register={register} errors={errors} />

                <Password register={register} errors={errors} />

                <Button variant="primary" type="submit" className="mb-4">
                  {t('Sign up')}
                </Button>

                <p>
                  {t('Have an account? ')}
                  <Link to={Paths.AUTH} className={styles.link}>
                    {t('Sign in')}
                  </Link>
                </p>
              </Form>
              <ToastContainer autoClose={3000} />
            </div>
          </AuthCheck>
        </div>
      </div>
    </section>
  );
};
