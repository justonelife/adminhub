import { SidebarSimple } from "@phosphor-icons/react";
import Button from "components/Button";
import { ReactElement } from "react";
import AppRoutes from "routes/routes";
import styles from './two-columns.module.css';

export default function TwoColumnsLayout(): ReactElement {
  function toggleSidebar(): void {
    console.log('toggle');
  }

  return (
    <>
      <div className={styles.container}>
        <aside className={styles.sidebar}>
          <ul>
            <li>
              <a href="#">🏠 Home</a>
            </li>
            <li>
              <a href="#">📄 Docs</a>
            </li>
            <li>
              <a href="#">⚙️ Settings</a>
            </li>
          </ul>
        </aside>
        <main className={styles['main-content']}>
          <Button click={toggleSidebar} text={true} icon={<SidebarSimple size={16} weight='bold' />} />

          <section>
            <h1>Main Content</h1>
            <AppRoutes />
          </section>
        </main>
      </div>
    </>
  );
}
