import { useTranslation } from 'react-i18next';
import { ButtonGroup, Button } from 'react-bootstrap';

const enum Languages {
  RU = 'ru',
  EN = 'en',
}

export const LanguageSelector = ({ className }: { className: string }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: Languages) => {
    i18n.changeLanguage(language);
  };

  return (
    <ButtonGroup size="sm" className="ms-2">
      <Button
        active={i18n.language === Languages.EN}
        variant="outline-secondary"
        onClick={() => changeLanguage(Languages.EN)}
        className={className}
      >
        EN
      </Button>
      <Button
        active={i18n.language === Languages.RU}
        variant="outline-secondary"
        onClick={() => changeLanguage(Languages.RU)}
        className={className}
      >
        RU
      </Button>
    </ButtonGroup>
  );
};
