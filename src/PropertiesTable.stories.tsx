import { Fragment, ReactNode } from "react";
import classNames from "classnames";

import { TEXT } from "./constants";

export interface Prop<P> {
  name: keyof P;
  values: unknown[];
  otherProps?: unknown;
}

export interface PropertiesTableProps<P> {
  render: (name: keyof P, value: unknown, otherProps?: unknown) => ReactNode;
  props: Prop<P>[];
}

export function PropertiesTable<P>({ render, props }: PropertiesTableProps<P>) {
  return (
    <table className={classNames("table-auto text-sm -mt-10", TEXT.black)}>
      {props.map(({ name, values, otherProps }, i) =>
        <Fragment key={i}>
          <thead>
            <tr>
              <th className="pt-10 pr-10 w-10" align="left">{name}</th>
            </tr>
          </thead>
          <tbody>
            {values.map((value, i) =>
              <tr key={i}>
                <td className="w-32">{`${value}`}</td>
                <td className="py-1">{render(name, value, otherProps)}</td>
              </tr>
            )}
          </tbody>
        </Fragment>
      )}
    </table>
  )
}