export const getLoginStatus = (success: boolean | null, riskPass: boolean | null) => {
  if (!success) {
    return '登录失败';
  } else if (riskPass === true) {
    return '登录成功 (风险密码)';
  } else if (riskPass === false) {
    return '登录成功 (密码)';
  } else if (riskPass === null) {
    return '登录成功';
  }
  return '';
};

/** remove keys if value is empty string */
export const removeEmptyKeys = <T>(values: T): T => {
  const undefinedObject: { [x: string]: undefined } = {};
  Object.entries(values).forEach((item) => {
    const [currKey, currValue] = item;
    if (currValue === '') {
      undefinedObject[currKey] = undefined;
    }
  });
  return Object.assign({}, values, undefinedObject);
};

export enum Grid {
  XS = 767,
  S = 991,
  M = 1199,
  L = 1599,
  XL
}

export type TGrids = keyof typeof Grid;

export const getGrid = (): TGrids => {
  const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (width <= Grid.XS) {
    return 'XS';
  } else if (width <= Grid.S) {
    return 'S';
  } else if (width <= Grid.M) {
    return 'M';
  } else if (width <= Grid.L) {
    return 'L';
  } else if (width > Grid.L) {
    return 'XL';
  }
  return 'XL';
};

export const truncateText = (text: string, truncateLength: number) => {
  return text.length > truncateLength ? text.substr(0, truncateLength - 1) + '...' : text;
};
