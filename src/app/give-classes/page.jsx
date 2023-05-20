import Header from "@/components/Header";
import Input from "@/components/Input";
import InputTime from "@/components/InputTime";
import Select from "@/components/Select";

export default function giveClasses() {
  return (
    <>
      <Header
        title="Que incrível que você quer dar aulas."
        paragraph="O primeiro passo é preencher esse formulário de inscrição:"
      />
      <main className="bg-color-background absolute right-0 left-0 md:px-6">
        <form className="-mt-8 w-full rounded-xl bg-color-title-in-primary md:mx-auto lg:w-[714.95px]">
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
            <div className="flex justify-between items-center mb-4 pb-2 pt-12 border-b border-b-color-line-in-white">
              <h1 className="text-color-text-title text-2xl font-archivo font-bold leading-tight">
                Horários disponíveis
              </h1>
              <button className="text-color-primary-darker font-archivo font-bold leading-tight">
                + Novo Horário
              </button>
            </div>
            <div className="md:flex md:space-x-4">
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
              <div className="flex justify-between items-center md:space-x-4">
                <InputTime
                  labelContent="Dás"
                  id="from"
                  name="from"
                  type="time"
                />
                <div className="border-t-2 w-1/6 mt-12 md:hidden"></div>
                <InputTime labelContent="Até" id="to" name="to" type="time" />
              </div>
            </div>
          </div>
          <div className="px-6 border-t bg-color-box-footer border-color-text-in-primary space-y-8 py-12 mt-16 md:space-y-0 md:flex md:justify-between md:items-center">
            <div className="flex items-center">
              <img src="/images/icons/warning.svg" alt="Aviso" />
              <p className="text-color-text-complement text-sm font-medium leading-relaxed pl-4">
                Importante! <br /> Preencha todos os dados
              </p>
            </div>
            <button className="bg-color-secundary w-full h-14 rounded-lg font-archivo font-bold md:w-48">
              Salvar cadastro
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
