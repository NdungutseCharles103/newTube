import { component$, Slot, useClientEffect$ } from '@builder.io/qwik';
import Header from '../components/header/header';
import { useApp } from '../contexts/AppProvider';

export default component$(() => {
  const { isDark } = useApp()

  useClientEffect$(()=> {
    console.log(isDark);
  })

  return (
    <>
      <main class={`flex flex-col w-full ${isDark?' bg-darkb text-white':'bg-trueWhite'} h-screen overflow-hidden`}>
        <Header />
        <section class={`flex flex-col w-full h-full px-2 overflow-y-auto`}>
          <Slot />
        </section>
      </main>
    </>
  );
});
