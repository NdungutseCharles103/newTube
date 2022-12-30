import {
	component$,
	createContext,
	JSXChildren,
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

export interface AppProviderProps {
	children: JSXChildren;
}

export const AppProvider = component$<any>(({ children }) => {

	useClientEffect$(() => {
		// console.log("children", children);
	});

	useContextProvider(
		AppContext,
		useStore<AppStore>({
			isDark: false,
		})
	);

	return children;
});
