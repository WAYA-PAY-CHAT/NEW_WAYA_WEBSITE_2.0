
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Form, Card, Button, Container, InputGroup } from '@themesberg/react-bootstrap';
import BgImage from "../../assets/img/illustrations/signin.svg";
import { Link } from "react-router-dom";
// import { faFacebookF, faGithub, faTwitter faAngleLeft} from "@fortawesome/free-brands-svg-icons";
// import { Link } from 'react-router-dom';
import { Routes } from "../../routes";
import { login } from "../../services/apiCalls";
import { history } from "../..";
import AlertToast from "../../components/AlertToast";


export default () => {

  useEffect(() => {
    const token = localStorage.getItem("user_data")
    if (token) {
      history.push(Routes.DashboardOverview)
    }
  }, [])
  const [data, setData] = useState({ email: "", password: "" })
  const [loading, setLoading] = useState(false)
  const [showAlert, setShowAlert] = useState(false);
  const [response, setResponse] = useState({})

  const handleChange = (e) => {
    const { value, name } = e.target
    setData(data => ({ ...data, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const res = await login(data)
    if (res.status) {
      localStorage.setItem("user_data", JSON.stringify(res.token))
      history.push(Routes.Admin)
      setResponse({ message: res.message, title: "success" })
      setShowAlert(true)
    } else {
      setResponse({ message: res.message || res, title: "failed" })
      setShowAlert(true)
    }
    setLoading(false)
  }

  return (
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <AlertToast showAlert={showAlert} setShowAlert={setShowAlert} response={response} page="Login" />
        <Container>
          <Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})` }}>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h5 className="mb-0">Sign in to waya-pay-chat CMS</h5>
                </div>
                <Form className="mt-4" onSubmit={(e) => handleSubmit(e)}>
                  <Form.Group id="email" className="mb-4">
                    <Form.Label>Your Email</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control onChange={handleChange} required name="email" type="email" placeholder="example@company.com" />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <Form.Group id="password" className="mb-4">
                      <Form.Label>Your Password</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <FontAwesomeIcon icon={faUnlockAlt} />
                        </InputGroup.Text>
                        <Form.Control onChange={handleChange} name="password" required type="password" placeholder="Password" />
                      </InputGroup>
                    </Form.Group>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <Card.Link as={Link} to={Routes.ForgotPassword} className="small text-end">Lost password?</Card.Link>
                    </div>
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">
                    {loading ? "Loading..." : "Sign in"}
                  </Button>
                </Form>

                {/* <div className="mt-3 mb-4 text-center">
                  <span className="fw-normal">or login with</span>
                </div>
                <div className="d-flex justify-content-center my-4">
                  <Button variant="outline-light" className="btn-icon-only btn-pill text-facebook me-2">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Button>
                  <Button variant="outline-light" className="btn-icon-only btn-pill text-twitter me-2">
                    <FontAwesomeIcon icon={faTwitter} />
                  </Button>
                  <Button variant="outline-light" className="btn-icon-only btn-pil text-dark">
                    <FontAwesomeIcon icon={faGithub} />
                  </Button>
                </div>
                <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    Not registered?
                    <Card.Link as={Link} to={Routes.Signup} className="fw-bold">
                      {` Create account `}
                    </Card.Link>
                  </span>
                </div> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
