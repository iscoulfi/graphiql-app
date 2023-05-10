import { useTranslation } from 'react-i18next';

export const Welcome = () => {
  const { t } = useTranslation();

  return <div>{t('welcome')}</div>;
};
