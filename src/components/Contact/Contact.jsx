import styles from "./Contact.module.css";
import { MdPhone, MdPerson } from "react-icons/md";
import Btn from "components/Btn/Btn";
import { useDispatch } from "react-redux";
import { deleteContact } from "store/contactsOps";

export default ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={styles.contactItem}>
      <div>
        <div className={styles.contactInfo}>
          <MdPerson />
          {name}
        </div>
        <div className={styles.contactInfo}>
          <MdPhone />
          {phone}
        </div>
      </div>
      <Btn text="delete" onClick={handleDelete} size="sm" />
    </div>
  );
};
