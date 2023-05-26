import { useTranslation } from 'react-i18next';
import { ButtonGroup, Button } from 'react-bootstrap';
import classNames from 'classnames';

type Language = 'en' | 'ru';

export const LanguageSelector = ({ isSticky }: { isSticky: boolean }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: Language) => {
    i18n.changeLanguage(language);
  };

  const isActive = (language: Language) => i18n.language === language;

  return (
    <ButtonGroup size="sm" className="ms-2">
      <Button
        active={isActive('en')}
        variant="outline-secondary"
        onClick={() => changeLanguage('en')}
        className={classNames({ 'text-white': isSticky })}
      >
        EN
      </Button>
      <Button
        active={isActive('ru')}
        variant="outline-secondary"
        onClick={() => changeLanguage('ru')}
        className={classNames({ 'text-white': isSticky })}
      >
        RU
      </Button>
    </ButtonGroup>
  );
};
