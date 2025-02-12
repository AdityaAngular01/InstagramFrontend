const auth:String = 'auth';
const login:string = 'login';
const register: string = 'register';

export const RedirectRoutes = {
	auth: {
		login: `/${auth}/${login}`,
		register: `/${auth}/${register}`,
	},
};