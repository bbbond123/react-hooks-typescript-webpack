import qs from 'qs';

/** wrapper around qs.parse that you can use types with */
export function urlGetQuery<T extends {}>(search: string): T {
  return qs.parse(search.substring(1)) as T;
}

export function urlQueryFormator(url: string, sendParams: object): string {
  const urlParams = Object.entries(sendParams)
    .reduce(
      (r, [key, value]: [string, string]) => (Boolean(value) ? r.concat(`${key}=${encodeURIComponent(value)}`) : r),
      [] as string[]
    )
    .join('&');

  return urlParams ? `${url}?${urlParams}` : url;
}
