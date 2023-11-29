import React from 'react';

const FormInput = ({children, icon , className = ''}) => {
  return (
    <div className={`one_fourth themeborder ${className || ''}`}>
        {children}
        <span>{icon}</span>
    </div>
  );
};

export default FormInput;