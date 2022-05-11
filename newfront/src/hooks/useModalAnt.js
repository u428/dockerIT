import { useState } from "react"

export const useModalAnt = ( { initialOpen = false } = {} ) => {

    const [ isModalVisible, setIsModalVisible ] = useState( initialOpen );

    const showModal = () => {
        setIsModalVisible( true );
    };

    const handleOk = () => {
        setIsModalVisible( false );
    };

    const handleCancel = () => {
        setIsModalVisible( false );
    };

    return { handleOk, showModal, isModalVisible, handleCancel };


}