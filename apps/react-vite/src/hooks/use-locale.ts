import { crc32 } from 'crc';
import { useTranslation } from 'react-i18next';

export const useLocale = () => {
  const { t } = useTranslation();
  const lang = (key, args: any = {}) => {
    const hashKey = `k${crc32(key).toString(16)}` as any;
    let words = t(hashKey, args);
    if (words === hashKey) words = key;
    return words;
  };
  return {
    lang,
  };
};
