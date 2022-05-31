import { createContext, Dispatch, useContext, useReducer } from "react";
import { createPortal } from "react-dom";
import produce from "immer";

import { PopoverContainer, PopoverState } from "./PopoverContainer";

export type Action =
  | { action: "PUSH", payload: PopoverState }
  | { action: "REMOVE", payload: number }
  | { action: "CLOSE", payload: number }
  | { action: "SETTING", payload: { index: number, state: Partial<PopoverState> } };

const PopoverContext = createContext<PopoverState[] | undefined>(undefined);
const PopoverDispatchContext = createContext<Dispatch<Action> | undefined>(undefined);

export const usePopoverContext = () => {
  const stack = useContext(PopoverContext);
  const dispatch = useContext(PopoverDispatchContext);
  return [stack, dispatch] as [typeof stack, typeof dispatch];
}

const reducer = (stack: PopoverState[], action: Action) => produce(stack, (draft) => {
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

export const PopoverPortal: React.FC<{ stack: PopoverState[] }> = ({ stack }) => {
  if (!stack.length) return null;
  return createPortal(
    <>
      {stack.map((state, i) => <PopoverContainer key={i} index={i} state={state} />)}
    </>, document.body
  );
};

export const PopoverProvider: React.FC = ({ children }) => {
  const [stack, dispatch] = useReducer(reducer, []);
  return (
    <PopoverContext.Provider value={stack}>
      <PopoverDispatchContext.Provider value={dispatch}>
        {children}
        <PopoverPortal stack={stack} />
      </PopoverDispatchContext.Provider>
    </PopoverContext.Provider>
  )
}