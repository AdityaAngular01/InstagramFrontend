import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { UserService } from "../../../service/http/user/user.service";

@Component({
	selector: "app-profile",
	imports: [],
	templateUrl: "./profile.component.html",
	styleUrl: "./profile.component.css",
})
export class ProfileComponent implements OnInit{
	protected user:any;
	constructor(private title: Title, private userService: UserService) {
		this.title.setTitle("Instagram - Profile");
	}

	ngOnInit(): void {
		this.getUserProfile();
	}

	getUserProfile(){
		this.userService.getProfile().subscribe({
			next: (res:any)=>{
				console.log(res);
				this.user = res;	
			}, error: (err:any)=>{
				console.log(err);    
			}
		})
	}

	getArray(n:number){
		let array = [];
		for(let i=0; i<n; i++){
            array.push(i);
        }
        return array;
	}
}
