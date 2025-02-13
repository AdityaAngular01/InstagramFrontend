const auth:String = 'auth';
const login:string = 'login';
const register: string = 'register';
const home:string = 'home';
const profile: string = 'profile';
const search:string = 'search';
const messages: string = 'messages';
const notification: string = 'notification';
const create: string = 'create';
const posts:string = '';
const reels:string = 'reels';
const tags: string = 'tags';
const viewPost: string = 'view/post';


export const RedirectRoutes = {
	auth: {
		base: "",
		login: `/${auth}/${login}`,
		register: `/${auth}/${register}`,
	},
	user: {
		home: `/${home}`,
		search: `/${search}`,
		messages: `/${messages}`,
		notification: `/${notification}`,
		create: `/${create}`,
		profile: {
			base: `/${profile}`,
			posts: `/${profile}/${posts}`,
			reels: `/${profile}/${reels}`,
			tags: `/${profile}/${tags}`,
		},
		viewPost: `/${viewPost}`,
	},
};