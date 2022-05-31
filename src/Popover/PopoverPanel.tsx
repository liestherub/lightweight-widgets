import classNames from "classnames";

export interface PopoverPanelProps {
  className?: string;
  children: React.ReactNode;
}

export const PopoverPanel: React.FC<PopoverPanelProps> = ({
  children,
  className,
}) => {
  return (
    <div className={classNames(
      "rounded-lg",
      "shadow-xl",
      "ring-1",
      "ring-opacity-5",
      "ring-black",
      "bg-white",
      "dark:bg-zinc-800",
      className
    )}>
      {children}
    </div>
  );
}