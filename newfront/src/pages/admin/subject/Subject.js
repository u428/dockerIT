import React, { useEffect, useState } from "react";

import Fade from "react-reveal/Fade";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Table, Tag, Card, PageHeader, Modal, Row, Col, Button, Space, Tooltip } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { getSubjects, deleteSubject, getSingleSubject } from "../../../redux/subject/actions";
import ModalSubject from "./modal/ModalSubject";


const Subject = () => {

  const dispatch = useDispatch();
  const [ isModalVisible, setIsModalVisible ] = useState( false );
  const [ modalData, setModalData ] = useState( {} );
  const [count, setCount] =useState(0);

const {isActive, loading, subjects} = useSelector(state => state.subjectReducer);
  
  function deleteSubjects (subject) {
    Modal.confirm({
      title: "siz shu "+subject.id+" ni ochirmoqchimisiz",
      okText: "Xa",
      okType:"danger",
      cancelText:"yoq",
      onOk: () =>{
        dispatch(deleteSubject(subject.id));
        dispatch(getSubjects());
      }
    })
  }

  const showModal = (id, i) => {
    if(i > 0){
      console.log("bu yerda 111111   " +i);
      setIsModalVisible( true );
      dispatch(getSingleSubject(id));
      setCount(i)
    }else{
      console.log("bu yerda 00000   "+ i);
      setIsModalVisible( true );
      setCount(i)
    }
  };


  const handleOk = () => {
    setIsModalVisible( false );
  };

  const handleCancel = () => {
    setIsModalVisible( false );
  };

  useEffect( () => {
    dispatch( getSubjects());
  }, [isModalVisible] );

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'name Uz',
      dataIndex: 'nameUz',
      key: 'nameUz',
    },
    {
      title: 'name Ru',
      dataIndex: 'nameRu',
      key: 'nameRu',
    },
    {
      title: 'name En',
      dataIndex: 'nameEn',
      key: 'nameEn',
    },
    {
      title: 'description',
      dataIndex: 'description',
      key: 'description',
      // render: text => <p>{ text.telNomer }</p>,
    },
    {
      title: 'Action',
      key: 'action',
      render: ( data ) => {
        return (
          <Space size="middle">
              <Button onClick={() => showModal(data.id, 1)}  shape="circle" warning icon={<EditOutlined />} />
              <Button onClick={() => deleteSubjects(data)} shape="circle" danger  icon={<DeleteOutlined />} />
          </Space>
        )
      },
    }
  ];

  
  return (
    <Fade>
      <Modal title="Chreate Teacher" visible={ isModalVisible } onOk={ handleOk } onCancel={ handleCancel } footer={ false }>
        <ModalSubject handleOk={ handleOk } handleCancel={ handleCancel } count={count} modalData={modalData} />
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
          <Button type="primary" onClick={()=> showModal({}, 0) }>
            Add Subject
          </Button>
        </Col>
      </Row>

      <Card>
        <Table
         columns={ columns } 
         dataSource={subjects &&subjects } 
         loading={loading}
         scroll={ { x: "auto" } }
         />
      </Card>
    </Fade>
  );
};

export default Subject;
