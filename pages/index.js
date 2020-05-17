import {
  Box,
  ResponsiveContext,
  Carousel as Carouslick,
  Button,
} from "grommet";
import { HomeLayout } from "../containers";

const NavLinks = [
  { title: "Home", urlname: "null" },
  { title: "About", urlname: "about" },
  { title: "Marketplace", urlname: "null" },
  { title: "Inventory Manager", urlname: "null" },
  { title: "Aggregator", urlname: "null" },
  { title: "Login/SignUp", urlname: "account" },
  { title: "Blog", urlname: "null" },
];

const images = [
  "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
];

const Home = () => {
  const size = React.useContext(ResponsiveContext);

  return (
    <HomeLayout size={size} NavLinks={NavLinks}>
      <Box fill>
        <Carouslick fill play={5000} controls="selectors">
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
            pad="medium"
            height="100%"
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
            pad="medium"
            height="100%"
          >
            <h1>Random Text</h1>
            <p style={{ textAlign: "center" }}>
              lorem ipsum adn hsnw b dhhheheh hddhd d
            </p>
            <Button label="show" primary />
          </Box>
        </Carouslick>
      </Box>
    </HomeLayout>
  );
};

export default Home;
