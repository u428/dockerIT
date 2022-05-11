import React, {useEffect, useRef, useState} from 'react'
import { Form, Input, Button, Space, Upload, TreeSelect, DatePicker, Select, Option  } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { postTeacher, getSingleTeacher, putTeacher } from "../../../../redux/teacher/actions";
import {getLanguages} from "../../../../redux/lang/actions";
import { getSubjects } from '../../../../redux/subject/actions';
import moment from 'moment';
import { EyeInvisibleOutlined, EyeTwoTone, UploadOutlined, InboxOutlined } from '@ant-design/icons';
import { MaskedInput } from 'antd-mask-input';

const options = [{ id: 3, value: 'Boshqa' }, {id: 1, value: 'Erkak' }, {id: 2, value: 'Ayol' }];
const EditTeacher = ( { handleOk2, handleEDitModalCancel } ) => {
    const [ form ] = Form.useForm();
    const dispatch = useDispatch();
    const { TreeNode } = TreeSelect;
    let history = useHistory();
    let emailRef = useRef()

    const [initValue, setInitValue] = useState({});

    const reduce = useSelector(state=>state.languageReducer);
    const reducer = useSelector(state=>state.subjectReducer);
    const {teacher, isActive} = useSelector(state=>state.teacherReducer);
    const dateFormat = 'YYYY-MM-DD';
    const [dating, setDating] = useState("");

    console.log(teacher);
    console.log(isActive);
    console.log(initValue);

    useEffect( () => {
        dispatch( getLanguages());
        dispatch( getSubjects());
    }, [] );

    useEffect(() =>{
        
        if(isActive){
            form.setFieldsValue({
            "firstName": teacher.firstName,
            "lastName": teacher.lastName,
            "middleName":teacher.middleName,
            "telNomer":teacher.telNomer,
            "tgLink":teacher.tgLink,
            "inLink":teacher.inLink,
            "fLink":teacher.flink,
            "gmail":teacher.gmail,
            "description":teacher.description,
            "birthDate":moment(teacher.dateBirth, dateFormat),
            "password":teacher.password,
            "subjectId":teacher.subjects.map((item)=> item.id),
            "languageId":teacher.languages.map((item) => item.id),
            "images": teacher.imagesId,
            "gender":   teacher.gender
            });
            // setDating(teacher.dateBirth)
        }
       
    }, [isActive])

    const onFinish = ( values ) => {
        let imageId;
        console.log(values);
        console.log(values.images.file);
        if(values.images.file){
            imageId = values.images.file.response;
        }else{
            imageId = values.images;
        }
        console.log(imageId);

        let returns = {
            "id":teacher.id,
            "firstName": values.firstName,
            "lastName": values.lastName,
            "middleName":values.middleName,
            "telNomer":values.telNomer,
            "tgLink":values.tgLink,
            "inLink":values.inLink,
            "fLink":values.fLink,
            "gmail":values.gmail,
            "description":values.description,
            "login":values.login,
            "password":values.password,
            "subjectIds":values.subjectId,
            "langIds":values.languageId,
            "fileId":imageId,
            "dateBirth": dating,
            "gender": values.gender
        }

        console.log(returns);

        dispatch(putTeacher(history, returns));
        handleOk2()
        onReset()
    };

    const onFinishFailed = ( errorInfo ) => {
        console.log( 'Failed:', errorInfo );
    };


    const onReset = () => {
        form.resetFields();
    };

    function onChange(date, dateString) {
        setDating(dateString);
    }
    const handleInputChange = e => {
        if (!e.target.value) {
            emailRef.current.setInputValue("+998(__) ___ __ __");
        }
    };

    return (

        <Form 
        form={ form } 
        layout="vertical"
        name="edit-teacher"
        onFinish={ onFinish } 
        onFinishFailed={ onFinishFailed }>

            <Form.Item name="firstName" label="Ismingiz" rules={ [ { required: true, message: "Iltimos ismingizni kiriting" } ] }>
                <Input />
            </Form.Item>
            <Form.Item name="lastName" label="Familiyangiz" rules={ [ { required: true, message: "Iltimos familiyangizni kiriting" } ] }>
                <Input />
            </Form.Item>
            <Form.Item name="middleName" label="Otangizni ismi" rules={ [ { required: true } ] }>
                <Input />
            </Form.Item>
            <Form.Item 
                name="birthDate" 
                label="Tugilgan sana">
                <DatePicker 
                    style={{width: "100%"}}
                    format={dateFormat}
                    onChange={(date, dateString) => onChange(date, dateString)}
                      />
            </Form.Item>
            <Form.Item 
                name="gender" 
                label="Jinsingiz" 
                rules={ [ { required: true }] }>
                <Select>
                    <>
                    {
                        options.map(item =>{
                            
                            return(
                                <Select.Option value={item.id}> {item.value}</Select.Option>
                            )
                            
                        })
                    }
                    </>
                </Select>
            </Form.Item>
            <Form.Item name="gmail" label="G-mail" rules={ [ { required: false } ] }>
                <Input />
            </Form.Item>
            <Form.Item name="telNomer" label="Telefon nomer" rules={ [ { required: true } ] }>
                <MaskedInput
        ref={emailRef}
        mask="+998(00) 000 00 00"
        // onChange={handleInputChange}
        // onFocus={handleFocus}
        // onBlur={handleBlur}
      />
            </Form.Item>
            <Form.Item name="tgLink" label="Telegram link" rules={ [ { required: false } ] }>
                <Input />
            </Form.Item>
            <Form.Item name="fLink" label="Facebook link" rules={ [ { required: false } ] }>
                <Input />
            </Form.Item>
            <Form.Item name="inLink" label="Instagram link" rules={ [ { required: false } ] }>
                <Input />
            </Form.Item>

            <Form.Item name="languageId" label="Tilni tanlang" rules={ [ { required: true } ] }>
            <TreeSelect
                showSearch
                style={{ width: '100%' }}
                // value={languages}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                placeholder="Please select"
                allowClear
                multiple
                treeDefaultExpandAll
                // onChange={()=>{setLanguages()}}
            >
               <>
               {
                   reduce.isActive && reduce.language.map(lang =>{
                       return(
                            <TreeNode key={lang.id} value={lang.id} title ={lang.name}></TreeNode>
                       )
                   })
               }
               </>
            </TreeSelect>
            </Form.Item>

            <Form.Item name="subjectId" label="Fanni tanlang" rules={ [ { required: true } ] }>
            <TreeSelect
                showSearch
                style={{ width: '100%' }}
                // value={subjects}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                placeholder="Please select"
                allowClear
                multiple
                treeDefaultExpandAll
                // onChange={() =>{setSubjects()}}
            >
               <>
               {
                   reducer.subjects.map(lang =>{
                       return(
                            <TreeNode key={lang.id} value={lang.id} title ={lang.nameUz}></TreeNode>
                       )
                   })
               }
               </>
            </TreeSelect>
            </Form.Item>
            <Form.Item name="images" label="Imageni tanlang">
                <Upload.Dragger 
                maxCount={1}
                name="file"
                listType="picture"
                accept='.png, .jpg, .img'
                method='post'
                action="/a23d_m23_i23n/add_image"
                >
                    <Button>Imageni yuklash</Button>
                </Upload.Dragger>
            </Form.Item>
            
            <Form.Item >
                <Button block type="primary" htmlType="submit">
                    Edit
                </Button>
            </Form.Item>

        </Form>


    )
}

export default EditTeacher
