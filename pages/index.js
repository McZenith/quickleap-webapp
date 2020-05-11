import Link from "next/link";
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
  Image,
  ResponsiveContext,
} from "grommet";
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
  const { link } = styles;
  return (
    <Box>
      <Header fill="horizontal" height="9vh" pad="medium" elevation="medium">
        <Box width="100px">
          <Image fill src={"./logo.png"} alt="quickleap logo" />
        </Box>
        <Box direction="row" gap="medium">
          {size === "small"
            ? <div></div>
            : NavLinks.map(({ title }, index) => (
                <Link href={`/${title}`} key={index}>
                  <a style={link}>{title}</a>
                </Link>
              ))}
        </Box>
      </Header>
      <Main background="brand">
        <Box height="80vh" fill="horizontal"></Box>
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
