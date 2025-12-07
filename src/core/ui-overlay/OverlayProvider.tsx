import {
  useState,
  useCallback,
  useMemo,
  type JSX,
  type ReactNode,
  type FC,
} from 'react';
import {
  OverlayContext,
  type OverlayConfig,
  type OverlayActions,
  type DialogConfig,
  type PanelConfig,
} from './OverlayContext';

interface OverlaySession {
  id: string;
  config: OverlayConfig;
  content: JSX.Element;
  actions?: OverlayActions;
}

interface OverlayProviderProps {
  children: ReactNode;
  dialogRenderer: FC<DialogRendererProps>;
  panelRenderer: FC<PanelRendererProps>;
}

export interface DialogRendererProps {
  sessions: OverlaySession[];
  closeDialog: () => void;
}

export interface PanelRendererProps {
  sessions: OverlaySession[];
  closePanel: () => void;
}

export type { OverlaySession };

export const OverlayProvider: FC<OverlayProviderProps> = ({
  children,
  dialogRenderer: DialogRenderer,
  panelRenderer: PanelRenderer,
}) => {
  const [overlays, setOverlays] = useState<OverlaySession[]>([]);

  // Séparer les dialogs et panels pour chaque renderer (mémoïsé)
  const dialogSessions = useMemo(
    () => overlays.filter((o) => o.config.type === 'dialog'),
    [overlays]
  );
  const panelSessions = useMemo(
    () => overlays.filter((o) => o.config.type === 'panel'),
    [overlays]
  );

  const openDialog = useCallback(
    (
      dialogConfig: Omit<DialogConfig, 'type'>,
      dialogContent: JSX.Element
    ) => {
      const newSession: OverlaySession = {
        id: `dialog-${Date.now()}-${Math.random()}`,
        config: { ...dialogConfig, type: 'dialog' } as DialogConfig,
        content: dialogContent,
        actions: undefined,
      };
      setOverlays((prev) => [...prev, newSession]);
    },
    []
  );

  const openPanel = useCallback(
    (panelConfig: Omit<PanelConfig, 'type'>, panelContent: JSX.Element) => {
      const newSession: OverlaySession = {
        id: `panel-${Date.now()}-${Math.random()}`,
        config: { ...panelConfig, type: 'panel' } as PanelConfig,
        content: panelContent,
        actions: undefined,
      };
      setOverlays((prev) => [...prev, newSession]);
    },
    []
  );

  const closeDialog = useCallback(() => {
    setOverlays((prev) => {
      const dialogIndex = prev.findIndex((o) => o.config.type === 'dialog');
      if (dialogIndex === -1) return prev;

      // Trouve le dernier dialog et le retire
      const lastDialogIndex = prev
        .map((o) => o.config.type)
        .lastIndexOf('dialog');
      return prev.filter((_, index) => index !== lastDialogIndex);
    });
  }, []);

  const closePanel = useCallback(() => {
    setOverlays((prev) => {
      const panelIndex = prev.findIndex((o) => o.config.type === 'panel');
      if (panelIndex === -1) return prev;

      // Trouve le dernier panel et le retire
      const lastPanelIndex = prev
        .map((o) => o.config.type)
        .lastIndexOf('panel');
      return prev.filter((_, index) => index !== lastPanelIndex);
    });
  }, []);

  const closeLastOverlay = useCallback(() => {
    setOverlays((prev) => prev.slice(0, -1));
  }, []);

  const setDialogActions = useCallback(
    (
      actionsOrUpdater:
        | OverlayActions
        | undefined
        | ((prev: OverlayActions | undefined) => OverlayActions | undefined)
    ) => {
      setOverlays((prev) => {
        const lastDialogIndex = prev
          .map((o) => o.config.type)
          .lastIndexOf('dialog');
        if (lastDialogIndex === -1) return prev;

        const newOverlays = [...prev];
        const lastDialog = { ...newOverlays[lastDialogIndex] };

        if (typeof actionsOrUpdater === 'function') {
          lastDialog.actions = actionsOrUpdater(lastDialog.actions);
        } else {
          lastDialog.actions = actionsOrUpdater;
        }

        newOverlays[lastDialogIndex] = lastDialog;
        return newOverlays;
      });
    },
    []
  );

  const setPanelActions = useCallback(
    (
      actionsOrUpdater:
        | OverlayActions
        | undefined
        | ((prev: OverlayActions | undefined) => OverlayActions | undefined)
    ) => {
      setOverlays((prev) => {
        const lastPanelIndex = prev
          .map((o) => o.config.type)
          .lastIndexOf('panel');
        if (lastPanelIndex === -1) return prev;

        const newOverlays = [...prev];
        const lastPanel = { ...newOverlays[lastPanelIndex] };

        if (typeof actionsOrUpdater === 'function') {
          lastPanel.actions = actionsOrUpdater(lastPanel.actions);
        } else {
          lastPanel.actions = actionsOrUpdater;
        }

        newOverlays[lastPanelIndex] = lastPanel;
        return newOverlays;
      });
    },
    []
  );

  const contextValue = useMemo(
    () => ({
      isDialogOpen: dialogSessions.length > 0,
      closeDialog,
      openDialog,
      setDialogActions,
      isPanelOpen: panelSessions.length > 0,
      closePanel,
      openPanel,
      setPanelActions,
      closeLastOverlay,
    }),
    [
      dialogSessions.length,
      panelSessions.length,
      closeDialog,
      openDialog,
      setDialogActions,
      closePanel,
      openPanel,
      setPanelActions,
      closeLastOverlay,
    ]
  );

  return (
    <OverlayContext.Provider value={contextValue}>
      {children}
      <DialogRenderer sessions={dialogSessions} closeDialog={closeDialog} />
      <PanelRenderer sessions={panelSessions} closePanel={closePanel} />
    </OverlayContext.Provider>
  );
};
