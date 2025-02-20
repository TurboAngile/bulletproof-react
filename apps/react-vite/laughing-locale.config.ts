import type { ILaughingLocaleConfig } from '@laughing-cli/locale';
const config: ILaughingLocaleConfig = {
  basePath: './i18n',
  baseLocale: 'en',
  scannerOptions: {
    input: [
      '**/*.{ts,tsx}',
      // Use ! to filter out files or directories
      '!**/node_modules/**',
    ],
    output: './src', // 输出目录
    options: {
      debug: true,
      func: false,
      trans: false,
      lngs: ['en', 'fr'],
      defaultLng: 'en',
      fallbackLng: 'en',
      resource: {
        loadPath: 'i18n/{{lng}}/translation.json',
        savePath: 'i18n/{{lng}}/translation.json',
        jsonIndent: 2,
        lineEnding: '\n',
      },
      removeUnusedKeys: true,
      nsSeparator: false,
      keySeparator: false,
      interpolation: {
        prefix: '{{',
        suffix: '}}',
      },
    },
  },
};
export default config;
