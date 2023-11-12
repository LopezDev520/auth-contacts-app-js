/* eslint-disable react/prop-types */
import { useField } from '../hooks/useField';

export function EditModal({ contact, onSave, onClose }) {
  const usernameInput = useField("text", contact.contact_name)
  const emailInput = useField("email", contact.contact_email)
  const numberInput = useField("number", contact.contact_number)


  const handleSave = () => {
    const {value: name} = usernameInput
    const {value: email} = emailInput
    const {value: number} = numberInput

    const editedContact = { name, email, number }

    onSave(contact.contact_id, editedContact)
    onClose()
  };

  return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
        <div className="bg-white p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Editar Contacto</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Nombre
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                {...usernameInput}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                {...emailInput}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="number">
                Numero
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="number"
                name="number"
                {...numberInput}
              />
            </div>

            <div className="flex justify-end">
              <button
                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded mr-2"
                onClick={handleSave}
              >
                Guardar
              </button>
              <button
                className="bg-gray-400 text-white font-semibold py-2 px-4 rounded"
                onClick={onClose}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
  )
}
