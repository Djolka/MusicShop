export interface User {
    name: string;
    lastName:string;
    password: string;
    email: string;
    address?: string;
    country?: string;
    phoneNumber?: number;
    // picture: {
    // type: ... ,
    // required: false,
    // },
}