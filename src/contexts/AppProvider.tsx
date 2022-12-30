import {
	component$,
	createContext,
	Slot,
	useClientEffect$,
	useContext,
	useContextProvider,
	useStore,
} from "@builder.io/qwik";

interface AppStore {
	isDark: boolean;
}

export const AppContext = createContext<AppStore>("App");

export const useApp = () => useContext(AppContext);


export const AppProvider = component$(() => {

	useClientEffect$(() => {
		// console.log("children", children);
	});

	useContextProvider(
		AppContext,
		useStore<AppStore>({
			isDark: false,
		})
	);

	return  <Slot />;
});
