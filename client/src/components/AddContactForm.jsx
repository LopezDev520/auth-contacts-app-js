/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useField } from '../hooks/useField';
import { useContacts } from '../hooks/useContacts';

export function AddContactForm() {
  const { addContact } = useContacts()
  const [showModal, setShowModal] = useState(false);

  const contactNameInput = useField("text")
  const contactEmailInput = useField("email")
  const contactNumberInput = useField("number")

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { value: name } = contactNameInput
    const { value: email } = contactEmailInput
    const { value: number } = contactNumberInput
  
    const res = await addContact({ name, email, number })
    
    contactNameInput.clear()
    contactEmailInput.clear()
    contactNumberInput.clear()

    if(res.status === 200)
      handleClose()
  };

  const handleKeyDown = (evt) => evt.key === "Escape" && handleClose()
  
  return (
    <div className="flex justify-center items-center m-5" onKeyDown={handleKeyDown}>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleShow}
      >
        Añadir Contacto
      </button>

      {showModal ? (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 w-1/3">
            <h2 className="text-2xl text-center mb-4">Añadir Contacto</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Nombre
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  name="name"
                  {...contactNameInput}
                  autoFocus
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  name="email"
                  {...contactEmailInput}                  
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="number">
                  Numero
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="number"
                  name="number"
                  {...contactNumberInput}
                />
              </div>

              {/* Agrega más campos aquí si es necesario */}

              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
}

