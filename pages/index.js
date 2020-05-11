import {
  Main,
  Box,
  Header,
  Menu,
  Paragraph,
  Heading,
  Footer,
  Text,
  Anchor,
} from "grommet";

export default () => (
  <Box>
    <Header background="accent-1" fill="horizontal" height="10vh">
      <Menu label="account" items={[{ label: "logout" }]} />
      <Menu label="account" items={[{ label: "logout" }]} />
    </Header>
    <Main background="brand">
      <Box background="brand" height="80vh" fill="horizontal"></Box>
    </Main>
    <Footer background="accent-3" height="10vh"></Footer>
  </Box>
);
