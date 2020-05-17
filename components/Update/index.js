import { Box, Text } from "grommet";
import { LinkUp, LinkDown } from "grommet-icons";

const Update = ({ price, percentage, product }) => {
  const checksign = (per = "-100%") => per.includes("-");
  return (
    <Box width="100%" height="100%" justify="center" align="center" pad="small">
      <Box direction="column">
        <Text>{product}</Text>
        <Box direction="row">
          <Text>N{price} </Text>
          <Text
            color={checksign(percentage) ? "red" : "green"}
            margin={{ left: "small" }}
          >
            {percentage}
          </Text>
          {checksign(percentage) ? (
            <LinkDown color="red" />
          ) : (
            <LinkUp color="green" />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Update;
