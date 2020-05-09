import '@/style/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { history } from './util/route';
import { loadI18nResource } from '@/util/i18n';
import App from './App';
import cookies from './util/cookies';

// const logo = require('@/img/logo.png');

interface IRootProps {}
interface IRoutesState {
  isError: boolean;
  errorMsg?: Error;
  locale: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

class Root extends React.Component<IRootProps, IRoutesState> {
  constructor(props: IRootProps) {
    super(props);
    this.state = { isError: false, errorMsg: undefined, locale: undefined };
  }

  componentDidMount() {
    // Force set favicon
    const link = document.createElement('link');
    link.setAttribute('rel', 'shortcut icon');
    link.setAttribute('href', '');
    document.head.appendChild(link);

    // Get AntDLocale
    const lang: string = cookies.get('lang') || 'zh';
    switch (lang) {
      case 'en':
        import('antd/lib/locale-provider/en_US').then((module) => {
          this.setState({ locale: module.default });
        });
        break;
      case 'zh':
        import('antd/lib/locale-provider/zh_CN').then((module) => {
          this.setState({ locale: module.default });
        });
        break;
    }
  }

  componentDidCatch(error: Error) {
    this.setState({ isError: true, errorMsg: error });
  }

  render() {
    const { locale } = this.state;

    return (
      <ConfigProvider locale={locale}>
        <Router history={history}>
          <App />
        </Router>
      </ConfigProvider>
    );
  }
}

loadI18nResource().then(() => {
  ReactDOM.render(<Root />, document.getElementById('root'));
});
