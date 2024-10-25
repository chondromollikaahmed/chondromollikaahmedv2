// components/ProjectDetailsSkeleton.tsx

'use client' // Error components must be Client Components
import React from "react";
 // Make sure to import the CSS styles for animations

const ProjectDetailsSkeleton: React.FC = () => {
  return (
    <div className="loading-skeleton-container">
      {/* Skeleton structure matching the layout of ProjectDetails */}
      <div className="loading-skeleton title-skeleton" />
      <div className="loading-skeleton subtitle-skeleton" />
      <div className="loading-skeleton label-skeleton" />
      <div className="loading-skeleton content-skeleton" />
      <div className="loading-skeleton image-skeleton" />
    </div>
  );
};

export default ProjectDetailsSkeleton;
