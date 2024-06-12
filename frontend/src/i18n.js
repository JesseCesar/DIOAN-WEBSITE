import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "headline": "The Best in Agribusiness, the Best Quality, the Best Yield.",
      "subheadline": "Let us reserve the best for your satisfaction, our incredible products",
      "learn_more": "Learn More",
    },
  },
  fr: {
    translation: {
      "headline": "Le meilleur de l'agro-industrie, la meilleure qualité, le meilleur rendement.",
      "subheadline": "Réservons le meilleur pour votre satisfaction, nos produits incroyables",
      "learn_more": "En savoir plus",
    },
  },
  pt: {
    translation: {
      "headline": "O melhor no agronegócio, a melhor qualidade, o melhor rendimento.",
      "subheadline": "Deixe-nos reservar o melhor para a sua satisfação, nossos produtos incríveis",
      "learn_more": "Saiba mais",
    },
  },
};

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

