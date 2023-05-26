import { useTranslation } from 'react-i18next';
import { ButtonGroup, Button } from 'react-bootstrap';
import classNames from 'classnames';

const enum Languages {
  RU = 'ru',
  EN = 'en',
}

export const LanguageSelector = ({ isSticky }: { isSticky: boolean }) => {
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
        className={classNames({ 'text-white': isSticky })}
      >
        EN
      </Button>
      <Button
        active={i18n.language === Languages.RU}
        variant="outline-secondary"
        onClick={() => changeLanguage(Languages.RU)}
        className={classNames({ 'text-white': isSticky })}
      >
        RU
      </Button>
    </ButtonGroup>
  );
};
