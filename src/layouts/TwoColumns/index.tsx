import Button from "components/Button";
import PrimaryButton from "components/PrimaryButton";
import AppRoutes from "routes/routes";
import styles from './two-columns.module.css';

export default function TwoColumnsLayout() {
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
          <Button click={toggleSidebar} label="Cancel" />
          <PrimaryButton click={toggleSidebar} label="Submit" />
          <section>
            <h1>Main Content</h1>
            <AppRoutes />
          </section>
        </main>
      </div>
    </>
  );
}
