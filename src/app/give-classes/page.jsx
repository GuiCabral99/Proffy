"use client";
import { useState } from "react";

import { FaTimes } from "react-icons/fa";

import Header from "@/components/Header";
import Input from "@/components/Input";
import InputTime from "@/components/InputTime";
import Select from "@/components/Select";

export default function giveClasses() {
  const [fields, setFields] = useState([
    { day: 0, startTime: "", endTime: "" },
  ]);

  const addField = () => {
    setFields([...fields, { day: 0, startTime: "", endTime: "" }]);
  };

  const removeField = (index) => {
    if (fields.length > 1) {
      const updatedFields = [...fields];
      updatedFields.splice(index, 1);
      setFields(updatedFields);
    }
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
    <>
      <Header
        title="Que incrível que você quer dar aulas."
        paragraph="O primeiro passo é preencher esse formulário de inscrição:"
      />
      <main className="bg-color-background absolute right-0 left-0 md:px-6">
        <form
          onSubmit={handleSubmit}
          className="-mt-8 w-full rounded-xl bg-color-title-in-primary md:mx-auto lg:w-[714.95px]"
        >
          <div className="px-6">
            <h1 className="text-color-text-title text-2xl font-archivo font-bold border-b border-b-color-line-in-white mb-4 pb-2 pt-12">
              Seus dados
            </h1>
            <Input type="text" name="name" labelContent="Nome completo" />
            <Input type="text" name="avatar" labelContent="Avatar" />
            <Input type="text" name="whatsapp" labelContent="Whatsapp" />
            <div className="mt-4 flex flex-col">
              <label
                htmlFor="bio"
                className="text-sm text-color-text-complement font-light"
              >
                Biografia
              </label>
              <textarea
                name="bio"
                id="bio"
                className="outline-none rounded-md h-40 min-h-[5rem] max-h-[10rem] w-full mt-1.5 bg-color-input-background border border-color-line-in-white p-3 text-base text-color-text-title font-archivo"
              ></textarea>
            </div>
            <h1 className="text-color-text-title text-2xl font-archivo font-bold border-b border-b-color-line-in-white mb-4 pb-2 pt-12">
              Sobre a aula
            </h1>
            <Select
              labelContent="Matéria"
              name="subject"
              options={[
                { value: "Português", content: "Português" },
                { value: "Matematica", content: "Matematica" },
                { value: "História", content: "História" },
                { value: "Geografia", content: "Geografia" },
                { value: "Química", content: "Química" },
                { value: "Física", content: "Física" },
                { value: "Biologia", content: "Biologia" },
                { value: "Artes", content: "Artes" },
                { value: "Inglês", content: "Inglês" },
                { value: "Educação Física", content: "Educação Física" },
              ]}
            />
            <Input
              type="number"
              name="value"
              labelContent="Valor por hora de aula"
            />
            <div className="flex justify-between items-center pb-2 pt-12">
              <h1 className="text-color-text-title text-2xl font-archivo font-bold leading-tight">
                Horários disponíveis
              </h1>
              <button
                type="button"
                onClick={addField}
                className="text-color-primary-darker font-archivo font-bold
                leading-tight"
              >
                + Novo Horário
              </button>
            </div>

            {fields.map((field, index) => (
              <div
                key={index}
                className="md:flex md:justify-center md:space-x-4 py-4 border-t border-b-color-line-in-white"
              >
                <button
                  className={`h-6 md:hidden ${
                    fields.length < 2 ? "hidden" : "flex"
                  }`}
                  type="button"
                  onClick={() => removeField(index)}
                >
                  <FaTimes className="text-color-primary-light h-6 w-6" />
                </button>
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="weekday"
                    className="text-sm text-color-text-complement font-light mt-4"
                  >
                    Dia da semana
                  </label>
                  <select
                    className="rounded-md outline-none h-14 w-full mt-1.5 bg-color-input-background border border-color-line-in-white py-0 px-3 text-base text-color-text-title font-archivo"
                    name="weekday"
                    id="weekday"
                    value={field.day}
                    onChange={(e) =>
                      handleFieldChange(index, "day", parseInt(e.target.value))
                    }
                  >
                    <option className="text-color-text-title" value={0}>
                      Domingo
                    </option>
                    <option className="text-color-text-title" value={1}>
                      Segunda-feira
                    </option>
                    <option className="text-color-text-title" value={2}>
                      Terça-feira
                    </option>
                    <option className="text-color-text-title" value={3}>
                      Quarta-feira
                    </option>
                    <option className="text-color-text-title" value={4}>
                      Quinta-feira
                    </option>
                    <option className="text-color-text-title" value={5}>
                      Sexta-feira
                    </option>
                    <option className="text-color-text-title" value={6}>
                      Sábado
                    </option>
                  </select>
                </div>
                <div className="flex justify-between items-center md:space-x-4">
                  <InputTime
                    labelContent="Dás"
                    id="from"
                    name="from"
                    type="time"
                    value={field.startTime}
                    onChange={(e) =>
                      handleFieldChange(index, "startTime", e.target.value)
                    }
                  />
                  <div className="border-t-2 w-1/6 mt-12 md:hidden"></div>
                  <InputTime
                    labelContent="Até"
                    id="to"
                    name="to"
                    type="time"
                    value={field.endTime}
                    onChange={(e) =>
                      handleFieldChange(index, "endTime", e.target.value)
                    }
                  />
                </div>
                <button
                  className={`hidden h-6 m-6 ${
                    fields.length < 2 ? "md:hidden" : "md:flex"
                  }`}
                  type="button"
                  onClick={() => removeField(index)}
                >
                  <FaTimes className="text-color-primary-light" />
                </button>
              </div>
            ))}
          </div>
          <div className="px-6 border-t bg-color-box-footer border-color-text-in-primary space-y-8 py-12 mt-16 md:space-y-0 md:flex md:justify-between md:items-center">
            <div className="flex items-center">
              <img src="/images/icons/warning.svg" alt="Aviso" />
              <p className="text-color-text-complement text-sm font-medium leading-relaxed pl-4">
                Importante! <br /> Preencha todos os dados
              </p>
            </div>
            <button
              type="submit"
              className="bg-color-secundary w-full h-14 rounded-lg font-archivo font-bold md:w-48"
            >
              Salvar cadastro
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
