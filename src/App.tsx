import styles from "./App.module.css";
import { Form, Header, List, Spacer, TitleApp } from "./components";

export default function App() {
  const defaultValues = { body: "", user: undefined, title: "" };

  return (
    <main className={styles.main}>
      <Header>
        <TitleApp />
        <Form defaultValues={defaultValues} />
      </Header>
      <Spacer value="150px" />
      <List />
    </main>
  );
}
