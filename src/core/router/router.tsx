import { createBrowserRouter } from 'react-router';
import { MainLayout } from '@core/layouts';
import { HomePage } from '@features/home';
import { BiographyPage } from '@features/biography';
import { TeamPage } from '@features/team';
import { TechnicalPage } from '@features/technical';
import { ContactPage } from '@features/contact';

/**
 * Configuration du router principal
 */
export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'biographie',
        element: <BiographyPage />,
      },
      {
        path: 'equipe',
        element: <TeamPage />,
      },
      {
        path: 'technique',
        element: <TechnicalPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
    ],
  },
]);
