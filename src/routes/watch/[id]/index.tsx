import { component$, useClientEffect$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';

export default component$(() => {
  const location = useLocation();

  useClientEffect$(({ track }) => {
    console.log('track', track);
    
  });
  
//    useTask$(() => {
//     console.log('component mounted');
//   });

  return (
    <div>
      <h1>SKU</h1>
      <p>Pathname: {location.pathname}</p>
      <p>Person Id: {location.params.id}</p>
      <div>
    </div>
    </div>
  );
});