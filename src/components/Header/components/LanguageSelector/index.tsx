import { useTranslation } from 'react-i18next';
import { ButtonGroup, Button } from 'react-bootstrap';

type Language = 'en' | 'ru';

export const LanguageSelector = ({ className }: { className: string }) => {
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
        className={className}
      >
        EN
      </Button>
      <Button
        active={isActive('ru')}
        variant="outline-secondary"
        onClick={() => changeLanguage('ru')}
        className={className}
      >
        RU
      </Button>
    </ButtonGroup>
  );
};
