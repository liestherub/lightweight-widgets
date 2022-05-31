export interface ModalComponentProps {
  index: number,
  state: ModalState,
  onClose: () => Promise<void>
}

export interface ModalState {
  clickMaskToClose?: boolean;
  status: "OPEN" | "CLOSED";
  maxShown?: number;
  onRemove: (index: number, state: ModalState) => void;
  onClose: (index: number, state: ModalState) => void;
  ContentComponent: React.FC<ModalComponentProps>;
}