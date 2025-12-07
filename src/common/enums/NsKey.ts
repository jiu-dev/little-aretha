export const NsKey = {
  Common: 'common',
} as const;

export type NsKey = (typeof NsKey)[keyof typeof NsKey];
