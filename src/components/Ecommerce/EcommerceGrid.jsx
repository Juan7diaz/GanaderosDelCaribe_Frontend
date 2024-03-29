import CardEcommerce from "../../pages/dashboard/EcommerceAdmin/CardEcommerce";

const EcommerceGrid = ({
  arrProducts = [],
  setIdToDelete,
  setProductSelected,
  visitor,
  addCartProducts,
}) => {
  if (arrProducts.length === 0)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-lg w-full">
          <h2 className="text-2xl font-semibold mb-4">
            No se han encontrado productos publicados
          </h2>
        </div>
      </div>
    );

  return (
    <div className="flex flex-wrap gap-6 pt-10 justify-center">
      {arrProducts.map((product) => (
        <CardEcommerce
          addCartProducts={addCartProducts}
          key={product.id}
          visitor={visitor}
          setProductSelected={setProductSelected}
          setIdToDelete={setIdToDelete}
          {...product}
        />
      ))}
    </div>
  );
};

export default EcommerceGrid;
