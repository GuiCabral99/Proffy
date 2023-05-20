import Link from "next/link";

export default function Header(props) {
  return (
    <main className="bg-color-primary px-6 w-full">
      <div className="flex justify-between items-center py-4">
        <Link href="/">
          <img src="/images/icons/back.svg" alt="Seta para esquerda" />
        </Link>
        <img src="/images/logo.svg" alt="Proffy" className="w-14" />
      </div>
      <div className="py-8 md:flex md:justify-center">
        <div className="space-y-8 md:w-[687px] md:m-auto lg:w-[714.95px]">
          <div className="md:max-w-sm space-y-4">
            <strong className="font-archivo text-4xl">{props.title}</strong>
            <p className="text-color-text-in-primary">{props.paragraph}</p>
          </div>
          <div>{props.children}</div>
        </div>
      </div>
    </main>
  );
}
