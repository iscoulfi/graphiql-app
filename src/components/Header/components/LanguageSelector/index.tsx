import { useTranslation } from 'react-i18next';
import { ButtonGroup, Button } from 'react-bootstrap';

const enum Language {
  RU = 'ru',
  EN = 'en',
}

export const LanguageSelector = ({ className }: { className: string }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: Language) => {
    i18n.changeLanguage(language);
  };

  const isActive = (language: Language) => i18n.language === language;

  return (
    <ButtonGroup size="sm" className="ms-2">
      <Button
        active={isActive(Language.EN)}
        variant="outline-secondary"
        onClick={() => changeLanguage(Language.EN)}
        className={className}
      >
        EN
      </Button>
      <Button
        active={isActive(Language.RU)}
        variant="outline-secondary"
        onClick={() => changeLanguage(Language.RU)}
        className={className}
      >
        RU
      </Button>
    </ButtonGroup>
  );
};
