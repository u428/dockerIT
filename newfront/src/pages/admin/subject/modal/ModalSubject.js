import React, {useEffect, useState} from 'react'
import { Form, Input, Button, Space, Upload, TreeSelect, DatePicker, Select } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getSubjects, postSubject, putSubject } from '../../../../redux/subject/actions';
import moment from 'moment';
import ImgCrop from 'antd-img-crop';
import Subject from '../Subject';

const ModalSubject = ( { handleOk, handleCancel, count } ) => {

    const [ form ] = Form.useForm();
    const dispatch = useDispatch();
    const { TreeNode } = TreeSelect;
    let history = useHistory();

    const {isActive, subject} = useSelector(state => state.subjectReducer);

    useEffect( () => {
        
        console.log(subject);
        console.log(count);
        if(count > 0){
            console.log(count);
            form.setFieldsValue({
                "nameUz":subject.nameUz,
                "nameRu":subject.nameRu,
                "nameEn":subject.nameEn,
                "description":subject.description
            });
        }
    }, [subject] );

    useEffect( () => {
        console.log(count);
        onReset()
    }, [count] );

    const onFinish = ( values ) => {
        console.log(values);
        
        if(count > 0){
            let returns = {
                "id":subject.id,
                "nameUz":values.nameUz,
                "nameRu":values.nameRu,
                "nameEn":values.nameEn,
                "description":values.description
            }
            dispatch(putSubject(history, returns));
        }else{
            let returns = {
            "nameUz":values.nameUz,
            "nameRu":values.nameRu,
            "nameEn":values.nameEn,
            "description":values.description
            }
            dispatch(postSubject(history, returns));
        }
        handleOk()
        onReset()
    };

    const onFinishFailed = ( errorInfo ) => {
        console.log( 'Failed:', errorInfo );
        onReset()
    };


    const onReset = () => {
        form.resetFields();
    };

    return (

        <Form 
        autoComplete='off'
        form={ form } 
        layout="vertical"
        name="subject" 
        onFinish={ onFinish } 
        onFinishFailed={ onFinishFailed }>

            <Form.Item 
                name="nameUz" 
                label="O'zbekcha nomi" 
                rules={ [ { required: true, message: "Iltimos joyni toldiring" }, {min: 3, max: 20 } ] }>
                <Input />
            </Form.Item>
            <Form.Item 
                name="nameRu" 
                label="Ruscha nomi" 
                rules={ [ { required: true, message: "Iltimos joyni toldiring" }, {min: 3, max: 20 } ] }>
                <Input />
            </Form.Item>
            <Form.Item 
                name="nameEn" 
                label="Inglizcha nomi" 
                rules={ [ { required: true, message: "Iltimos joyni toldiring" }, {min: 3, max: 20 } ] }>
                <Input />
            </Form.Item>
            <Form.Item 
                name="description" 
                label="tarif bering">
                 <Input />
            </Form.Item>
            
           <Form.Item shouldUpdate>
                {() => (
                  <Button
                    block
                    type="primary"
                    htmlType="submit"
                    disabled={
                      !form.isFieldsTouched(true) ||
                      !!form.getFieldsError().filter(({ errors }) => errors.length).length
                    }
                  >
                   Add Teacher
                  </Button>
                )}
            </Form.Item>

        </Form>


    )
}

export default ModalSubject
