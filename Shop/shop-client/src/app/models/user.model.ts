export interface User {
    _id: string;
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