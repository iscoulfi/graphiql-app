import { FieldErrors, UseFormRegister } from 'react-hook-form/dist/types';
import { Inputs } from 'types';
import { useTranslation } from 'react-i18next';
import Form from 'react-bootstrap/Form';
import styles from '../AuthFields.module.scss';

type UsernameInputProps = { register: UseFormRegister<Inputs>; errors: FieldErrors<Inputs> };

export const Username = ({ register, errors }: UsernameInputProps) => {
  const { t } = useTranslation();
  return (
    <Form.Group className="mb-3">
      <Form.Control
        type="text"
        placeholder={t('Enter username') as string}
        {...register('username', {
          required: {
            value: true,
            message: 'Please enter username',
          },
        })}
        autoComplete="off"
        isInvalid={!!errors.username}
      />
      {errors.username?.message ? (
        <span className={styles.error}>{t(errors.username.message)}</span>
      ) : (
        <span>{t('Username')}</span>
      )}
    </Form.Group>
  );
};
