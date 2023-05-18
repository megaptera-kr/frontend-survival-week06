import { ReactNode } from 'react';

type Props = {
  children: string | ReactNode;
}

export default function Layout({ children }:Props) {
  return (
    <main className="container m-auto">
      <h1 className="font-extrabold text-4xl w-full text-center my-10">
        메가테라 푸드코트 키오스크
      </h1>
      <section className="grid grid-cols-2">
        {children}
      </section>
    </main>
  );
}
