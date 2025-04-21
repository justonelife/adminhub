import { ReactNode } from "react";
import styles from "./header.module.css";

interface HeaderProps {
  left?: ReactNode,
  right?: ReactNode
}

export default function Header({ left = null, right = null }: HeaderProps) {

  return (
    <section className={`flex justify-between ${styles.header}`}>
      {left}
      {right}
    </section>
  );
}
