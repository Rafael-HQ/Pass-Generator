export default function passGenerator (){
    let password: string = '';
    let length = 12;
    const chars: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
    for (let index = 0; index < length; index++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}