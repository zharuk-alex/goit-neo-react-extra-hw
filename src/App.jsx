import ContactForm from "components/ContactForm/ContactForm";
import SearchBox from "components/SearchBox/SearchBox";
import ContactList from "components/ContactList/ContactList";
import { fetchContacts } from "store/contactsOps";
import styles from "./App.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLoading } from "store/selectors";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList />
      </section>
    </main>
  );
}

export default App;
