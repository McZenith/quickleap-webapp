import { Main, Box, Footer, Text, ResponsiveContext } from "grommet";
import { HeaderBar } from "../../components";
import Carousel from "react-multi-carousel";
import { Update } from "../../components";

const HomeLayout = ({ children, NavLinks }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
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

  const { footer } = styles;
  const size = React.useContext(ResponsiveContext);

  return (
    <Box height="100vh" width="100vw">
      <HeaderBar NavLinks={NavLinks} size={size} />
      <Main>{children}</Main>
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
            width={size === "small" ? "60vw" : "13vw"}
            fill="vertical"
            background="black"
            pad="small"
          >
            <Text alignSelf="center">LIVE MARKET PRICES</Text>
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
              customTransition="all .5"
              transitionDuration={5000}
            >
              {updata.map(({ product, price, percentage }) => {
                return (
                  <Update
                    product={product}
                    price={price}
                    percentage={percentage}
                    key={`${product}${price}`}
                  />
                );
              })}
            </Carousel>
          </Box>
        </Box>
      </Footer>
    </Box>
  );
};
const styles = {
  footer: {
    position: "fixed",
    left: 0,
    bottom: 0,
  },
};
export default HomeLayout;
