import { Box, Header, Layer, Image } from "grommet";
import { Menu } from "grommet-icons";
import Nav from "./Nav";
import NavBlock from "./NavBlock";
const HeaderImage = () => (
  <Box width="100px">
    <Image fill src={"./logo.png"} alt="quickleap logo" />
  </Box>
);
const HeaderBar = ({ NavLinks, size }) => {
  const [show, setShow] = React.useState();
  return (
    <Header fill="horizontal" height="9vh" pad="medium" elevation="medium">
      <HeaderImage />
      <Box direction="row" gap="medium">
        {size === "small" ? (
          <Box>
            <Menu
              size="26px"
              width="40px"
              label="show"
              onClick={() => setShow(true)}
            />
            {show && (
              <Layer
                onEsc={() => setShow(false)}
                onClickOutside={() => setShow(false)}
                position="right"
                responsive={false}
                animation="slide"
              >
                <NavBlock>
                  <Nav NavLinks={NavLinks} />
                </NavBlock>
              </Layer>
            )}
          </Box>
        ) : (
          <Nav NavLinks={NavLinks} />
        )}
      </Box>
    </Header>
  );
};

export default HeaderBar;
