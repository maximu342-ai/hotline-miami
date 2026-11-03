import React from 'react';
import { Label } from '../atoms/label';
import { Button, ButtonProps } from '../atoms/button';

export interface LabeledButtonProps {
  label: string;
  buttonText: string;
  onButtonClick?: () => void;
  buttonVariant?: ButtonProps['variant'];
  className?: string;
}

export const LabeledButton: React.FC<LabeledButtonProps> = ({
  label,
  buttonText,
  onButtonClick,
  buttonVariant = 'primary',
  className = '',
}) => {
  return (
    <div
      className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 ${className}`}
    >
      <Label>{label}</Label>
      <Button variant={buttonVariant} onClick={onButtonClick}>
        {buttonText}
      </Button>
    </div>
  );
};