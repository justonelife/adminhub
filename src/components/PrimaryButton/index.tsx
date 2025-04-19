import Button, { ButtonProps } from "components/Button";
export default function PrimaryButton({ click, type, children, className }: ButtonProps) {
  return (
    <Button type={type} click={click} children={children} className={className} />
  );
}
