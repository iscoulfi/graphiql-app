import { logInWithEmailAndPassword } from 'helpers';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Inputs } from 'types';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Paths } from 'assets';
import { useTranslation } from 'react-i18next';
import { Email, Password, AuthCheck } from 'components';
import styles from './Login.module.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    logInWithEmailAndPassword(data.email, data.password, t);
  };

  return (
    <section className="text-center">
      <div className="py-5 px-md-5">
        <div className="d-flex justify-content-center">
          <AuthCheck logOutRequired redirectTo={Paths.MAIN}>
            <div className={styles.auth}>
              <h2 className={styles.title}>{t('Sign in')}</h2>
              <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                <Email register={register} errors={errors} />

                <Password register={register} errors={errors} />

                <Button variant="primary" type="submit" className="mb-4">
                  {t('Sign in')}
                </Button>

                <p>
                  {t("Don't have an account? ")}
                  <Link to={Paths.SIGNUP} className={styles.link}>
                    {t('Register here')}
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
