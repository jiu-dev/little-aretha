/**
 * Constantes de routes de l'application
 */

export const ROUTES = {
  HOME: '/',
  BIOGRAPHY: '/biographie',
  TECHNICAL: '/technique',
  CONTACT: '/contact',
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RouteValue = (typeof ROUTES)[RouteKey];
