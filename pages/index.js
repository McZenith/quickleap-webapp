import {
  Box,
  ResponsiveContext,
  Carousel as Carouslick,
  Button,
} from "grommet";
<<<<<<< HEAD
import { Menu } from "grommet-icons";
import Carousel from "react-multi-carousel";
import { Image as ImageCom, Update } from "../components";
=======
import { HomeLayout } from "../containers";
>>>>>>> 7f835b1c2e5f0cd4d89a1647a1ddafe147eed193

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

const updata = [
  { price: "5000", percentage: "-40%", product: "Soybeans" },
  { price: "2000", percentage: "-2%", product: "Rice" },
  { price: "9000", percentage: "-0.03%", product: "Maize" },
  { price: "4000", percentage: "40%", product: "Beans" },
  { price: "6000", percentage: "4%", product: "Garri" },
  { price: "55000", percentage: "0%", product: "Casava" },
  { price: "44000", percentage: "40%", product: "Soghurm" },
  { price: "33000", percentage: "20%", product: "Breeds" },
  { price: "22000", percentage: "-0.40%", product: "Rubbish" },
  { price: "33000", percentage: "-2.0%", product: "Yoghurt" },
  { price: "2000", percentage: "-3.0%", product: "Soyagum" },
  { price: "1000", percentage: "40%", product: "Whitebeans" },
  { price: "14000", percentage: "400%", product: "Sweetcorn" },
];

const Home = () => {
  const size = React.useContext(ResponsiveContext);

  return (
<<<<<<< HEAD
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
                    {NavLinks.map(({ title, urlname }, index) => (
                      <Link href={`/${urlname}`} key={index}>
                        <a style={link}>{title}</a>
                      </Link>
                    ))}
                  </Box>
                </Layer>
              )}
            </Box>
          ) : (
            NavLinks.map(({ title, urlname }, index) => (
              <Link href={`/${urlname}`} key={index}>
                <a style={link}>{title}</a>
              </Link>
            ))
          )}
        </Box>
      </Header>
      <Main>
        <Box height="80vh" width="100%">
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
              <Button label="show" onClick={() => setShow(true)} />
            </Box>
          </Carouslick>
        </Box>
      </Main>
      <Footer
        height="11vh"
        width="100%"
        style={footer}
        as="div"
        alignSelf="end"
      >
        <Box
          height="100%"
          width="100%"
          direction="row"
          align="center"
          background="white"
        >
          <Box
            justify="center"
            align="center"
            width={size === "small" ? "40vw" : "13vw"}
            fill="vertical"
            background="black"
            pad="small"
          >
            <Text>LIVE MARKET PRICES</Text>
          </Box>
          <Box fill="vertical" width="90vw">
            <Carousel
              responsive={responsive}
              ssr
              showDots={false}
              infinite
              autoPlay
              arrows={false}
              autoPlaySpeed="5000"
              customTransition="all .05"
              transitionDuration={50000}
            >
              {updata.map(({ price, percentage, product }) => {
                return (
                  <Update
                    price={price}
                    percentage={percentage}
                    product={product}
                    key={`${product}${price}`}
                  />
                );
              })}
            </Carousel>
=======
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
>>>>>>> 7f835b1c2e5f0cd4d89a1647a1ddafe147eed193
          </Box>
        </Carouslick>
      </Box>
    </HomeLayout>
  );
};

export default Home;
