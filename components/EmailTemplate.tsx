import {
    Body,
    Button,
    Container,
    Column,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Row,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  import Logo from '@/app/assets/Logo White.png'
  
  interface EmailTemplateProps {
    firstName: string;
  }
  
  export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName,
  }) => (
    <Html>
      <Head />
      <Preview>HubPost Feedback Appreciation</Preview>
      <Body style={main}>
        <Container>
          <Section style={logo}>
            <Img src='' />
          </Section>
  
          <Section style={content}>
            <Row>
              <Img
                style={image}
                width={620}
                src=''
              />
            </Row>
  
            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Hi {firstName} 👋!
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Thank you for sharing your thoughts on HubPost! 🙏
                </Heading>
  
                <Text style={paragraph}>
                  Your feedback fuels our growth.
                </Text>
  
                <Text style={paragraph}>
                  Join our FREE HubPost Community for:
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  • Exclusive updates 📣
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  • Early access to new features 🎉
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  • Behind-the-scenes insights 📚
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  • Support from like-minded users 🤝
                </Text>
  
                <Text style={paragraph}>
                  Ready to join? 
                </Text>
              </Column>
            </Row>
            <Row style={{ ...boxInfos, paddingTop: "0" }}>
              <Column style={containerButton} colSpan={2}>
                <Button style={button}>Join Free Community</Button>
              </Column>
            </Row>
          </Section>
  
          <Section style={containerImageFooter}>
            <Img
              style={image}
              width={620}
              src=''
            />
          </Section>
  
          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgb(0,0,0, 0.7)",
            }}
          >
            2024 HubPost. All rights reserved.
          </Text>
        </Container>
      </Body>
    </Html>
  );

  
  export default EmailTemplate;
  
  const main = {
    backgroundColor: "#fff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const paragraph = {
  };
  
  const logo = {
    padding: "30px 20px",
  };
  
  const containerButton = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  };

  const button = {
    backgroundColor: "#e00707",
    borderRadius: 3,
    color: "#FFF",
    fontWeight: "bold",
    border: "1px solid rgb(0,0,0, 0.1)",
    cursor: "pointer",
    padding: "12px 30px",
  };
  
  const content = {
    border: "1px solid rgb(0,0,0, 0.1)",
    borderRadius: "3px",
    overflow: "hidden",
  };
  
  const image = {
    maxWidth: "100%",
  };
  
  const boxInfos = {
    padding: "20px",
  };
  
  const containerImageFooter = {
    padding: "45px 0 0 0",
  };