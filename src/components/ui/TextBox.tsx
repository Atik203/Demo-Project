// TextBox.tsx

import React from "react";

const TextBox: React.FC = () => {
  return (
    <textarea
      className="w-full p-2 border border-gray-300 rounded mb-4"
      placeholder="Enter your text here..."
    />
  );
};

export default TextBox;
