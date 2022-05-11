import React from 'react';
import { Modal } from 'antd';




function CustomModal ( { isModalVisible, title = "title", handleOk, handleCancel, modalBody } ) {
    return (
        <Modal title={ title } visible={ isModalVisible } onOk={ handleOk } onCancel={ handleCancel }>
            { modalBody }
        </Modal>
    )
}

export default CustomModal