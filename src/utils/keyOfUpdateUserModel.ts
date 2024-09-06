export const keyOfUpdateUserModel = (field: string, value: string) => {
    let dataToSend = {};
    switch(field) {
        case 'username': 
            dataToSend = {username: value} 
            break;
        case 'firstName': 
            dataToSend = {firstName: value} 
            break;
        case 'secondName': 
            dataToSend = {secondName: value} 
            break;
        case 'password': 
            dataToSend = {password: value} 
            break;
        case 'phone': 
            dataToSend = {phone: value} 
            break;
        case 'email': 
            dataToSend = {email: value} 
            break;
    };
    return dataToSend;
};