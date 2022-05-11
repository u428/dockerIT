import React, { useEffect, useState } from "react";

import Fade from "react-reveal/Fade";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Table, Tag, Card, PageHeader, Modal, Row, Col, Button, Space, Tooltip } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { getTeachers, deleteTeacher, getSingleTeacher } from "../../../redux/teacher/actions";
import AddTeacher from "./modal/AddTeacher";
import EditTeacher from "./modal/EditTeacher";



const Teachers = () => {

  const {pagination, loading, isActive, teachers} = useSelector(state=>state.teacherReducer);

  const dispatch = useDispatch();
  const [ isModalVisible, setIsModalVisible ] = useState( false );
  const [ isEditModalVisible, setIsEditModalVisible ] = useState( false );

  
  function deleteTeachers (teacher) {
    Modal.confirm({
      title: "siz shu "+teacher.firstName.toUpperCase()+" "+teacher.lastName.toUpperCase()+" ni ochirmoqchimisiz",
      okText: "Xa",
      okType:"danger",
      cancelText:"yoq",
      onOk: () =>{
        dispatch(deleteTeacher(teacher.id));
        dispatch( getTeachers(pagination));
      }
    })
  }

  const showModal = () => {
    setIsModalVisible( true );
  };
  const showEditModal = (id) => {
    dispatch(getSingleTeacher(id))
    setIsEditModalVisible( true );
  };

  const handleOk = () => {
    setIsModalVisible( false );
    // dispatch( getTeachers(pagination));
  };
  const handleOk2 = () => {
    setIsEditModalVisible( false );
    // dispatch( getTeachers(pagination));
  };

  const handleCancel = () => {
    setIsModalVisible( false );
  };
  const handleEDitModalCancel = () => {
    setIsEditModalVisible( false );
  };

  useEffect( () => {
    dispatch( getTeachers(pagination));
  }, [isModalVisible,isEditModalVisible ] );

  const columns = [
    {
      title: 'ID',
      dataIndex: 'teacher',
      key: 'id',
      render: text => <p>{ text.id }</p>,
    },
    {
      title: 'fullName',
      dataIndex: 'teacher',
      key: 'fullName',
      render: text => <p>{ text.firstName +" "+text.lastName }</p>,
    },
    {
      title: 'gmail',
      dataIndex: 'teacher',
      key: 'gmail',
      render: text => <p>{ text.gmail }</p>,
    },
    {
      title: 'telNumber',
      dataIndex: 'teacher',
      key: 'telNomer',
      render: text => <p>{ text.telNomer }</p>,
    },
    {
      title: 'language',
      dataIndex: 'teacher',
      key: 'languages',
      render: text => (
        
        <>
        {
        text.languages.map(lang =>{
          const name = lang.name;
          const id = lang.id;
          return(
            <Tag color="geekblue" key={ id }>
              {name}
            </Tag>
          )
        })
      }
      </>
      )
    },
    {
      title: 'subjects',
      dataIndex: 'teacher',
      key: 'subjects',
      render: text => (
        <>
        {
        text.subjects.map(lang =>{
          const name = lang.nameUz;
          const id = lang.id;
          return(
            <Tag color="geekblue" key={ id }>
              {name}
            </Tag>
          )
        })
      }
      </>
      )
    },
    {
      title: 'groups',
      dataIndex: 'groups',
      key: 'groups',
      render: text => <Button type="primary" shape="circle">{text}</Button>
    },
    {
      title: 'Action',
      key: 'action',
      render: ( data ) => {
        return (
          <Space size="middle">
              <Button onClick={() => showEditModal(data.teacher.id)}  shape="circle" warning icon={<EditOutlined />} />
              <Button onClick={() => deleteTeachers(data.teacher)} shape="circle" danger  icon={<DeleteOutlined />} />
          </Space>
        )
      },
    }
  ];


  const handleTableChange = (pagination) => {
   
    dispatch( getTeachers(pagination) );
    // if(reducer.teachers){
    //   console.log("handle ishladi");
    //   setPagination(reducer.teachers.page_info)
    // }
  };

  
  return (
    <Fade>
      <Modal title="Chreate Teacher" visible={ isModalVisible } onOk={ handleOk } onCancel={ handleCancel } footer={ false }>
        <AddTeacher handleOk={ handleOk } handleCancel={ handleCancel } />
      </Modal>
      <Modal title="Change Teacher" visible={ isEditModalVisible } onOk={ handleOk2 } onCancel={ handleEDitModalCancel } footer={ false }>
        <EditTeacher handleOk2={ handleOk2 } handleCancel={ handleEDitModalCancel } />
      </Modal>

      <Row justify="space-between" align="middle">
        <Col>
          <PageHeader
            className="site-page-header"
            // onBack={ () => null }
            title="Title"
            subTitle="This is a subtitle"
          />
        </Col>
        <Col>
          <Button type="primary" onClick={ showModal }>
            Add teacher
          </Button>
        </Col>
      </Row>

      <Card>
        <Table
         columns={ columns } 
         dataSource={ teachers &&teachers} 
         pagination={pagination}
         loading={loading}
         scroll={ { x: "auto" } } 
         onChange={handleTableChange}
         />
        
      </Card>
    </Fade>
  );
};

export default Teachers;
