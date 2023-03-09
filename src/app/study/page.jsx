import PageHeader from "../../components/PageHeader/PageHeader";
import TeacherCard from "../../components/TeacherCard/TeacherCard";
import Input from "@/components/Input/Input";
import Select from "@/components/Select/Select";

import styles from "./study.module.css";

export const metadata = {
  title: "Estudar",
};

export default function Study() {
  return (
    <>
      <div className={styles.study}>
        <PageHeader title="Estes são os Proffys disponíveis.">
          <form id="search_teacher" className={styles.search_teacher}>
            <Select
              selectName="subject"
              labelContent="Matéria"
              options={[
                { value: "Portugês", label: "Português" },
                { value: "Matemática", label: "Matemática" },
                { value: "Biologia", label: "Biologia" },
                { value: "Artes", label: "Artes" },
                { value: "História", label: "História" },
                { value: "Geografia", label: "Geografia" },
                { value: "Química", label: "Química" },
                { value: "Física", label: "Física" },
                { value: "Filosofia", label: "Filosofia" },
                { value: "Sociologia", label: "Sociologia" },
                { value: "Inglês", label: "Inglês" },
                { value: "Educação Física", label: "Educação Física" },
              ]}
            />
            <Select
              selectName="weekday"
              labelContent="Dia da semana"
              options={[
                { value: "0", label: "Domingo" },
                { value: "1", label: "Segunda-feira" },
                { value: "2", label: "Terça-feira" },
                { value: "3", label: "Quarta-feira" },
                { value: "4", label: "Quinta-feira" },
                { value: "4", label: "Sexta-feira" },
                { value: "4", label: "Sábado" },
              ]}
            />
            <Input type="time" inputName="time" labelContent="Horário" />
          </form>
        </PageHeader>
        <main>
          <TeacherCard />
          <TeacherCard />
          <TeacherCard />
        </main>
      </div>
    </>
  );
}
