import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export const navigate = (pathname: string) => {
  history.push(pathname);
};

export const replace = (pathname: string) => {
  history.replace(pathname);
};

export const openWindow = (link: string) => {
  window.open(link, '_blank');
};

export const goBack = (): void => {
  history.goBack();
};
