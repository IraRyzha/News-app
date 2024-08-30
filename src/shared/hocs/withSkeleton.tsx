import React from "react";
import { DirectionType, SkeletonType } from "../interfaces/index.js";
import Skeleton from "../ui/Skeleton/Skeleton.js";

export interface SkeletonProps {
  isLoading: boolean;
  type?: SkeletonType;
  direction?: DirectionType;
}

function withSkeleton<P extends object>(
  Component: React.ComponentType<P>,
  count?: number
) {
  return function WithSkeleton(props: P & SkeletonProps) {
    const {
      isLoading,
      type = "item",
      direction = "column",
      ...restProps
    } = props;

    if (isLoading) {
      return <Skeleton type={type} direction={direction} count={count} />;
    }

    return <Component type={type} {...(restProps as P)} />;
  };
}

export default withSkeleton;
