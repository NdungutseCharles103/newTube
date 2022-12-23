import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';

export default component$(() => {
  return (
    <>
      <main class={` flex flex-col w-full bg-whitish`}>
        <Header />
        <section class={`flex flex-col w-full`}>
          <Slot />
        </section>
      </main>
    </>
  );
});
