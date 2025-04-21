import Button, { ButtonProps } from "components/Button";

export default function PrimaryButton({ className, ...props }: ButtonProps) {
  return (
    <Button
      className={'ah-button--primary ' + className}
      {...props}
    />
  );
}
