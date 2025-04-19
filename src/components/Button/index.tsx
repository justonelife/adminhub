import styles from './button.module.css';

export interface ButtonProps {
  click: () => void;
  type?: 'button' | 'submit' | 'reset';
  children?: string;
  className?: string;
}
export default function Button({ click, type = 'button', children = '', className = '' }: ButtonProps) {

  return (
    <button type={type} onClick={click} className={styles['ah-button'] + ' ' + className}>{children}</button>
  );
}
