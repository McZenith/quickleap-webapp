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
  Button,
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
  const { link, footer } = styles;
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
            <Box
              background={{
                color: "neutral-1",
                position: "center",
                repeat: "no-repeat",
                size: "100% 100%",
                image: "url(//v2.grommet.io/assets/IMG_4210.jpg)",
              }}
              justify="center"
              align="center"
              fill
              pad="medium"
            >
              <h1>Hello World</h1>
              <p style={{ textAlign: "center" }}>
                lorem ipsum adn hsnw b dhhheheh hddhd d
              </p>
              <Button label="show" onClick={() => setShow(true)} />
            </Box>
            <Box
              background={{
                color: "neutral-1",
                position: "center",
                repeat: "no-repeat",
                size: "100% 100%",
                image: "url(//v2.grommet.io/assets/Wilderpeople_Ricky.jpg)",
              }}
              justify="center"
              align="center"
              fill
              pad="medium"
            >
              <h1>Random Text</h1>
              <p style={{ textAlign: "center" }}>
                lorem ipsum adn hsnw b dhhheheh hddhd d
              </p>
              <Button label="show" onClick={() => setShow(true)} />
            </Box>
          </Carousel>
        </Box>
      </Main>
      <Footer height="11vh" style={footer}></Footer>
    </Box>
  );
};

const styles = {
  link: {
    textDecoration: "none",
    color: "black",
  },
  footer: {
    position: "fixed",
    bottom: 0,
  },
};

export default Home;
