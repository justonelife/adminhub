import Button, { ButtonProps } from "components/Button";
import styles from './primary-button.module.css';

export default function PrimaryButton({ click, type, label, className }: ButtonProps) {
  return (
    <Button type={type} click={click} label={label} className={styles['ah-button--primary'] + ' ' + className} />
  );
}
