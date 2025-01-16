import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Block from "../Block";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import { ContactContainer, FormGroup, Span, ButtonContainer } from "./styles";

const Contact = ({ id, title, content }: { id: string; title: string; content: string }) => {
  return (
    <ContactContainer id={id}>
      <Row justify="center" align="top" gutter={[32, 32]}>
        <Col lg={16} md={20} sm={24} xs={24}>
          <Slide direction="up" triggerOnce>
            <div style={{ textAlign: "center", padding: "20px", background: "#f7f7f7", borderRadius: "8px" }}>
              {/* Title */}
              <h2
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  color: "#18216D",
                  marginBottom: "10px",
                }}
              >
                {title}
              </h2>
              
              {/* Content */}
              <p
                style={{
                  fontSize: "1.2rem",
                  color: "#555",
                  marginBottom: "20px",
                  lineHeight: "1.6",
                  fontWeight: "normal",
                }}
              >
                {content}
              </p>
              
              {/* Phone Number */}
              <h1
                style={{
                  fontSize: "2rem",
                  color: "#18216D",
                  marginBottom: "10px",
                  fontWeight: "bold",
                }}
              >
                 <span style={{ fontSize: "2rem", color: "#0061F2" }}>+40 123 456 789</span>
              </h1>

              {/* Email */}
              <h3
                style={{
                  fontSize: "1.5rem",
                  color: "#18216D",
                  marginBottom: "20px",
                  fontWeight: "normal",
                }}
              >
                Email: <span style={{ color: "#0061F2" }}>contact@crisprofi.ro</span>
              </h3>
            </div>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default Contact;
