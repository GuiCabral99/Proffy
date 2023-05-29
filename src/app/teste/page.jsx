"use client";

import { useState } from "react";

export default function MyComponent() {
  const [fields, setFields] = useState([
    { day: 1, startTime: "", endTime: "" },
  ]);

  const addField = () => {
    setFields([...fields, { day: 1, startTime: "", endTime: "" }]);
  };

  const removeField = (index) => {
    const updatedFields = [...fields];
    updatedFields.splice(index, 1);
    setFields(updatedFields);
  };

  const handleFieldChange = (index, fieldName, value) => {
    const updatedFields = [...fields];
    updatedFields[index][fieldName] = value;
    setFields(updatedFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode enviar os dados para o backend
    console.log(fields);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="button" onClick={addField}>
          Adicionar Campo
        </button>
        {fields.map((field, index) => (
          <div key={index}>
            <div>
              <label htmlFor="weekday">Dia da semana</label>
              <select
                name="weekday"
                id="weekday"
                value={field.day}
                onChange={(e) =>
                  handleFieldChange(index, "day", parseInt(e.target.value))
                }
              >
                <option value={1}>Segunda-feira</option>
                <option value={2}>Terça-feira</option>
                <option value={3}>Quarta-feira</option>
                <option value={4}>Quinta-feira</option>
                <option value={5}>Sexta-feira</option>
                <option value={6}>Sábado</option>
                <option value={0}>Domingo</option>
              </select>
            </div>
            <div>
              <input
                type="time"
                value={field.startTime}
                onChange={(e) =>
                  handleFieldChange(index, "startTime", e.target.value)
                }
              />
              <input
                type="time"
                value={field.endTime}
                onChange={(e) =>
                  handleFieldChange(index, "endTime", e.target.value)
                }
              />
            </div>
            <button type="button" onClick={() => removeField(index)}>
              Remover Campo
            </button>
          </div>
        ))}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
