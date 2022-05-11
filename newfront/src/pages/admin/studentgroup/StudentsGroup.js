import React, { useEffect, useState } from "react";

import Fade from "react-reveal/Fade";
import { useHistory } from "react-router";
import { EditOutlined, DeleteOutlined, UsergroupAddOutlined,InfoCircleOutlined} from '@ant-design/icons';
import { Table, Tag, Card, PageHeader, Modal, Row, Col, Button, Space, Tooltip } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import {getStudents, getSingleStudent, getSingleGroupStudent} from "../../../redux/student/actions";
import ModalStudentsLogin from "./modal/ModalStudentsLogin";
import ModalStudentsGroup from "./modal/ModalStudentsGroup";



const StudentsGroup = () => {

  const {pagination, loading, isActive, students} = useSelector(state=>state.studentReducer);
  let history = useHistory();


  const dispatch = useDispatch();
  const [ isModalLoginVisible, setIsModalLoginVisible ] = useState( false );
  const [ isModalGroupVisible, setIsModalGroupVisible ] = useState( false );

  const [studentId, setStudentId] = useState(0);
  
  useEffect( () => {
    dispatch( getStudents(pagination));
  }, [isModalLoginVisible,isModalGroupVisible] );

  function addGroupToStudent (students) {
      console.log(students);
      setStudentId(students.id);
      setIsModalGroupVisible( true );
  }

  function viewSingleStudent (students) {
    dispatch(getSingleGroupStudent(history, students.id));
    dispatch(getSingleStudent(history, students.id));
  }

  const showModalLogin = () => {
    setIsModalLoginVisible( true );
  };

  const handleOkLogin = () => {
    setIsModalLoginVisible( false );
  };
  const handleOkGroup = () => {
    setIsModalGroupVisible( false );
  };

  const handleCancel = () => {
    setIsModalLoginVisible( false );
  };
  const handleCancelGroup = () => {
    setIsModalGroupVisible( false );
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
      key: 'dateBirth'
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
              <Button onClick={() => addGroupToStudent(data)} shape="circle" style={{color: "#399EFF"}}  icon={<UsergroupAddOutlined />} />
              {data.activation.length?<Button onClick={() => viewSingleStudent(data)} shape="circle" icon={<InfoCircleOutlined />} style={{color:"#5cdbd3"}} />: ""}
          </Space>
        )
      },
    }
  ];


  const handleTableChange = (pagination) => {
    dispatch( getStudents(pagination) );
  };

  
  return (
    <Fade>
      <Modal title="Chreate Teacher" visible={ isModalLoginVisible } onOk={ handleOkLogin } onCancel={ handleCancel } footer={ false }>
        <ModalStudentsLogin handleOk={ handleOkLogin } handleCancel={ handleCancel } />
      </Modal>
      <Modal title="Chreate Teacher" visible={ isModalGroupVisible } onOk={ handleOkGroup } onCancel={ handleCancelGroup } footer={ false }>
        <ModalStudentsGroup handleOk={ handleOkGroup } handleCancel={ handleCancelGroup } studentId={studentId} />
      </Modal>

      <Row justify="space-between" align="middle">
        <Col>
          <PageHeader
            className="site-page-header"
            title="Title"
            subTitle="This is a subtitle"
          />
        </Col>
        <Col>
          <Button type="primary" onClick={ showModalLogin }>
            Add Students Login
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

export default StudentsGroup;
