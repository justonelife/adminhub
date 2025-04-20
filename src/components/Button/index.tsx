import { ReactElement } from 'react';

export interface ButtonProps {
  click?: () => void;
  type?: 'button' | 'submit' | 'reset';
  size?: 'small' | 'medium' | 'large';
  label?: string;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  text?: boolean;
}

export default function Button({
  click,
  type = 'button',
  label = '',
  className = '',
  size = 'medium',
  icon,
  iconPosition = 'left',
  text
}: ButtonProps): ReactElement {
  const sz = 'ah-button--' + size;
  const txt = text ? 'ah-button--text' : '';

  return (
    <button type={type} onClick={click} className={`ah-button ${sz} ${txt} ${className}`}>
      {iconPosition === 'left' && icon}
      {label}
      {iconPosition === 'right' && icon}
    </button>
  );
}
