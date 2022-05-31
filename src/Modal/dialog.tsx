import { ReactNode } from "react";

import { Button } from "../Button";
import { Theme } from "../constants";
import { ModalPanel } from "./ModalPanel";
import { useModal } from "./useModal";

const Content: React.FC<{ title: ReactNode; message: ReactNode; }> = ({ title, message }) =>
  <div className="w-80 space-y-1">
    {title && <h1 className="text-base">{title}</h1>}
    {message && <p className="text-sm text-gray-500 dark:text-gray-400 break-words">{message}</p>}
  </div>

export interface DialogOption {
  title?: ReactNode;
  message?: ReactNode;
  theme?: Theme;
}

export const useConfirm = (globalOption: DialogOption = {}) => {
  const { openModal } = useModal();
  return (title = globalOption?.title, option = globalOption) => new Promise<boolean>(resolve => {
    openModal(({ onClose }) => {
      const handleClose = async (isConfirm: boolean) => {
        await onClose();
        resolve(isConfirm);
      };
      return (
        <ModalPanel
          onClose={() => handleClose(false)}
          footer={
            <>
              <Button
                styleType="air"
                theme="zinc"
                onClick={() => handleClose(false)}>
                取消
              </Button>
              <Button
                theme={option.theme}
                onClick={() => handleClose(true)}>
                确定
              </Button>
            </>
          }
        >
          <Content title={title} message={option.message} />
        </ModalPanel>
      );
    });
  });
}

export const useAlert = (globalOption: DialogOption = {}) => {
  const { openModal } = useModal();
  return (title = globalOption?.title, option = globalOption) => new Promise<void>(resolve => {
    openModal(({ onClose }) => {
      const handleClose = async () => {
        await onClose();
        resolve();
      };
      return (
        <ModalPanel
          onClose={handleClose}
          footer={
            <Button
              theme={option.theme}
              onClick={handleClose}>
              确定
            </Button>
          }
        >
          <Content title={title} message={option.message} />
        </ModalPanel>
      )
    });
  });
}