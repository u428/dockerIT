import React, { useEffect, useState } from "react";

import Fade from "react-reveal/Fade";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Table, Tag, Card, PageHeader, Modal, Row, Col, Button, Space, Tooltip } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import {getGroups, deleteGroup, getSingleGroup } from "../../../redux/group/actions";
import ModalGroup from "./modal/ModalGroup";



const Groups = () => {

  const {pagination, loading, isActive, groups} = useSelector(state=>state.groupReducer);

  const dispatch = useDispatch();
  const [ isModalVisible, setIsModalVisible ] = useState( false );
  const [count, setCount] =useState(0);


  
  function deleteGroups (group) {
    Modal.confirm({
      title: "siz shu "+group.name.toUpperCase()+" ni ochirmoqchimisiz",
      okText: "Xa",
      okType:"danger",
      cancelText:"yoq",
      onOk: () =>{
        dispatch(deleteGroup(group.id));
        dispatch( getGroups(pagination));
      }
    })
  }

  const showModal = (id, i) => {
    if(i > 0){
      setIsModalVisible( true );
      dispatch(getSingleGroup(id));
      setCount(i)
    }else{
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
    dispatch(getGroups(pagination));
  }, [isModalVisible] );

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'description',
      dataIndex: 'description',
      key: 'description'
    },
    {
      title: 'Action',
      key: 'action',
      render: ( data ) => {
        return (
          <Space size="middle">
              <Button onClick={() => showModal(data.id, 1)}  shape="circle" warning icon={<EditOutlined />} />
              <Button onClick={() => deleteGroups(data)} shape="circle" danger  icon={<DeleteOutlined />} />
          </Space>
        )
      },
    }
  ];


  const handleTableChange = (pagination) => {
    dispatch( getGroups(pagination) );
  };

  
  return (
    <Fade>
      <Modal title="Chreate Group" visible={ isModalVisible } onOk={ handleOk } onCancel={ handleCancel } footer={ false }>
        <ModalGroup handleOk={ handleOk } handleCancel={ handleCancel } count={count}/>
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
            Add teacher
          </Button>
        </Col>
      </Row>

      <Card>
        <Table
         columns={ columns } 
         dataSource={ groups && groups} 
         pagination={pagination}
         loading={loading}
         scroll={ { x: "auto" } } 
         onChange={handleTableChange}
         />
      </Card>
    </Fade>
  );
};

export default Groups;
