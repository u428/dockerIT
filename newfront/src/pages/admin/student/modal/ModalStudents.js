import React, {useEffect, useState} from 'react'
import { Form, Input, Button, Space, Upload, TreeSelect, DatePicker, Select } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { postNewStudent, putNewStudent } from '../../../../redux/student/actions';
import moment from 'moment';
import { MaskedInput } from 'antd-mask-input';

const ModalStudents = ( { handleOk, handleCancel, count } ) => {

    const [ form ] = Form.useForm();
    const dispatch = useDispatch();
    let history = useHistory();
    const dateFormat = 'DD.MM.YYYY';

    const [dating, setDating] = useState(null);

    const {isActive, student} = useSelector(state => state.studentReducer);

    useEffect( () => {
        if(count > 0){
            form.setFieldsValue({
                "firstName":student.firstName,
                "lastName":student.lastName,
                "telNumber":student.telNumber,
                "qtelNomer":student.qtelNomer,
                "description":student.description
            });
        }
    }, [student] );

    useEffect( () => {
        onReset()
    }, [count] );

    const onFinish = ( values ) => {
        console.log(values);
        
        if(count > 0){
            let returns = {
                "id":student.id,
                "firstName":values.firstName,
                "lastName":values.lastName,
                "telNumber":values.telNumber,
                "qTelNumber":values.qtelNomer,
                "birthDate":dating,
                "description":values.description
            }
            dispatch(putNewStudent(history, returns));
        }else{
            let returns = {
            "firstName":values.firstName,
            "lastName":values.lastName,
            "telNumber":values.telNumber,
            "qTelNumber":values.qtelNomer,
            "birthDate":dating,
            "description":values.description
            }
            dispatch(postNewStudent(history, returns));
        }
        handleOk()
        onReset()
    };

    const onFinishFailed = ( errorInfo ) => {
        console.log( 'Failed:', errorInfo );
        onReset()
    };

    function onChange(date, dateString) {
        setDating(dateString);
    }

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
                name="firstName" 
                label="Ismingizni kiriting" 
                rules={ [ { required: true, message: "Iltimos joyni toldiring" }, {min: 3, max: 20 } ] }>
                <Input />
            </Form.Item>
            <Form.Item 
                name="lastName" 
                label="Familyangizni kiriting" 
                rules={ [ { required: true, message: "Iltimos joyni toldiring" }, {min: 3, max: 20 } ] }>
                <Input />
            </Form.Item>
            <Form.Item 
                name="birthDate" 
                label="Tugilgan sana" 
                rules={ [ { required: true }] }>
                <DatePicker 
                    style={{width: "100%"}}
                    defaultValue={moment()}
                    format={dateFormat}
                    onChange={(date, dateString) => onChange(date, dateString)}
                      />
            </Form.Item>
            <Form.Item 
                name="telNumber" 
                label="telefon ramaingiz" 
                rules={ [ { required: true, message: "Iltimos joyni toldiring" }, {min: 3, max: 20 } ] }>
                <MaskedInput
        mask="+998(00) 000 00 00"
        // onChange={handleInputChange}
        // onFocus={handleFocus}
        // onBlur={handleBlur}
      />
            </Form.Item>
            <Form.Item 
                name="qtelNomer" 
                label="qoshimcha telefon ramaingiz" 
                rules={ [ {min: 3, max: 20 } ] }>
                <MaskedInput
        mask="+998(00) 000 00 00"
        // onChange={handleInputChange}
        // onFocus={handleFocus}
        // onBlur={handleBlur}
      />
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

export default ModalStudents
