import { ReactElement } from 'react';

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  size?: 'small' | 'medium' | 'large';
  label?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  text?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  type = 'button',
  label = '',
  size = 'medium',
  icon,
  iconPosition = 'left',
  text,
  className,
  ...props
}: ButtonProps): ReactElement {
  const sz = 'ah-button--' + size;
  const txt = text ? 'ah-button--text' : '';

  return (
    <button type={type} {...props} className={`ah-button ${sz} ${txt} ${className}`}>
      {iconPosition === 'left' && icon}
      {label}
      {iconPosition === 'right' && icon}
    </button>
  );
}
