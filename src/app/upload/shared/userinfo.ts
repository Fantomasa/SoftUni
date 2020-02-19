export class UserInfo {
    key: string;
    email: string;
    phone: string;
    city: string;
    name: string;
    lastname: string;

    constructor(email: string, phone: string, city: string, name: string, lastname: string) {
        this.key = '';
        this.email = email;
        this.phone = phone;
        this.city = city;
        this.name = name;
        this.lastname = lastname;
    }
}
