import React from "react";
import Skeleton from "react-loading-skeleton";
import {
  SkeletonSectionContainer,
  SkeletonContent,
} from "./SkeletonSection.styles"; // Adjusted import path

export const SkeletonSection: React.FC = () => {
  return (
    <SkeletonSectionContainer>
      <SkeletonContent>
        {/* Section Header */}
        <Skeleton height={16} width={120} style={{ marginBottom: "0.5rem" }} />
        <Skeleton height={24} width={250} style={{ marginBottom: "2rem" }} />
        {/* Skeleton Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Skeleton height={120} width="100%" />
          <Skeleton height={120} width="100%" />
          <Skeleton height={120} width="100%" />
        </div>
      </SkeletonContent>
    </SkeletonSectionContainer>
  );
};
