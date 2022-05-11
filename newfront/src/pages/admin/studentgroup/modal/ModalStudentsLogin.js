import React, {useEffect, useState} from 'react'
import { Form, Input, Button, Space, Upload, TreeSelect, DatePicker, Select } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { fetchGetNewStudentOne } from '../../../../redux/services/api';
import { postStudentGroup, postStudentLogin } from '../../../../redux/student/actions';

const ModalStudentsLogin = ( { handleOk, handleCancel, count } ) => {

    const [ form ] = Form.useForm();
    const dispatch = useDispatch();
    let history = useHistory();
    const { Option } = Select;

    const [listStudents, setListStudents]= useState([]);
    const [optionStudents, setOptionStudents] = useState([]);

    // const {isActive, student} = useSelector(state => state.studentReducer);

    // useEffect( () => {
    //     if(count > 0){
    //         form.setFieldsValue({
    //             "firstName":student.firstName,
    //             "lastName":student.lastName,
    //             "telNumber":student.telNumber,
    //             "qtelNomer":student.qtelNomer,
    //             "description":student.description
    //         });
    //     }
    // }, [student] );

    useEffect( () => {
        onReset()
    }, [count] );

    const onFinish = ( values ) => {
        console.log(values);
            let returns = {
            "studentId":values.Student,
            "login":values.login,
            "password":values.password
            }
            dispatch( postStudentLogin(history, returns));
        handleOk()
        onReset()
    };

    const onFinishFailed = ( errorInfo ) => {
        console.log( 'Failed:', errorInfo );
        onReset()
    };

    const handleSearch = (value)=>{
        console.log(value);
        if(value.length > 2){

        const returns = fetchGetNewStudentOne(value);

        returns.then(response =>{
            console.log(response.response);
            setListStudents(response.response.data);
            setOptionStudents(response.response.data.map(d => <Option key={d.id}>{d.firstName} {d.lastName} {d.telNomer.substring(d.telNomer.length-4)}</Option>));
        })
        }
    }

    const handleChange = (value)=>{
        // console.log(value);
        // const data = listTeacher.filter((red)=>red.id == value);
        // console.log(data);
        // setLanguages(data[0].languages.map(lang=> <TreeNode key={lang.id} value={lang.id} title ={lang.name}></TreeNode>));
        // setSubjects(data[0].subjects.map(sub=><TreeNode key={sub.id} value={sub.id} title ={sub.nameUz}></TreeNode>));
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
                name="Student" 
                label="choice student" 
                rules={ [ { required: true } ] }>
            <Select
                showSearch
                placeholder="write teacher name"
                style={{width: "100%"}}
                defaultActiveFirstOption={false}
                showArrow={false}
                filterOption={false}
                onSearch={handleSearch}
                onChange={handleChange}
                notFoundContent={null}
            >
                {optionStudents}
            </Select>
            </Form.Item>
            <Form.Item 
                name="login"
                label="Login" 
                rules={ [ { required: true }, {min: 3, max: 20 } ] } hasFeedback>
                <Input />
            </Form.Item>
            <Form.Item 
                name="password" 
                label="Parol" 
                rules={ [ { required: true }, {min: 8, max: 15 } ] }
                hasFeedback
                >
                <Input.Password placeholder="input password" />
            </Form.Item>
            <Form.Item 
                name="repassword" 
                dependencies={['password']} 
                label="Parolni Takrorlang" 
                rules={ [ {
                     required: true 
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                        }
                        return Promise.reject(new Error('The two passwords that you entered do not match!'));
                    }
                }), ] }
                hasFeedback
                >
                <Input.Password placeholder="input password" />
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

export default ModalStudentsLogin;
