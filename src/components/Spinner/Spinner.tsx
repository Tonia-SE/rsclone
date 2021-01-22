import React from 'react';

export const Spinner: React.FC = () => {

  return (
    <div className="spinner-wrapper mb-1 mt-1">
      <div className="spinner-border text-info" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}