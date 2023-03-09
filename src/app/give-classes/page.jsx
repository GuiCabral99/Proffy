"use client";
import PageHeader from "@/components/PageHeader/PageHeader";
import Input from "@/components/Input/Input";
import TextArea from "@/components/TextArea/textarea";
import Select from "@/components/Select/Select";

import styles from "./give_classes.module.css";

import { useState, useEffect } from "react";

const GiveClasses = () => {
  const [scheduleItems, setScheduleItem] = useState([
    { week_day: 0, from: "10:00 AM", to: "11:00 AM" },
  ]);
  function addNewScheduleItem() {
    setScheduleItem([...scheduleItems, { week_day: 0, from: "", to: "" }]);
    console.log(scheduleItems);
  }

  const [data, setData] = useState();

  return (
    <>
      <div className={styles.give_classes}>
        <PageHeader
          title="Que incrível que você quer dar aulas."
          subtitle="Mas primeiro, precisamos saber mais sobre você"
        />
        <main>
          <fieldset>
            <legend>Seus dados</legend>
            <Input labelContent="Nome completo" inputName="name" type="text" />
            <Input labelContent="Avatar" inputName="avatar" type="text" />
            <Input labelContent="WhatsApp" inputName="watsapp" type="number" />
            <TextArea labelContent="Biografia" textareaName="bio" />
          </fieldset>
          <fieldset>
            <legend>Sobre a aula</legend>
            <Select
              labelContent="Matéria"
              selectName="subject"
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
            <Input
              labelContent="Valor por hora de aula"
              inputName="cost"
              type="number"
            />
          </fieldset>
          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Adicionar horário
              </button>
            </legend>
            {scheduleItems.map((scheduleItem) => {
              return (
                <div
                  key={scheduleItem.week_day}
                  className={styles.schedule_block}
                >
                  <Select
                    labelContent="Dia da semana"
                    selectName="week_day"
                    options={[
                      { value: "0", label: "Domingo" },
                      { value: "1", label: "Segunda-feira" },
                      { value: "2", label: "Terça-feira" },
                      { value: "3", label: "Quarta-feira" },
                      { value: "4", label: "Quinta-feira" },
                      { value: "5", label: "Sexta-feira" },
                      { value: "6", label: "Sábado" },
                    ]}
                  />
                  <Input type="time" labelContent="As" inputName="from" />
                  <Input type="time" labelContent="Até" inputName="to" />
                </div>
              );
            })}
          </fieldset>
          <footer>
            <p>
              <img src="/images/icons/warning.svg" alt="alerta!" />
              Importante! <br />
              Preencha todos os dados
            </p>
            <button type="submit">Salvar dados</button>
          </footer>
        </main>
      </div>
    </>
  );
};

export default GiveClasses;
