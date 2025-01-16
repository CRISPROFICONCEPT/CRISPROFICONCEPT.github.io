import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  return (
    <FooterSection>
      <Container>
        <Row justify="space-between" align="middle">
          {/* Logo on the Left */}
          <Col>
            <LogoContainer to="/">
              <SvgIcon
                src="logocpc_new.svg"
                aria-label="homepage"
                width="200px"
                height="auto"
              />
            </LogoContainer>
          </Col>

          {/* Address on the Right */}
          <Col>
            <Language>{t("Adresa")}</Language>
            <Para>Strada Piersicilor</Para>
            <Para>Oradea Bihor</Para>
            <Para>Romania</Para>
          </Col>
        </Row>
      </Container>
    </FooterSection>
  );
};

export default withTranslation()(Footer);


