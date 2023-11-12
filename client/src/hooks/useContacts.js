import { useContext, useEffect } from "react"
import { ContactContext } from "../context/ContactContext"
import { useJWT } from "./useJWT"
import { toast } from 'react-hot-toast'
import axios from "axios"

export function useContacts() {
  const { jwt } = useJWT()
  const { contacts, setContacts, contactToEdit, setContactToEdit, showEditModal, setShowEditModal } = useContext(ContactContext)

  useEffect(() => {
    (async () => {
      const res = await axios.get("http://localhost:4000/api/contacts", {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      })
    
      setContacts(res.data)
    })()
  }, [jwt, setContacts])

  const reloadContacts = async () => {
    const res = await axios.get("http://localhost:4000/api/contacts", {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      })
    
    setContacts([...res.data])
  }

  const addContact = async contact => {
    try {
      const res = await axios.post("http://localhost:4000/api/contacts/", contact, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        }
      })
  
      reloadContacts()
      toast.success(res.data.message)
  
      return res  
    } catch({ response: { data: { message } } }) {
      toast.error(message)
    }
  }

  const editContact = id => {
    const contactToEdit = contacts.find(contact => contact.contact_id === id)

    setContactToEdit(contactToEdit)
    setShowEditModal(true)
  }

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  const deleteContact = async id => {
    const res = await axios.delete(`http://localhost:4000/api/contacts/${id}`, {
      headers: {
        Authorization: `Bearer ${jwt}`
      }
    })

    if (res.status === 200 )
      reloadContacts()

    toast.success(res.data.message)
  }

  const updateContact = async (id, editedContact) => {
    try {
      const res = await axios.put(`http://localhost:4000/api/contacts/${id}`, editedContact, {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      })
  
      if (res.status === 200)
        reloadContacts()
  
      toast.success(res.data.message)
    } catch({ response: { data: { message } } }) {
      toast.error(message)
    }
  }

  return { 
    contacts,
    reloadContacts,
    addContact,
    editContact,
    updateContact,
    contactToEdit,
    showEditModal,
    handleCloseEditModal,
    deleteContact
  }
}