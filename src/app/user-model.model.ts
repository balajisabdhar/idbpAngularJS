export class UserModel {

    public username: String = "ibmAdmin";
    public password: String = "ibmPassword";

    public getUsername():String{
        return this.username;
    }

    public setUsername(username:String){
        this.username = username;
    }

    public getPassword():String{
        return this.password;
    }

    public setPassword(password:String){
        this.password = password;
    }

}
