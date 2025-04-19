import styles from './button.module.css';

export interface ButtonProps {
  click?: () => void;
  type?: 'button' | 'submit' | 'reset';
  size?: 'small' | 'medium' | 'large';
  label?: string;
  className?: string;
}

export default function Button({ click, type = 'button', label = '', className = '', size = 'medium' }: ButtonProps) {

  return (
    <button type={type} onClick={click} className={styles['ah-button'] + ' ' + styles['ah-button--' + size] + ' ' + className}>{label}</button>
  );
}
