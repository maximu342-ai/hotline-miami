import React from 'react';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export const Label: React.FC<LabelProps> = ({ children, className = '', ...props }) => {
  return (
    <label
      className={`text-sm font-medium text-slate-700 dark:text-slate-200 ${className}`}
      {...props}
    >
      {children}
    </label>
  );
};