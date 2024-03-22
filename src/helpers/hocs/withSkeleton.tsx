import React from "react";
import Skeleton from "../../components/Skeleton/Skeleton";
import { DirectionType, SkeletonType } from "../../interfaces";

interface Props {
  isLodaing: boolean;
}

function withSkeleton<P extends object>(
  Component: React.ComponentType<P>,
  type?: SkeletonType,
  count?: number,
  direction?: DirectionType
) {
  return function WithSkeleton(props: Props & P) {
    const { isLodaing, ...restProps } = props;
    if (isLodaing) {
      return <Skeleton type={type} count={count} direction={direction} />;
    }

    return <Component {...(restProps as P)} />;
  };
}

export default withSkeleton;
