import { createContext, Dispatch, useContext, useReducer } from "react";
import { createPortal } from "react-dom";
import produce from "immer";

import { ModalContainer } from "./ModalContainer";
import { ModalState } from "./types";

export type Action =
  | { action: "PUSH", payload: ModalState }
  | { action: "REMOVE", payload: number }
  | { action: "CLOSE", payload: number }
  | { action: "SETTING", payload: { index: number, state: Partial<ModalState> } };

const ModalContext = createContext<ModalState[] | undefined>(undefined);
const ModalDispatchContext = createContext<Dispatch<Action> | undefined>(undefined);

export const useModalContext = () => {
  const stack = useContext(ModalContext);
  const dispatch = useContext(ModalDispatchContext);
  return [stack, dispatch] as [typeof stack, typeof dispatch];
}

const reducer = (stack: ModalState[], action: Action) => produce(stack, draft => {
  switch (action.action) {
    case "PUSH":
      draft.push(action.payload);
      break;
    case "REMOVE":
      draft.splice(action.payload, 1);
      break;
    case "CLOSE":
      draft[action.payload].status = "CLOSED";
      break;
    case "SETTING":
      Object.assign(draft[action.payload.index], action.payload.state);
  }
});

export const ModalPortal: React.FC = () => {
  const [stack, dispatch] = useModalContext();
  if (!stack?.length) return null;
  if (!dispatch) return null;
  return createPortal(
    <>
      {stack.map((state, i) =>
        <ModalContainer
          key={i}
          index={i}
          stack={stack}
          state={state}
        />
      )}
    </>, document.body
  );
};

export const ModalProvider: React.FC = ({ children }) => {
  const [stack, dispatch] = useReducer(reducer, []);
  return (
    <ModalContext.Provider value={stack}>
      <ModalDispatchContext.Provider value={dispatch}>
        {children}
        <ModalPortal />
      </ModalDispatchContext.Provider>
    </ModalContext.Provider>
  )
}