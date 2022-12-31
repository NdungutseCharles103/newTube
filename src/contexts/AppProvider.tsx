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
	const appState = useStore<AppStore>({
		isDark: false,
	});
	useContextProvider(AppContext, appState);
	
	useClientEffect$(() => {
		const sysTheme =
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches;
		if (sysTheme) {
			console.log("dark mode", appState);
			appState.isDark = true;
		}
	});


	return (
		// <div>
		// 	{" "}
			<Slot />
		// </div>
	);
});
