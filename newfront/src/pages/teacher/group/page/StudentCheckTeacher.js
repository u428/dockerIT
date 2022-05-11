import React, {useEffect, useState} from 'react'
import { Avatar, Checkbox, Divider, Form, Input, List, Skeleton } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from 'react-infinite-scroll-component';

const StudentCheckTeacher = ({handleOk, handleCancel}) => {
    const [ form ] = Form.useForm();
    const dispatch = useDispatch();

    const {loading, isActive, students} = useSelector(state=>state.studentReducer);
    const [indeterminate, setIndeterminate] = useState(false);
    const [checkAll, setCheckAll] = useState(false);

    // useEffect( () => {
    //     console.log("this is a console");
    //     // dispatch(getStudentsGroup())
    // }, [] );

    const onhandleChange = e => {
        console.log(e.target.checked);
        setIndeterminate(true);
    }

    const onCheckAllChange = e => {
        setIndeterminate(false);
        setCheckAll(e.target.checked);
      };

    return (
        
               
                <InfiniteScroll
                    dataLength={students?students.length:0}
                    loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
                    endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                    scrollableTarget="scrollableDiv"
                >
                    <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                        Check all
                    </Checkbox>
                    <Divider />
                    <List
                        loading ={loading}
                        dataSource={students?students:[]}
                        renderItem={item => (
                        <List.Item key={item.id}>
                            <List.Item.Meta
                                // avatar={<Avatar src={item.picture.large} />}
                                title={<p>{item.firstName+" "+ item.lastName}</p>}
                                description={item.description}
                            />
                           <Checkbox onChange={onhandleChange}/>
                        </List.Item>
                        )}
                    />
                </InfiniteScroll>

    )
}

export default StudentCheckTeacher
