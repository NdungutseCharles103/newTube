import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';

export default component$(() => {
  return (
    <>
      <main class={`flex flex-col w-full bg-trueWhite h-screen overflow-hidden`}>
        <Header />
        <section class={`flex flex-col w-full h-full px-2 overflow-y-auto`}>
          <Slot />
        </section>
      </main>
    </>
  );
});
