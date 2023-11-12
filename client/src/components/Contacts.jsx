import { useContacts } from "../hooks/useContacts";
import { AddContactForm } from "./AddContactForm";
import { AppBar } from "./AppBar";
import { Contact } from './Contact'
import { EditModal } from "./EditModal";

export function Contacts() {
  const { contacts, contactToEdit, updateContact, showEditModal, handleCloseEditModal } = useContacts()

  return (
    <div>
      <AppBar />
      <AddContactForm />

      <h1 className="text-center font-bold text-3xl my-4">Contacts</h1>
      <div className="mx-60 grid grid-cols-4 gap-5">
        {contacts.map(contact => (
          <Contact key={contact.contact_id} {...contact} />
        ))}
      </div>

      {showEditModal && (
        <EditModal 
          contact={contactToEdit}
          onSave={updateContact}
          onClose={handleCloseEditModal}
        /> 
      )}
    </div>
  )
}