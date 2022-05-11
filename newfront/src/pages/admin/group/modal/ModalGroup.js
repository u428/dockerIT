import React, {useEffect, useState} from 'react'
import { Form, Input, Button, Upload, TreeSelect, DatePicker, Select } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { fetchGetTeachersListSearch, fetchGetSingleTeacher } from '../../../../redux/services/api';
import moment from 'moment';
import { postGroup, putGroup } from '../../../../redux/group/actions';



const ModalGroup = ( { handleOk, handleCancel, count } ) => {
    const [ form ] = Form.useForm();
    const dispatch = useDispatch();
    const { TreeNode } = TreeSelect;
    const { Option } = Select;
    let history = useHistory();
    const { RangePicker } = DatePicker;
    const dateFormat = 'HH:mm';

    const [dating, setDating] = useState([]);
    const [listTeacher, setListTeacher]= useState([])
    const [optionList, setOptionList] =useState([])
    const [languages, setLanguages] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [defaultData, setDefaultData]=useState([]);

    const {isActive, group} = useSelector(state=>state.groupReducer);   

    useEffect( () => {
        if(count > 0 && Object.keys(group).length !== 0){
            fetchGetSingleTeacher(group.teacherId).then(response =>{
                const {teacher} = response.response.data;
                setListTeacher(teacher);
                setOptionList(<Option key={teacher.id}>{teacher.firstName} {teacher.lastName} -{teacher.telNomer.substring(teacher.telNomer.length-5)}</Option>);
                
                form.setFieldsValue({
                    "name": group.name,
                    "price": group.price,
                    "description":group.description,
                    "date":[moment(group.begin, 'HH:mm:ss'), moment(group.finish, 'HH:mm:ss')],
                    'teacher': teacher.firstName+" " +teacher.lastName+" "+teacher.telNomer.substring(teacher.telNomer.length-5),
                    "languageId": group.languageId,
                    "subjectId": group.subjectId
                });
                setLanguages(teacher.languages.map(lang=> <TreeNode key={lang.id} value={lang.id} title ={lang.name}></TreeNode>));
                setSubjects(teacher.subjects.map(sub=><TreeNode key={sub.id} value={sub.id} title ={sub.nameUz}></TreeNode>));
            })
            
        }
    }, [group] );

    useEffect( () => {
        onReset()
    }, [count] );
    
 

    const onFinish = ( values ) => {
        console.log(values);

        if(count>0){
            let returns = {
                "name": values.name,
                "price":values.price+"",
                "teacherId":values.teacher,
                "subjectId":values.subjectId,
                "languageId":values.languageId,
                "description":values.description,
                "begin":dating[0],
                "finish":dating[1],
                "filesId":values.images.file.response
            }
            console.log(returns);

            // dispatch(putGroup(returns));
        }else{

        let returns = {
            "name": values.name,
            "price":Number(values.price),
            "teacherId":values.teacher,
            "subjectId":values.subjectId,
            "languageId":values.languageId,
            "description":values.description,
            "begin":dating[0],
            "finish":dating[1],
            "filesId":values.images.file.response
        }
    

        console.log(returns);

        dispatch(postGroup(history, returns));
    }
        handleOk()
        onReset()
    };

    const onFinishFailed = ( errorInfo ) => {
        console.log( 'Failed:', errorInfo );
        onReset()
    };
    const handleSearch = (value)=>{

        if(value.length > 2){

        const returns = fetchGetTeachersListSearch(value);

        returns.then(response =>{
            console.log(response.data);
            setListTeacher(response.data);
            setOptionList(response.data.map(d => <Option key={d.id}>{d.firstName} {d.lastName} -{d.telNomer.substring(d.telNomer.length-5)}</Option>));
        })
    }
    }

    const handleChange = (value)=>{
        console.log(value);
        const data = listTeacher.filter((red)=>red.id == value);
        console.log(data);
        setLanguages(data[0].languages.map(lang=> <TreeNode key={lang.id} value={lang.id} title ={lang.name}></TreeNode>));
        setSubjects(data[0].subjects.map(sub=><TreeNode key={sub.id} value={sub.id} title ={sub.nameUz}></TreeNode>));
    }


    const onReset = () => {
        form.resetFields();
    };

    function onChange(date, dateString) {
        setDating(dateString);
    }

    const onPreview = async file => {
        let src = file.url;
        if (!src) {
          src = await new Promise(resolve => {
            const reader = new FileReader();
            reader.readAsDataURL(file.originFileObj);
            reader.onload = () => resolve(reader.result);
          });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow.document.write(image.outerHTML);
    };

    return (
        <Form 
        autoComplete='off'
        form={ form } 
        layout="vertical"
        name="add-teacher" 
        onFinish={ onFinish } 
        onFinishFailed={ onFinishFailed }>

            <Form.Item 
                name="name" 
                label="Group name" 
                rules={ [ { required: true, message: "Iltimos ismingizni kiriting" }, {min: 3, max: 20 } ] }>
                <Input />
            </Form.Item>
            <Form.Item 
                name="price"
                label="Group price"
                rules={ [ { required: true, message: "Iltimos familiyangizni kiriting" }, {min: 3, max: 20 } ] }>
                <Input />
            </Form.Item>
            <Form.Item 
                name="description"
                label="Tarif">
                <Input />
            </Form.Item>
            <Form.Item 
                name="date" 
                label="Begin and finish date" 
                rules={ [ { required: true }] }>
                <RangePicker
                    style={{width: "100%"}}
                    picker="time"
                    format={dateFormat}
                    defaultValue={defaultData}
                    onChange={(date, dateString) => onChange(date, dateString)}
                />
            </Form.Item>
            <Form.Item 
                name="teacher" 
                label="choice teacher" 
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
        {optionList}
      </Select>
            </Form.Item>

            <Form.Item 
                name="subjectId" 
                label="Fanni tanlang" 
                rules={ [ { required: true } ] }>
            <TreeSelect
                showSearch
                style={{ width: '100%' }}
                // value={subjects}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                placeholder="Please select"
                allowClear
                treeDefaultExpandAll
                // onChange={() =>{setSubjects()}}
            >
              {subjects}
            </TreeSelect>
            </Form.Item>
            <Form.Item 
                name="languageId" 
                label="Tilni tanlang" 
                rules={ [ { required: true } ] }>
            <TreeSelect
                showSearch
                style={{ width: '100%' }}
                // value={subjects}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                placeholder="Please select"
                allowClear
                treeDefaultExpandAll
                // onChange={() =>{setSubjects()}}
            >
              {languages}
            </TreeSelect>
            </Form.Item>

            <Form.Item 
                name="images" 
                label="Imageni tanlang" 
                rules={ [ { required: true }] }>
                    <Upload.Dragger 
                        maxCount={1}
                        name="file"
                        listType="picture"
                        accept='.png, .jpg, .img'
                        method='post'
                        action="/a23d_m23_i23n/add_image"
                        onPreview={onPreview}
                    >
                        <Button>Imageni yuklash</Button>
                    </Upload.Dragger>
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

export default ModalGroup
