const auth:String = 'auth';
const login:string = 'login';
const register: string = 'register';
const home:string = 'home';
const profile: string = 'profile';
const search:string = 'search';
const messages: string = 'messages';
const notification: string = 'notification';
const create: string = 'create';


export const RedirectRoutes = {
	auth: {
		base: '',
		login: `/${auth}/${login}`,
		register: `/${auth}/${register}`,
	},
	user:{
		home: `/${home}`,
		search: `/${search}`,
        messages: `/${messages}`,
        notification: `/${notification}`,
        create: `/${create}`,
        profile: `/${profile}`
	}
};