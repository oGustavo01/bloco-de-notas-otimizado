import React from "react";
import ReactDOM from "react-dom";
import "./SearchBar.css";
import { Formik, FieldArray } from "formik";
import axios from "axios";

function Evento() {
  const initialValues = {
    chargesData: [],
  };

  const saveChanges = async (chargesData) => {
    try {
      await axios.put("https://my-json-server.typicode.com/oGustavo01/bloco-de-notas-otimizado/data-charges", { alteracoes: chargesData });
      console.log("Changes saved successfully!");
    } catch (error) {
      console.error("Error saving changes:", error);
    }
  };
  

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setFieldValue }) => {
        const newCharge = { id: values.chargesData.length, name: `Charge ${values.chargesData.length}` };
        setFieldValue("chargesData", [...values.chargesData, newCharge]);

        // Salvar alterações
        saveChanges([...values.chargesData, newCharge]);
      }}
    >
      {({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit}>
          <FieldArray name="chargesData">
            {({ push }) => (
              <div>
                <button type="submit" className="add-changes">
                  <img src="./src/images/plus.png" alt="Plus Icon" onClick={() => push({ id: 0, name: "New Charge" })} />
                </button>

                {/* Exibindo o conteúdo atualizado da array */}
                <ul>
                  {values.chargesData.map((charge) => (
                    <li key={charge.id}>{charge.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </FieldArray>
        </form>
      )}
    </Formik>
  );
}

export default Evento;
