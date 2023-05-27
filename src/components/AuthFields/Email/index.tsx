import { FieldErrors, UseFormRegister } from 'react-hook-form/dist/types';
import { Inputs } from 'types';
import { useTranslation } from 'react-i18next';
import Form from 'react-bootstrap/Form';
import styles from '../AuthFields.module.scss';

type EmailInputProps = { register: UseFormRegister<Inputs>; errors: FieldErrors<Inputs> };

export const Email = ({ register, errors }: EmailInputProps) => {
  const { t } = useTranslation();
  return (
    <Form.Group className="mb-3">
      <Form.Control
        type="email"
        placeholder={t('Enter e-mail') as string}
        {...register('email', {
          required: {
            value: true,
            message: 'Please enter e-mail',
          },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address',
          },
        })}
        autoComplete="off"
        isInvalid={!!errors.email}
      />
      {errors.email?.message ? (
        <span className={styles.error}>{t(errors.email.message)}</span>
      ) : (
        <span>{t('E-mail')}</span>
      )}
    </Form.Group>
  );
};
