import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from './components/ContactForm/';
import Filter from './components/Filter/';
import ContactList from './components/ContactList/';
import s from './App.module.css'

function App() {
  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2 className={s.contacts}>Contacts</h2>
      <Filter />
      <ContactList />
      <ToastContainer autoClose={3700} position="top-center" />
    </div>
  );
}

export default App;
