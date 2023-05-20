import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-color-primary min-h-screen flex items-center justify-center lg:p-8">
      <div
        className="flex flex-col items-center justify-center space-y-8 py-4 
      lg:space-y-0 lg:grid lg:grid-rows-layout"
      >
        <div className="space-y-6 lg:space-y-0 lg:row-span-1 lg:grid lg:grid-cols-2 lg:w-screen lg:max-w-[1100px] lg:px-8">
          <div
            className="space-y-4 flex flex-col items-center
          lg:col-span-1 lg:items-start lg:justify-center"
          >
            <img
              src="/images/logo.svg"
              alt="Proffy"
              className="w-80 px-2 md:px-0 lg:w-96"
            />
            <h2
              className="font-poppins text-2xl text-color-text-in-primary text-center
        lg:text-start lg:text-3xl lg:leading-snug"
            >
              Sua plataforma de estudos online!
            </h2>
          </div>
          <img
            src="/images/landing.svg"
            alt="Plataforma de estudos"
            className="lg:col-span-1 w-full"
          />
        </div>
        <div
          className="space-y-8 flex flex-col items-center 
      lg:col-span-2 lg:grid lg:grid-cols-3 lg:row-span-1 lg:space-y-0 lg:px-8"
        >
          <div
            className="flex flex-wrap space-x-2 justify-center
          md:space-x-4
      lg:col-span-2 lg:h-full lg:justify-start lg:items-center lg:w-auto"
          >
            <Link
              href="/study"
              className="font-archivo text-xl flex items-center justify-center w-36 h-24 rounded-lg bg-color-primary-lighter hover:bg-color-primary-light transition 
            md:w-52
          lg:w-64"
            >
              <img
                src="/images/icons/study.svg"
                alt="Livro"
                className="w-10 mr-1 md:mr-4"
              />
              Estudar
            </Link>
            <Link
              href="/give-classes"
              className="font-archivo text-xl flex items-center justify-center w-36 h-24 rounded-lg bg-color-secundary hover:bg-color-secundary-dark transition 
            md:w-52
          lg:w-64"
            >
              <img
                src="/images/icons/give-classes.svg"
                alt="Lousa"
                className="w-10 mr-1 md:mr-4"
              />
              Dar aulas
            </Link>
          </div>
          <p
            className="flex items-center text-sm font-medium text-color-text-in-primary
      lg:col-span-1 lg:h-full"
          >
            Total de<span className="text-color-primary-lighter px-1">X</span>
            conexões já realizadas
            <img
              src="/images/icons/purple-heart.svg"
              alt="Coração roxo"
              className="ml-1"
            />
          </p>
        </div>
      </div>
    </main>
  );
}
