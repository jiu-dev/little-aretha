import { type FC, Fragment } from 'react';
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import { X } from 'lucide-react';
import type {
  PanelConfig,
  PanelPosition,
  PanelRendererProps,
} from '@core/ui-overlay';
import { AppSizes } from '@core/constants';

const getPositionClasses = (position: PanelPosition): string => {
  switch (position) {
    case 'right':
      return 'right-0 top-0 h-full';
    case 'left':
      return 'left-0 top-0 h-full';
    case 'top':
      return 'top-0 left-0 w-full';
    case 'bottom':
      return 'bottom-0 left-0 w-full';
  }
};

const getSizeClasses = (position: PanelPosition, size?: AppSizes): string => {
  if (position === 'left' || position === 'right') {
    switch (size) {
      case 'sm':
        return 'w-full max-w-sm';
      case 'md':
        return 'w-full max-w-md';
      case 'lg':
        return 'w-full max-w-lg';
      case 'xl':
        return 'w-full max-w-xl';
      case '2xl':
        return 'w-full max-w-2xl';
      default:
        return 'w-full max-w-md';
    }
  } else {
    switch (size) {
      case 'sm':
        return 'h-full max-h-[25vh]';
      case 'md':
        return 'h-full max-h-[33vh]';
      case 'lg':
        return 'h-full max-h-[50vh]';
      case 'xl':
        return 'h-full max-h-[66vh]';
      case '2xl':
        return 'h-full max-h-[75vh]';
      default:
        return 'h-full max-h-[33vh]';
    }
  }
};

const getTransitionClasses = (position: PanelPosition) => {
  switch (position) {
    case 'right':
      return {
        enterFrom: 'translate-x-full',
        enterTo: 'translate-x-0',
        leaveFrom: 'translate-x-0',
        leaveTo: 'translate-x-full',
      };
    case 'left':
      return {
        enterFrom: '-translate-x-full',
        enterTo: 'translate-x-0',
        leaveFrom: 'translate-x-0',
        leaveTo: '-translate-x-full',
      };
    case 'top':
      return {
        enterFrom: '-translate-y-full',
        enterTo: 'translate-y-0',
        leaveFrom: 'translate-y-0',
        leaveTo: '-translate-y-full',
      };
    case 'bottom':
      return {
        enterFrom: 'translate-y-full',
        enterTo: 'translate-y-0',
        leaveFrom: 'translate-y-0',
        leaveTo: 'translate-y-full',
      };
  }
};

export const PanelRenderer: FC<PanelRendererProps> = ({
  sessions,
  closePanel,
}) => {
  return (
    <>
      {sessions.map((session, index) => {
        const panelConfig = session.config as PanelConfig;
        const transitions = getTransitionClasses(panelConfig.position);

        return (
          <Transition key={session.id} appear show={true} as={Fragment}>
            <Dialog
              as="div"
              className="relative"
              style={{ zIndex: 40 + index }}
              onClose={() => {
                if (index === sessions.length - 1) {
                  closePanel();
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
                <div className="fixed inset-0 bg-black/60" />
              </TransitionChild>

              <div className="fixed inset-0 overflow-hidden">
                <TransitionChild
                  as={Fragment}
                  enter="transform transition ease-in-out duration-300"
                  enterFrom={transitions.enterFrom}
                  enterTo={transitions.enterTo}
                  leave="transform transition ease-in-out duration-300"
                  leaveFrom={transitions.leaveFrom}
                  leaveTo={transitions.leaveTo}
                >
                  <DialogPanel
                    className={`fixed ${getPositionClasses(panelConfig.position)} ${getSizeClasses(
                      panelConfig.position,
                      panelConfig.size
                    )} bg-brand-dark shadow-2xl border-l border-brand-gold/20`}
                  >
                    <div className="h-full flex flex-col">
                      {/* Header */}
                      <div className="relative bg-brand-darker border-b border-brand-gold/20 overflow-hidden flex-shrink-0">
                        <div className="relative px-6 py-5">
                          <div className="flex items-center justify-between gap-4">
                            <div className="flex-1 min-w-0">
                              <DialogTitle className="font-serif text-xl text-brand-cream">
                                {panelConfig.title}
                              </DialogTitle>

                              {panelConfig.description && (
                                <Description className="mt-2 text-sm text-brand-cream/60 leading-relaxed">
                                  {panelConfig.description}
                                </Description>
                              )}
                            </div>

                            <button
                              onClick={closePanel}
                              className="flex-shrink-0 p-2 border border-brand-gold/20 hover:border-brand-gold/40 hover:bg-brand-gold/10 transition-colors group"
                              aria-label="Fermer"
                            >
                              <X className="w-5 h-5 text-brand-cream/60 group-hover:text-brand-gold transition-colors" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 overflow-y-auto px-6 py-6 bg-brand-dark">
                        <div className="space-y-4">{session.content}</div>
                      </div>

                      {/* Footer */}
                      {session.actions && (
                        <div className="px-6 py-4 border-t border-brand-gold/20 bg-brand-darker/50 flex justify-between gap-3 flex-shrink-0">
                          {session.actions.onDelete && (
                            <button
                              onClick={session.actions.onDelete}
                              disabled={session.actions.deleteDisabled}
                              className="px-4 py-2 text-sm font-medium text-red-400 border border-red-400/30 hover:bg-red-400/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                            >
                              <X className="w-4 h-4" />
                              {session.actions.deleteLabel || 'Supprimer'}
                            </button>
                          )}

                          <div className="flex gap-3 ml-auto">
                            <button
                              onClick={closePanel}
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
                        </div>
                      )}
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </Dialog>
          </Transition>
        );
      })}
    </>
  );
};
