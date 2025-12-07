export const AppSizes = {
  xs: 'xs',
  sm: 'sm',
  base: 'base',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
  '2xl': '2xl',
  '3xl': '3xl',
  '4xl': '4xl',
  '5xl': '5xl',
} as const;

export type AppSizes = (typeof AppSizes)[keyof typeof AppSizes];
