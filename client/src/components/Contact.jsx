import { useContacts } from "../hooks/useContacts"

/* eslint-disable react/prop-types */
export function Contact({ contact_id, contact_number, contact_name, contact_email }) {
  const { editContact, deleteContact } = useContacts()

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex justify-between mb-2">
        <h3 className="text-lg font-semibold">{contact_name}</h3>
      </div>
      <p className="text-gray-600">{contact_email}</p>
      <p className="text-gray-600">Number: {contact_number}</p>
      <div className="mt-4">
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded mr-2" onClick={() => editContact(contact_id)}>
          Editar
        </button>
        <button className="bg-red-500 text-white font-semibold py-2 px-4 rounded" onClick={() => deleteContact(contact_id)}>
          Eliminar
        </button>
      </div>
    </div>
  )
}