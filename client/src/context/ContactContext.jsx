/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'

export const ContactContext = createContext({})

export const ContactContextProvider = ({children}) => {
  const [contacts, setContacts] = useState([])
  const [contactToEdit, setContactToEdit] = useState({})
  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <ContactContext.Provider 
      value={{ contacts, setContacts, contactToEdit, setContactToEdit, showEditModal, setShowEditModal }}
    >
      {children}
    </ContactContext.Provider>
  )
}