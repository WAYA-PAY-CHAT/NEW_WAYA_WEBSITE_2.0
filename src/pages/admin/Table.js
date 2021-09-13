import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { Nav, Card, Button, Table, Dropdown, Pagination, ButtonGroup } from '@themesberg/react-bootstrap';
import { editBal, editModal, response } from '../../states/admin';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { EditModal } from './Modal';
// import { Link } from 'react-router-dom';
// import { Routes } from "../routes";

export default ({ data, meta }) => {
  // console.log(meta)
  const setShowModal = useSetRecoilState(editModal);
  const setResponse = useSetRecoilState(response)
  const [value, setValue] = useRecoilState(editBal)
  const TableRow = (props) => {
    const { full_name, email, created_at, id } = props;
    return (
      <tr>
        <td>
          <Card.Link className="fw-normal">
            {id}
          </Card.Link>
        </td>
        <td>
          <span className="fw-normal">
            {full_name}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {email}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {new Date(created_at).toDateString()}
          </span>
        </td>
        <td>
          <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle as={Button} split variant="link" className="text-dark m-0 p-0">
              <span className="icon icon-sm">
                <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleCreate(props)}>
                <FontAwesomeIcon icon={faEdit} className="me-2" /> Edit
              </Dropdown.Item>
              {/* <Dropdown.Item>
                <FontAwesomeIcon icon={faEye} className="me-2" /> View Details
              </Dropdown.Item>
              <Dropdown.Item className="text-danger">
                <FontAwesomeIcon icon={faTrashAlt} className="me-2" /> Remove
              </Dropdown.Item> */}
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    );
  };

  const handleCreate = (value) => {
    setValue(value)
    setShowModal(true)
    setResponse({})
  }

  return (
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <EditModal value={value} />
      <Card.Body className="pt-0">
        <Table hover className="user-table align-items-center">
          <thead>
            <tr>
              <th className="border-bottom">#</th>
              <th className="border-bottom">Full Name</th>
              <th className="border-bottom">Email</th>
              <th className="border-bottom">Created Date</th>
              <th className="border-bottom">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map(t => <TableRow key={t.user_id} {...t} />)}
          </tbody>
        </Table>
        <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
          <Nav>
            <Pagination className="mb-2 mb-lg-0">
              <Pagination.Prev>
                Previous
              </Pagination.Prev>
              <Pagination.Item active>1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Item>4</Pagination.Item>
              <Pagination.Item>5</Pagination.Item>
              <Pagination.Next>
                Next
              </Pagination.Next>
            </Pagination>
          </Nav>
          <small className="fw-bold">
            Showing <b>{meta.per_page}</b> out of <b>{meta.total}</b> entries
          </small>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};
