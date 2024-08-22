// PictureComponent.tsx

import React from "react";

const PictureComponent: React.FC = () => {
  return (
    <div className="mb-4">
      <input type="file" accept="image/*" className="mb-2" />
      <img src="#" alt="Uploaded" className="max-w-full h-auto" />
    </div>
  );
};

export default PictureComponent;
