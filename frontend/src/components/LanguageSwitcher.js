import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div class="flex justify-center space-x-4 p-4 bg-gray-100">
      <button class="px-2 py-1 bg-gray-500 text-white rounded hover:bg-green-700" onClick={() => changeLanguage('en')}>English</button>
      <button class="px-2 py-1 bg-gray-500 text-white rounded hover:bg-green-700" onClick={() => changeLanguage('fr')}>Français</button>
      <button class="px-2 py-1 bg-gray-500 text-white rounded hover:bg-green-700" onClick={() => changeLanguage('pt')}>Português</button>
    </div>
  );
};

export default LanguageSwitcher;
