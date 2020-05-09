import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import cookies from '@/util/cookies';
import moment from 'moment';

/** Get lang from cookies */
const lang: string = cookies.get('lang') || 'zh';

i18n.use(initReactI18next).init({
  lng: lang || 'zh',

  load: 'languageOnly',

  // use en if detected lng is not available
  fallbackLng: 'zh',

  debug: NODE_ENV === 'development',

  defaultNS: 'resource',

  ns: ['resource'],

  // send not translated keys to endpoint
  saveMissing: false,

  // we do not use keys in form messages.welcome
  keySeparator: false,

  interpolation: {
    // react already safes from xss
    escapeValue: false
  },

  resources: {}
});

/** moment locale */
const initMomentLocal = () => {
  switch (lang) {
    case 'en':
      moment.locale('en');
      break;
    case 'zh':
      {
        moment.locale('zh-cn', {
          weekdays: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
          weekdaysMin: ['日', '一', '二', '三', '四', '五', '六'],
          months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
          monthsShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        });
        moment.updateLocale('zh-cn', {
          week: {
            dow: 1,
            doy: 7
          }
        });
      }
      break;
  }
};

export const loadI18nResource = () =>
  new Promise<never>((resolve) => {
    initMomentLocal();
    switch (lang) {
      case 'en':
        import('locales/en/resource.json').then((resource) => {
          i18n.addResourceBundle('en', 'resource', resource.default);
          resolve();
        });
        break;
      case 'zh':
        import('locales/zh/resource.json').then((resource) => {
          i18n.addResourceBundle('zh', 'resource', resource.default);
          resolve();
        });
        break;
    }
  });

export default i18n;
