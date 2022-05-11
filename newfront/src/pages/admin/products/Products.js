import React, { useEffect, useState } from "react";

import Fade from "react-reveal/Fade";
import { Table, Tag, Space, Card, PageHeader, Modal, Row, Col, Button } from 'antd';
import { useDispatch } from "react-redux";
import { getProducts } from "../../../redux/product/actions";
import AddProduct from "./modal/AddProduct";



const Products = () => {
  const dispatch = useDispatch();
  const [ isModalVisible, setIsModalVisible ] = useState( false );
  const showModal = () => {
    setIsModalVisible( true );
  };

  const handleOk = () => {
    setIsModalVisible( false );
  };

  const handleCancel = () => {
    setIsModalVisible( false );
  };

  useEffect( () => {
    dispatch( getProducts() );
  }, [ dispatch ] );


  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <p>{ text }</p>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          { tags.map( tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if ( tag === 'loser' ) {
              color = 'volcano';
            }
            return (
              <Tag color={ color } key={ tag }>
                { tag.toUpperCase() }
              </Tag>
            );
          } ) }
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: ( text, record ) => {
        // console.log( record.key );
        return (
          <Space size="middle">

          </Space>
        )
      },
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: [ 'nice', 'developer' ],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: [ 'loser' ],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: [ 'cool', 'teacher' ],
    },
  ];

  return (
    <Fade>
      <Modal title="Basic Modal" visible={ isModalVisible } onOk={ handleOk } onCancel={ handleCancel } footer={ false }>
        <AddProduct handleOk={ handleOk } handleCancel={ handleCancel } />
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
            Open Modal
          </Button>
        </Col>
      </Row>

      <Card>
        <Table columns={ columns } dataSource={ data } scroll={ { x: "auto" } } />
      </Card>
    </Fade>
  );
};

export default Products;
