import { useRef, useState } from "react";
import classNames from "classnames";
import { XCircleIcon } from "@heroicons/react/solid";

import { Button } from "../Button";
import { Align, BG, TEXT } from "../constants";
import { InputContainer, InputContainerProps } from "../InputContainer";
import { BaseProps } from "../types";

export interface InputProps extends BaseProps, InputContainerProps {
  inputAttr?: React.InputHTMLAttributes<HTMLInputElement>;
  value?: string;
  placeholder?: string;
  type?: "email" | "password" | "search" | "tel" | "text" | "url";
  align?: Align;
  cleanable?: boolean;
  onChange?: (value: string) => void;
  onEnter?: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({
  style,
  className,
  inputAttr,
  placeholder,
  type,
  cleanable,
  theme = "primary",
  value,
  onChange,
  onEnter,
  ...rest
}) => {
  const [focus, setFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <InputContainer
      className={className}
      style={style}
      focus={focus}
      theme={theme}
      {...rest}
    >
      <input
        className={classNames(
          "appearance-none",
          "h-full",
          "w-full",
          "outline-none",
          "transition-colors",
          "shadow-fill-white",
          "dark:shadow-fill-black",
          "autofill:text-fill-black",
          "autofill:dark:text-fill-white",
          TEXT.black,
        )}
        ref={inputRef}
        type={type}
        value={value}
        onChange={e => onChange?.(e.currentTarget.value)}
        placeholder={placeholder}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onKeyDown={onEnter && (e => e.key === "Enter" && onEnter(e.currentTarget.value))}
        {...inputAttr}
      />
      {cleanable && value &&
        <Button
          tabIndex={-1}
          styleType="plain"
          theme={focus ? theme : "zinc"}
          onClick={() => {
            onChange?.("");
            inputRef.current?.focus();
          }}
        >
          <XCircleIcon className="w-4 h-4" />
        </Button>
      }
    </InputContainer>
  )
}