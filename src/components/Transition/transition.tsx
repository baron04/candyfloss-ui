import React from "react";
import { CSSTransition } from "react-transition-group";
import { CSSTransitionProps } from "react-transition-group/CSSTransition";

type AnimationName =
  | "zoom-in-top"
  | "zoom-in-left"
  | "zoom-in-bottom"
  | "zoom-in-right";

interface TransitionProps {
  in?: boolean | undefined;
  timeout?: number;
  animation?: AnimationName;
  wrapper?: boolean | undefined;
  classNames?: string;
  unmountOnExit?: boolean | undefined;
  appear?: boolean | undefined;
}

const Transition: React.FC<TransitionProps> = props => {
  const { children, classNames, animation, wrapper, ...restProps } = props;

  return (null
    // <CSSTransition
    //   classNames={classNames ? classNames : animation}
    //   {...restProps}
    // >
    //   {children}
    // </CSSTransition>
  );
};
Transition.defaultProps = {
  unmountOnExit: true,
  appear: true
};

export default Transition;
