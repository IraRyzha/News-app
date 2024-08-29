import React from "react";
import { SkeletonType, DirectionType } from "../interfaces/index.js";
import Skeleton from "../ui/Skeleton/Skeleton.js";

export interface SkeletonProps {
  isLoading: boolean;
}

function withSkeleton<P extends object>(
  Component: React.ComponentType<P>,
  type?: SkeletonType,
  count?: number,
  direction?: DirectionType
) {
  return function WithSkeleton(props: P & SkeletonProps) {
    const { isLoading, ...restProps } = props;

    if (isLoading) {
      return <Skeleton type={type} count={count} direction={direction} />;
    }

    return <Component {...(restProps as P)} />;
  };
}

export default withSkeleton;
