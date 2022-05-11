import { notification } from "antd";

export const notificationMessage = ( type, message, description ) => {
    notification[ type ]( {
        message: message,
        description: description,
        duration: 3,
    } );
};
