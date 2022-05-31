import { useModalContext } from "./context";
import { ModalState } from "./types";

export type ModalOption = Partial<ModalState>;

export const useModal = (globalOption: ModalOption = {}) => {
  const [stack, dispatch] = useModalContext();
  if (!stack || !dispatch) throw new Error("useModal must be used within a ModalProvider");
  const closeModal = (index: number) => dispatch({ action: "CLOSE", payload: index });
  const openModal = (ContentComponent: ModalState["ContentComponent"], option = globalOption) => dispatch({
    action: "PUSH",
    payload: {
      status: "OPEN",
      ContentComponent,
      onClose: index => dispatch({ action: "CLOSE", payload: index }),
      onRemove: index => dispatch({ action: "REMOVE", payload: index }),
      ...option,
    }
  });
  return { openModal, closeModal };
}