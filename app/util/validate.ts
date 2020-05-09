import { FormikErrors } from 'formik';

export const isDefined = (value: unknown): boolean => value !== undefined && value !== null;

export const isNumber = (value: unknown): boolean => {
  return typeof value === 'number';
};

export const isEmpty = (value: unknown): boolean => {
  if (isDefined(value)) return true;
  if (value === '' || value === 0) return true;
  return false;
};

export const isArray = (value: unknown): boolean => {
  return Array.isArray(value);
};

export const generateFormValidation = (
  fieldName: string,
  errorObj: FormikErrors<any>, // eslint-disable-line @typescript-eslint/no-explicit-any
  touched: any // eslint-disable-line @typescript-eslint/no-explicit-any
): {
  validateStatus: 'success' | 'warning' | 'error' | 'validating';
  extra: React.ReactNode;
} => {
  if (touched[fieldName] && errorObj[fieldName]) {
    return {
      validateStatus: 'error',
      extra: errorObj[fieldName]
    };
  } else {
    return {
      validateStatus: 'success',
      extra: null
    };
  }
};
