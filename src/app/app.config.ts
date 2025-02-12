import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";
import { providePrimeNG } from "primeng/config";
import Aura from "@primeng/themes/aura";
import { routes } from "./app.routes";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { authInterceptor } from "./service/middlewares/auth.interceptor";
import { MyPreset } from "./mypreset";

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes),
		provideHttpClient(withInterceptors([authInterceptor])),
		providePrimeNG({
			theme: {
				preset: MyPreset,
				options: {
					darkModeSelector: ".my-app-dark",
				},
			},
			zIndex: {
				modal: 1100, // dialog, sidebar
				overlay: 1000, // dropdown, overlaypanel
				menu: 1000, // overlay menus
				tooltip: 1100, // tooltip
			},
		}),
		provideAnimationsAsync(),
	],
};
