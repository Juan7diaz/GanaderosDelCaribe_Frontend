import { useForm } from "../../hooks/useForm";
import ModalLayout from "../../layout/ModalLayout";
import { putItemInventory } from "../../services/inventory.services";

const ModalEditItem = ({
  isOpen,
  onClose,
  itemToEdit = {},
  setReloadData,
}) => {

  const { formState, onInputChange, onResetForm } = useForm(itemToEdit);

  const { name, amount, type, description } = formState;

  const handleSave = async () => {
    const data = {
      name: name.trim(),
      amount: amount,
      type: type.trim(),
      description: description.trim(),
    };

    const res = await putItemInventory(itemToEdit.id, data);

    // cerramos y reseteamos el formulario
    if(res.ok){
      onResetForm();
      onClose();
      setReloadData((prev) => !prev);
    }
  };

  return (
    <ModalLayout
      isOpen={isOpen}
      onClose={onClose}
      title="Panel de edición de objeto"
    >
      <form className="text-black">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Nombre
          </label>
          <input
            className="w-full border rounded-md py-2 px-3"
            name="name"
            onChange={onInputChange}
            placeholder="nombre del objeto"
            type="text"
            value={name}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="cantidad"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Cantidad
          </label>
          <input
            className="w-full border rounded-md py-2 px-3"
            name="amount"
            onChange={onInputChange}
            placeholder="20"
            type="number"
            value={amount}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="tipo"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Tipo
          </label>
          <input
            className="w-full border rounded-md py-2 px-3"
            name="type"
            onChange={onInputChange}
            placeholder="suministro"
            type="text"
            value={type}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="descripcion"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Descripcion
          </label>
          <textarea
            className="w-full border rounded-md py-2 px-3"
            name="description"
            cols={45}
            onChange={onInputChange}
            placeholder="martillo rojo dañao"
            type="text"
            value={description}
          />
        </div>
        <button
          type="button"
          className={
            "py-2 px-4 rounded bg-primary text-white hover:bg-primary/60"
          }
          onClick={handleSave}
        >
          Editar
        </button>
      </form>
    </ModalLayout>
  );
};

export default ModalEditItem;
