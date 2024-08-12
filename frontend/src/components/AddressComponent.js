import React, { useState } from 'react';

function AddressComponent() {
  // **Step 1: Add State Management**
  const [copySuccess, setCopySuccess] = useState('');

  // **Step 2: Create a Copy Function**
  const copyToClipboard = () => {
    // The text we want to copy
    const addressText = 'Avenida 21 de Janeiro Luanda (Morro-Bento)';
    // Use the clipboard API to copy
    navigator.clipboard.writeText(addressText)
      .then(() => {
        setCopySuccess('Address copied to clipboard!');
        // Clear the success message after 2 seconds
        setTimeout(() => setCopySuccess(''), 2000);
      })
      .catch(err => {
        setCopySuccess('Failed to copy address.');
      });
  };

  return (
    <div className="text-center md:text-right mt-4 md:mt-0">
      {/* **Step 3: Add a Button for Copy Action** */}
      <button
        onClick={copyToClipboard}
        className="mt-2 text-blue-500 hover:text-blue-700 focus:outline-none"
      >
        <span className="text-sm text-gray-500 dark:text-gray-400">
          <strong>Address:</strong> Avenida 21 de Janeiro Luanda (Morro-Bento)
        </span>
      </button>
      {/* Display the copy success message */}
      {copySuccess && <p className="text-green-500 mt-2">{copySuccess}</p>}
    </div>
  );
}

export default AddressComponent;
