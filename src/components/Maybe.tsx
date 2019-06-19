import * as React from "react";

interface IProps {
  test: boolean;
  children: React.ReactNode;
}

export const Maybe: React.FC<IProps> = ({ test, children }) => (
  <React.Fragment>{test ? children : null}</React.Fragment>
);
