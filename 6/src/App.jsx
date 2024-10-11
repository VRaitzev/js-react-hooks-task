import React, { useState, memo } from 'react';
import { useTranslation } from 'react-i18next';

const Factorial = memo(({ number }) => {
  const factorialFunc = (number) => {
    if (number <= 0) return 1;
    return number * factorialFunc(number - 1);
  };
  
  return <div>Factorial of {number} is {factorialFunc(number)}</div>;
});

const App = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <Buttons setValue={setValue} />
      <Factorial number={value} />
    </div>
  );
};

const Buttons = ({ setValue }) => {  
  const { t, i18n } = useTranslation();

  const handleLangSwitch = (e) => {
    const lang = e.target.dataset.testid;
    i18n.changeLanguage(lang);
  };

  const getClassName = (currLang) => {
    const className = i18n.language === currLang ? 'btn btn-primary' : 'btn btn-outline-primary';
    return className;
  };

  return (
    <div className="App">
      <div className="btn-group mb-3" role="group">
        <button
          type="button"
          data-testid="en"
          className={getClassName('en')}
          onClick={handleLangSwitch}
        >
          {t('languages.en')}
        </button>
        <button
          type="button"
          data-testid="ru"
          className={getClassName('ru')}
          onClick={handleLangSwitch}
        >
          {t('languages.ru')}
        </button>
      </div>
      <br />
      <div className="btn-group mb-3" role="group">
        <button type="button" className="btn btn-outline-primary" onClick={() => setValue(1)}>
          {`${t('factorial')} 1`}
        </button>
        <button type="button" className="btn btn-outline-primary" onClick={() => setValue(5)}>
          {`${t('factorial')} 5`}
        </button>
        <button type="button" className="btn btn-outline-primary" onClick={() => setValue(10)}>
          {`${t('factorial')} 10`}
        </button>
        <button type="button" className="btn btn-outline-primary" onClick={() => setValue(20)}>
          {`${t('factorial')} 20`}
        </button>
      </div>
    </div>
  );
};

export default App;
