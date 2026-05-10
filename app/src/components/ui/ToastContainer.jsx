import React from 'react';

const ToastContainer = ({ toasts }) => {
  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div key={toast.id} className="toast">
          {toast.message}
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;
