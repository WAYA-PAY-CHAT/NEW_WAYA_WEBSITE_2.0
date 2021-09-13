import React from 'react'
import { Card } from '@themesberg/react-bootstrap';
import { Space, Table, Button as AntButton } from 'antd'
import { useRecoilState, useSetRecoilState } from 'recoil';
import { EditorState } from "draft-js";
import { EditModal } from './Modal';
import { editHowItWorkModal, editHowItWorkVal, howItWorkEditor } from '../../../states/howItWork';
import { settingResponse } from '../../../states/settings';
import { getRawData } from '../../../services/utilities';

export default ({ data }) => {
  const setShowModal = useSetRecoilState(editHowItWorkModal);
  const setResponse = useSetRecoilState(settingResponse)
  const [value, setValue] = useRecoilState(editHowItWorkVal)
  const setEditor = useSetRecoilState(howItWorkEditor)

  const columns = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Content',
      dataIndex: 'content',
      key: 'content',
      render: text => <p dangerouslySetInnerHTML={{ __html: text }} />
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'Action',
      dataIndex: 'id',
      key: 'id',
      render: (id, record) => (
        <Space size="middle">
          <AntButton type="ghost" onClick={() => handleCreate(record)}>Edit </AntButton>
          {/* <AntButton type="danger" onClick={()=>confirmAction(id)}>Delete</AntButton> */}
        </Space>
      ),
    },
  ];
  const handleCreate = (value) => {
    setValue(value)
    if (value.content) {
      const contentState = getRawData(value.content)
      setEditor(EditorState.createWithContent(contentState));
    }
    setShowModal(true)
    setResponse({})
  }

  return (
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <EditModal value={value} />
      <Card.Body className="pt-0">
        <Table columns={columns} pagination={false} dataSource={data} rowKey="id" />
      </Card.Body>
    </Card>
  );
};
