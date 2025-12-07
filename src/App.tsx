import { RouterProvider } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { I18nextProvider } from 'react-i18next';
import { router } from '@core/router';
import { OverlayProvider } from '@core/ui-overlay';
import { DialogRenderer, PanelRenderer } from '@common/components/overlays';
import i18n from './i18n';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <OverlayProvider
          dialogRenderer={DialogRenderer}
          panelRenderer={PanelRenderer}
        >
          <RouterProvider router={router} />
        </OverlayProvider>
      </QueryClientProvider>
    </I18nextProvider>
  );
}

export default App;
