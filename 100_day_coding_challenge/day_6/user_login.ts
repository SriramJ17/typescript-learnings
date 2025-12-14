class User {
    username: string;
    isLoggedIn: boolean = false;

    constructor(username:string) {
        this.username=username
    }

    login():void {
        if (this.isLoggedIn){
            console.log("Already logged in")
        } else {
            this.isLoggedIn=true;
        }
    }

    logout():void {
        if (this.isLoggedIn){
            this.isLoggedIn=false;
        } else {
            console.log("Already logged out")
        }
    }

    getStatus():string {
        if (this.isLoggedIn) { return "Logged in" } else { return "Logged out" }
    }
}

const user = new User("Alice")

user.login();
user.login();
console.log(user.getStatus());

user.logout();
console.log(user.getStatus());
