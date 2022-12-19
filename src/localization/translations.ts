export const DEFAULT_LANGUAGE = 'en';
import english from './en';
import arabic from './ar';
import LocalizedStrings from 'localized-strings';

const translations = {
  en: english,
  ar: arabic,
};

export default new LocalizedStrings(translations);
