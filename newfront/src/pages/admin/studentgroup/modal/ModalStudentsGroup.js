import React, {useEffect, useState} from 'react'
import { Form, Input, Button, Space, Upload, TreeSelect, DatePicker, Select } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { fetchGetGroupsListSearch } from '../../../../redux/services/api';
import { postStudentGroup, postStudentLogin } from '../../../../redux/student/actions';

const ModalStudentsGroup = ( { handleOk, handleCancel, studentId } ) => {

    const [ form ] = Form.useForm();
    const dispatch = useDispatch();
    let history = useHistory();
    const { Option } = Select;

    const [listGroups, setListGroups]= useState([]);
    const [optionGroups, setOptionGroups] = useState([]);

    useEffect( () => {
        onReset()
    }, [] );

    const onFinish = ( values ) => {
        console.log(values);
            let returns = {
            "studentId": studentId,
            "groupId": values.groupId
            }
            dispatch( postStudentGroup(history, returns));
        handleOk()
        onReset()
    };

    const onFinishFailed = ( errorInfo ) => {
        console.log( 'Failed:', errorInfo );
        onReset()
    };

    const handleSearch = (value)=>{
        console.log(value);

        const returns = fetchGetGroupsListSearch(value);

        returns.then(response =>{
            console.log(response.response);
            setListGroups(response.response.data);
            setOptionGroups(response.response.data.map(d => <Option key={d.id}>{d.name} {d.price} {d.begin}</Option>));
        })
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
                name="groupId" 
                label="choice group" 
                rules={ [ { required: true } ] }>
            <Select
                showSearch
                placeholder="write group name"
                style={{width: "100%"}}
                defaultActiveFirstOption={false}
                showArrow={false}
                filterOption={false}
                onSearch={handleSearch}
                onChange={handleChange}
                notFoundContent={null}
            >
                {optionGroups}
            </Select>
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
                   Set group
                  </Button>
                )}
            </Form.Item>

        </Form>


    )
}

export default ModalStudentsGroup;
