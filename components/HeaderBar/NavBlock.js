import { Box } from "grommet";
const NavBlock = ({ children }) => {
  return (
    <Box
      label="close"
      height="100vh"
      width="50vw"
      direction="column"
      round={false}
      pad="medium"
      elevation="medium"
      gap="large"
      onClick={() => setShow(false)}
    >
      {children}
    </Box>
  );
};

export default NavBlock;
