import Link from "next/link";
import {
  Main,
  Box,
  Header,
  Paragraph,
  Heading,
  Footer,
  Text,
  Anchor,
  Image,
  Layer,
  ResponsiveContext,
  Carousel,
} from "grommet";
import { Menu } from "grommet-icons";

const NavLinks = [
  { title: "Home" },
  { title: "About" },
  { title: "Marketplace" },
  { title: "Inventory Manager" },
  { title: "Aggregator" },
  { title: "Login/Sign Up" },
  { title: "Blog" },
];

const Home = () => {
  const size = React.useContext(ResponsiveContext);
  const [show, setShow] = React.useState();
  const { link } = styles;
  return (
    <Box>
      <Header fill="horizontal" height="9vh" pad="medium" elevation="medium">
        <Box width="100px">
          <Image fill src={"./logo.png"} alt="quickleap logo" />
        </Box>
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
                  <Box
                    label="close"
                    onClick={() => setShow(false)}
                    height="100vh"
                    width="50vw"
                    direction="column"
                    round={false}
                    pad="medium"
                    elevation="medium"
                  >
                    {NavLinks.map(({ title }, index) => (
                      <Link href={`/${title}`} key={index}>
                        <a style={link}>{title}</a>
                      </Link>
                    ))}
                  </Box>
                </Layer>
              )}
            </Box>
          ) : (
            NavLinks.map(({ title }, index) => (
              <Link href={`/${title}`} key={index}>
                <a style={link}>{title}</a>
              </Link>
            ))
          )}
        </Box>
      </Header>
      <Main>
        <Box height="80vh" fill="horizontal">
          <Carousel fill play={5000} controls="selectors">
            <Image
              fit="cover"
              src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
            />
            <Image fit="cover" src="//v2.grommet.io/assets/IMG_4245.jpg" />
            <Image fit="cover" src="//v2.grommet.io/assets/IMG_4210.jpg" />
          </Carousel>
        </Box>
      </Main>
      <Footer background="accent-1" height="11vh"></Footer>
    </Box>
  );
};

const styles = {
  link: {
    textDecoration: "none",
    color: "black",
  },
};

export default Home;
