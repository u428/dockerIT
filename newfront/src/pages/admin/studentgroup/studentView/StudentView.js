import React, { useEffect, useState } from "react";
import { HistoryOutlined, GroupOutlined} from '@ant-design/icons';
import Fade from "react-reveal/Fade";
import { Table, Tag, Card, PageHeader, Modal, Row, Col, Button, Space, Tooltip } from 'antd';
import { useDispatch, useSelector } from "react-redux";



const StudentView = () => {

  const {loading, isActive, studentGroup, student} = useSelector(state=>state.studentReducer);
  console.log(studentGroup);
  // let history = useHistory();


  // const dispatch = useDispatch();

  const [groups, setGroups] = useState([]);
  
  useEffect( () => {
    
  }, [] );


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
      key: 'price'
    },
    {
      title: 'status',
      dataIndex: 'status',
      key: 'status',
      render: tags => (
        <span>
              <Tag color={tags? "green":"volcano"}>
                {tags?"ACTIVE":"DISACTIVE"}
              </Tag>
        </span>
      )
    },
    {
      title: 'attendance',
      dataIndex: 'attendance',
      key: 'attendance'
    },
    {
      title: 'Action',
      key: 'action',
      render: ( data ) => {
        return (
          <Space size="middle">
              <Button  shape="circle" style={{color: "#399EFF"}} icon={<HistoryOutlined />} />
              <Button shape="circle" style={{color: "#399EFF"}}  icon={<GroupOutlined />} />
          </Space>
        )
      }
    }
  ];


  // const handleTableChange = (pagination) => {
  //   dispatch( getStudents(pagination) );
  // };

  
  return (
    <Fade>

      <Row justify="space-between" align="middle">
        <Col>
          <PageHeader
            className="site-page-header"
            // onBack={ () => null }
            title={student.firstName+" "+ student.lastName}
            subTitle={student.telNomer}
          />
        </Col>
        {/* <Col>
          <Button type="primary">
            Add Students Login
          </Button>
        </Col> */}


      </Row>
      <Card>
      <Table
         columns={ columns } 
         dataSource={ studentGroup && studentGroup} 
         pagination={{position: ["none", "none"]}}
         loading={loading}
         scroll={ { x: "auto" } }
         />
      </Card>
    </Fade>
  );
};

export default StudentView;
