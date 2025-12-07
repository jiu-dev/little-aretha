import { type FC, Fragment, memo } from 'react';
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Description,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import { X } from 'lucide-react';
import { AppSizes } from '@core/constants';
import type { DialogConfig, DialogRendererProps } from '@core/ui-overlay';

const getSizeClasses = (size: AppSizes): string => {
  switch (size) {
    case 'xs':
      return 'max-w-sm';
    case 'sm':
      return 'max-w-md';
    case 'base':
    case 'md':
      return 'max-w-2xl';
    case 'lg':
      return 'max-w-4xl';
    case 'xl':
      return 'max-w-6xl';
    case '2xl':
      return 'max-w-7xl';
    case '3xl':
    case '4xl':
    case '5xl':
      return 'max-w-full';
    default:
      return 'max-w-2xl';
  }
};

export const DialogRenderer: FC<DialogRendererProps> = memo(({
  sessions,
  closeDialog,
}) => {
  return (
    <>
      {sessions.map((session, index) => {
        const dialogConfig = session.config as DialogConfig;

        return (
          <Transition key={session.id} appear show={true} as={Fragment}>
            <Dialog
              as="div"
              className="relative"
              style={{ zIndex: 50 + index }}
              onClose={() => {
                if (index === sessions.length - 1) {
                  closeDialog();
                }
              }}
            >
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black/75" />
              </TransitionChild>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4">
                  <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <DialogPanel
                      className={`w-full ${getSizeClasses(dialogConfig.size)} transform transition-all`}
                    >
                      <div className="overflow-hidden bg-brand-dark border border-brand-gold/20 shadow-2xl">
                        {/* Header */}
                        <div className="relative bg-brand-darker border-b border-brand-gold/20 overflow-hidden">
                          <div className="absolute inset-0 opacity-5">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold rounded-full blur-3xl"></div>
                          </div>

                          <div className="relative px-6 py-5">
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1 min-w-0">
                                <DialogTitle className="text-xl font-serif text-brand-cream">
                                  {dialogConfig.title}
                                </DialogTitle>

                                {dialogConfig.description && (
                                  <Description className="mt-2 text-sm text-brand-cream/60 leading-relaxed">
                                    {dialogConfig.description}
                                  </Description>
                                )}
                              </div>

                              <button
                                onClick={closeDialog}
                                className="flex-shrink-0 p-2 border border-brand-gold/20 hover:border-brand-gold/40 hover:bg-brand-gold/10 transition-colors group"
                                aria-label="Fermer"
                              >
                                <X className="w-5 h-5 text-brand-cream/60 group-hover:text-brand-gold transition-colors" />
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="px-6 py-6 bg-brand-dark">
                          <div className="space-y-4">{session.content}</div>
                        </div>

                        {/* Footer */}
                        {session.actions && (
                          <div className="px-6 py-4 border-t border-brand-gold/20 bg-brand-darker/50 flex justify-end gap-3">
                            <button
                              onClick={closeDialog}
                              className="px-4 py-2 text-sm font-medium text-brand-cream/60 hover:text-brand-cream border border-brand-gold/20 hover:border-brand-gold/40 transition-colors"
                            >
                              {session.actions.closeLabel}
                            </button>
                            <button
                              onClick={session.actions.onSubmit}
                              disabled={session.actions.submitDisabled}
                              className="px-4 py-2 text-sm font-medium bg-brand-gold text-brand-darker hover:bg-brand-gold-light disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                              {session.actions.submitLabel}
                            </button>
                          </div>
                        )}
                      </div>
                    </DialogPanel>
                  </TransitionChild>
                </div>
              </div>
            </Dialog>
          </Transition>
        );
      })}
    </>
  );
});
