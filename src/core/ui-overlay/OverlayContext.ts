import { AppSizes } from '@core/constants';
import {
  createContext,
  useContext,
  type Dispatch,
  type JSX,
  type SetStateAction,
} from 'react';

export type OverlayType = 'dialog' | 'panel';

export type OverlayConfig = DialogConfig | PanelConfig;

// Dialog config
export interface DialogConfig {
  type: 'dialog';
  title: string;
  description?: string;
  size: AppSizes;
  variant?: string;
}

// Panel configs
export type PanelPosition = 'left' | 'right' | 'top' | 'bottom';

export interface PanelConfig {
  type: 'panel';
  title: string;
  description?: string;
  position: PanelPosition;
  size?: AppSizes;
  variant?: string;
}

// Actions communes
export interface OverlayActions {
  onSubmit: () => void;
  closeLabel: string;
  submitLabel: string;
  submitDisabled?: boolean;
  onDelete?: () => void;
  deleteLabel?: string;
  deleteDisabled?: boolean;
}

interface OverlayContextProps {
  // Dialog methods
  isDialogOpen: boolean;
  closeDialog: () => void;
  openDialog: (
    dialogConfig: Omit<DialogConfig, 'type'>,
    dialogContent: JSX.Element
  ) => void;
  setDialogActions: Dispatch<SetStateAction<OverlayActions | undefined>>;

  // Panel methods
  isPanelOpen: boolean;
  closePanel: () => void;
  openPanel: (
    panelConfig: Omit<PanelConfig, 'type'>,
    panelContent: JSX.Element
  ) => void;
  setPanelActions: Dispatch<SetStateAction<OverlayActions | undefined>>;

  // Generic close (ferme le dernier overlay ouvert, quel que soit son type)
  closeLastOverlay: () => void;
}

export const OverlayContext = createContext<OverlayContextProps | undefined>(
  undefined
);

export const useOverlay = () => {
  const context = useContext(OverlayContext);
  if (!context) {
    throw new Error('useOverlay must be used within an OverlayProvider');
  }
  return context;
};

// Hooks spécifiques pour plus de commodité
export const useDialog = () => {
  const { openDialog, closeDialog, setDialogActions, isDialogOpen } =
    useOverlay();
  return { openDialog, closeDialog, setDialogActions, isDialogOpen };
};

export const usePanel = () => {
  const { openPanel, closePanel, setPanelActions, isPanelOpen } = useOverlay();
  return { openPanel, closePanel, setPanelActions, isPanelOpen };
};
