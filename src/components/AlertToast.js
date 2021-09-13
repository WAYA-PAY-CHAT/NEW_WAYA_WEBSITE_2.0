import React from 'react';
import { Toast, Button } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';


const AlertToast = ({ showAlert, setShowAlert, response, page }) => {
  return (
    <div>
      <Toast show={showAlert} onClose={() => setShowAlert(!showAlert)} className="my-3">
        <Toast.Header className="text-primary" closeButton={false}>
          <FontAwesomeIcon icon={faBootstrap} />
          <strong className="me-auto ms-2">{page}</strong>
          <small>{response.title}</small>
          <Button variant="close" size="xs" onClick={() => setShowAlert(!showAlert)} />
        </Toast.Header>
        <Toast.Body>
          {response.message}
        </Toast.Body>
      </Toast>
    </div>
  )
}

export default AlertToast
