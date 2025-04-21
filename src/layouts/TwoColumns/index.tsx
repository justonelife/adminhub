import { SidebarSimple, SignOut, UserCircle } from "@phosphor-icons/react";
import Button from "components/Button";
import { ReactElement } from "react";
import styles from './two-columns.module.css';
import { DiamondsFour } from "@phosphor-icons/react";
import { MenuItem } from "types/menu-item";
import { Link, Outlet } from "react-router";
import Header from "components/Header";

interface TwoColumnsLayoutProps {
  items: MenuItem[]
}

export default function TwoColumnsLayout({ items }: TwoColumnsLayoutProps): ReactElement {
  function toggleSidebar(): void {
    console.log('toggle');
  }

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <section className={styles.logo}>
          <DiamondsFour size={24} weight='bold' />
          <h1>AdminHub</h1>
        </section>
        <h5 className={styles.section}>Main Menu</h5>
        <menu className={styles.navs}>
          {
            items.map((item, idx) => (
              <Link to={item.path} key={idx} className={styles.nav}>
                {item.icon && <item.icon size={18} />}
                <span className={styles['nav__text']}>{item.label}</span>
              </Link>
            ))
          }
        </menu>
      </aside>
      <main className={styles['main-content']}>
        <Header left={
          <Button onClick={toggleSidebar} text={true} icon={<SidebarSimple size={16} weight='bold' />} />
        } right={
          <div className="flex items-center gap-2">
            <Button text={true} icon={<UserCircle size={16} weight='bold' />} />
            <Button text={true} icon={<SignOut size={16} weight='bold' />} />
          </div>
        } />
        <section className={styles['main-content__main']}>
          <Outlet />
        </section>
      </main>
    </div>
  );
}
