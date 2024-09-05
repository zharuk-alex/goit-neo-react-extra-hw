import { useSelector } from "react-redux";
import styles from "./ContactList.module.css";
import Contact from "components/Contact/Contact";
import { selectFilteredContacts } from "store/selectors";

export default () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={styles.list}>
      {contacts?.map((contact) => (
        <li key={contact.id}>
          <Contact {...contact} />
        </li>
      ))}
    </ul>
  );
};
