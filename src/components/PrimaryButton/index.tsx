import Button, { ButtonProps } from "components/Button";

export default function PrimaryButton({ click, type, label, className, icon, iconPosition, text }: ButtonProps) {
  return (
    <Button type={type}
      click={click}
      label={label}
      className={'ah-button--primary ' + className}
      text={text}
      icon={icon}
      iconPosition={iconPosition}
    />
  );
}
