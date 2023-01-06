import {
	component$,
	createContext,
	Slot,
	useClientEffect$,
	useContext,
	useContextProvider,
	useStore,
} from "@builder.io/qwik";
import { IPlayerState } from "~/utils/types";

interface AppStore {
	isDark: boolean;
	playerState: IPlayerState
}


export const AppContext = createContext<AppStore>("App");

export const useApp = () => useContext(AppContext);

export const AppProvider = component$(() => {
	const appState = useStore<AppStore>({
		isDark: false,
		playerState: {
			progress: 0,
			isFullScreen: false,
			isMuted: false,
			isPicInPic: false,
			isPlaying: false,
			volume: 1,
			loop: 'false',
			speed: 1,
			shuffle: false,
		}
	});
	useContextProvider(AppContext, appState);
	
	useClientEffect$(() => {
		const sysTheme =
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches;
		if (sysTheme) {
			// console.log("dark mode", appState);
			// appState.isDark = true;
		}
	});


	return (
		<div class='provider'>
			<Slot />
		</div>
	);
});
