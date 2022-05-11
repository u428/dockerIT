import React from 'react'
import { Form, Input, Button } from 'antd';
const AddProduct = ( { handleOk, handleCancel } ) => {
    const [ form ] = Form.useForm();
    const onFinish = ( values ) => {
        console.log( values );
        handleOk()
    };

    const onFinishFailed = ( errorInfo ) => {
        console.log( 'Failed:', errorInfo );
    };


    const onReset = () => {
        form.resetFields();
    };

    return (

        <Form form={ form } name="add-product" onFinish={ onFinish } onFinishFailed={ onFinishFailed }>
            <Form.Item name="name" label="Neme" rules={ [ { required: true } ] }>
                <Input />
            </Form.Item>
            <Form.Item >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>

        </Form>


    )
}

export default AddProduct
