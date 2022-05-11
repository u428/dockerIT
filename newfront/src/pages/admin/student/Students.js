import React, { useEffect, useState } from "react";

import Fade from "react-reveal/Fade";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Table, Tag, Card, PageHeader, Modal, Row, Col, Button, Space, Tooltip } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import {getNewStudents, getSingleStudent, deleteNewStudent } from "../../../redux/student/actions";
import ModalStudents from "./modal/ModalStudents";



const Students = () => {

  const {pagination, loading, isActive, students} = useSelector(state=>state.studentReducer);
  console.log(students);


  const dispatch = useDispatch();
  const [ isModalVisible, setIsModalVisible ] = useState( false );

  
  useEffect( () => {
    dispatch( getNewStudents(pagination));
  }, [isModalVisible] );
  
  function deleteStudents (students) {
    Modal.confirm({
      title: "siz shu "+students.id+" ni ochirmoqchimisiz",
      okText: "Xa",
      okType:"danger",
      cancelText:"yoq",
      onOk: () =>{
        dispatch(deleteNewStudent(students.id));
        dispatch( getNewStudents(pagination));
      }
    })
  }

  const showModal = () => {
    setIsModalVisible( true );
  };

  const showEditModal = (id, i) => {
   if(i<=0){
      dispatch(getSingleStudent(id))
    }
  };

  const handleOk = () => {
    setIsModalVisible( false );
  };

  const handleCancel = () => {
    setIsModalVisible( false );
  };


  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'firstName',
      dataIndex: 'firstName',
      key: 'firstName'
    },
    {
      title: 'lastName',
      dataIndex: 'lastName',
      key: 'lastName'
    },
    {
      title: 'Birth day',
      dataIndex: 'dateBirth',
      key: 'birthDay'
    },
    {
      title: 'telNumber',
      dataIndex: 'telNomer',
      key: 'telNomer'
    },
    {
      title: 'Action',
      key: 'action',
      render: ( data ) => {
        return (
          <Space size="middle">
              <Button onClick={() => showEditModal(data.id)}  shape="circle" warning icon={<EditOutlined />} />
              <Button onClick={() => deleteStudents(data)} shape="circle" danger  icon={<DeleteOutlined />} />
          </Space>
        )
      },
    }
  ];


  const handleTableChange = (pagination) => {
    dispatch( getNewStudents(pagination) );
  };

  
  return (
    <Fade>
      <Modal title="Chreate Teacher" visible={ isModalVisible } onOk={ handleOk } onCancel={ handleCancel } footer={ false }>
        <ModalStudents handleOk={ handleOk } handleCancel={ handleCancel } />
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
            Add new Students
          </Button>
        </Col>
      </Row>

      <Card>
        <Table
         columns={ columns } 
         dataSource={ students && students} 
         pagination={pagination}
         loading={loading}
         scroll={ { x: "auto" } } 
         onChange={handleTableChange}
         />
        
      </Card>
    </Fade>
  );
};

export default Students;
