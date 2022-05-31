import React from "react";
import faker from "faker";
import { Meta, Story } from "@storybook/react";

import { Button } from "../Button";
import { toast } from "../Toast";
import { ModalProvider } from "./context";
import { ModalPanel } from "./ModalPanel";
import { useAlert, useConfirm, useModal } from ".";

export default {
  title: "Widgets/Modal",
} as Meta;


const Modal: React.FC = () => {
  const { openModal } = useModal({ clickMaskToClose: true });
  const alert = useAlert();
  const confirm = useConfirm();
  return (
    <div className="flex gap-2">
      <Button onClick={() => {
        const title = faker.hacker.abbreviation();
        const content = faker.lorem.paragraphs();
        openModal(({ onClose }) =>
          <ModalPanel
            style={{ width: "500px" }}
            title={title}
            showCloseButton
            footer={<Modal />}
            onClose={onClose}
          >
            <p className="overflow-auto space-y-1">
              {content}
            </p>
          </ModalPanel>
        )
      }}>
        显示Modal
      </Button>
      <Button onClick={async () => {
        await alert(faker.hacker.abbreviation(), {
          message: faker.hacker.phrase(),
          theme: "blue"
        });
        toast("确认了！", { theme: "blue" });
      }}>
        alert
      </Button>
      <Button onClick={async () => {
        const isConfirm = await confirm("是否确认?", {
          message: faker.hacker.phrase(),
          theme: "red"
        });
        if (isConfirm) toast("确认了！", { theme: "red" });
        else toast("取消了！");
      }}>
        confirm
      </Button>
    </div>
  )
};

export const Base: Story = () =>
  <ModalProvider>
    <Modal />
  </ModalProvider>
