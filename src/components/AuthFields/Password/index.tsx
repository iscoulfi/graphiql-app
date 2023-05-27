import { FieldErrors, UseFormRegister } from 'react-hook-form/dist/types';
import { Inputs } from 'types';
import { useTranslation } from 'react-i18next';
import Form from 'react-bootstrap/Form';
import styles from '../AuthFields.module.scss';

type PasswordInputProps = { register: UseFormRegister<Inputs>; errors: FieldErrors<Inputs> };

export const Password = ({ register, errors }: PasswordInputProps) => {
  const { t } = useTranslation();
  return (
    <Form.Group className="mb-3">
      <Form.Control
        type="password"
        placeholder={t('Password') as string}
        {...register('password', {
          required: {
            value: true,
            message: 'Please enter password',
          },
          pattern: {
            value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            message: 'Length error',
          },
        })}
        isInvalid={!!errors.password}
      />
      {errors.password?.message ? (
        <span className={styles.error}>{t(errors.password.message)}</span>
      ) : (
        <span>{t('Password')}</span>
      )}
    </Form.Group>
  );
};
