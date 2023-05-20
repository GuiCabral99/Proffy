import { FaFilter } from "react-icons/fa";

import Select from "@/components/Select";
import Header from "@/components/Header";
import InputTime from "@/components/InputTime";

export default function study() {
  return (
    <div className="md:flex md:flex-col">
      <Header title="Estes são os proffys disponíveis.">
        <form className="md:flex md:space-x-4 md:-mb-14">
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
          <Select
            labelContent="Dia da semana"
            name="weekday"
            options={[
              { value: "Domingo", content: "Domingo" },
              { value: "Segunda-feira", content: "Segunda-feira" },
              { value: "Terça-feira", content: "Terça-feira" },
              { value: "Quarta-feira", content: "Quarta-feira" },
              { value: "Quinta-feira", content: "Quinta-feira" },
              { value: "Sexta-feira", content: "Sexta-feira" },
              { value: "Sabado", content: "Sabado" },
            ]}
          />
          <InputTime labelContent="Hora" id="time" name="time" />
          <button
            className="flex items-center justify-center rounded-md h-14 w-full bg-color-secundary text-color-button-text text-base font-archivo font-medium mt-6
            md:w-auto md:px-4 md:mt-[2.6rem]"
          >
            Enviar <FaFilter className="ml-2" />
          </button>
        </form>
      </Header>
      <main className="p-6 md:px-0 md:w-[687px] md:m-auto lg:w-[714.95px]">
        <h3 className="text-color-text-base text-3xl md:mt-12">
          Realize uma pesquisa...
        </h3>
      </main>
    </div>
  );
}
