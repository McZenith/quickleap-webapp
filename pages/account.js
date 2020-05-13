import {
  Box,
  Image,
  Text,
  Paragraph,
  TextInput,
  CheckBox,
  ResponsiveContext,
  Anchor,
  Button,
} from "grommet";

const Account = () => {
  const [value, setValue] = React.useState("");
  const [checked, setChecked] = React.useState(true);
  const size = React.useContext(ResponsiveContext);
  return (
    <Box
      fill
      direction="row"
      justify={size === "small" ? "center" : null}
      align={size === "small" ? "center" : null}
    >
      {size != "small" ? (
        <Box background="accent-1" width="50vw" fill="vertical"></Box>
      ) : null}
      <Box
        width={size === "small" ? "97vw" : "50vw"}
        fill="vertical"
        justify="center"
        align="center"
      >
        <Box
          height="80vh"
          width={size === "small" ? "95%" : "60%"}
          justify="center"
          align="center"
          direction="column"
          pad="xsmall"
        >
          <Box width="100px" margin={{ bottom: "5px" }}>
            <Image fill src={"./logo.png"} alt="quickleap logo" />
          </Box>
          <Box
            height="5vh"
            width={size === "small" ? "95%" : "80%"}
            background="black"
            pad="xsmall"
            justify="center"
            align="center"
          >
            <Text textAlign="center" alignSelf="center">
              Sign In
            </Text>
          </Box>
          <Paragraph margin="none" size="small" responsive textAlign="center">
            Please enter your valid credentials to continue
          </Paragraph>
          <Box
            width={size === "small" ? "96%" : "80%"}
            height="60%"
            justify="center"
            align="center"
            elevation="medium"
            margin="medium"
          >
            <Box width={size === "small" ? "95%" : "80%"} margin="small">
              <TextInput
                placeholder="type here"
                value={value}
                onChange={(event) => setValue(event.target.value)}
              />
            </Box>
            <Box width={size === "small" ? "95%" : "80%"}>
              <TextInput
                placeholder="type here"
                value={value}
                onChange={(event) => setValue(event.target.value)}
              />
            </Box>
            <Box width={size === "small" ? "95%" : "80%"} margin="small">
              <CheckBox
                checked={checked}
                label="Remember me"
                onChange={(event) => setChecked(event.target.checked)}
              />
            </Box>
            <Box width={size === "small" ? "95%" : "80%"} margin="small">
              <Button primary color="black" label="Login into your Account" />
            </Box>
            <Box direction="row" align="center" justify="stretch">
              <Box pad="xsmall" margin={{ top: "xsmall" }}>
                <Paragraph
                  margin="none"
                  size="small"
                  responsive
                  alignSelf="center"
                  textAlign="start"
                >
                  Don't have an account?{" "}
                </Paragraph>
              </Box>
              <Box>
                <Anchor
                  label="create an account"
                  alignSelf="center"
                  onClick={() => null}
                  color="green"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Account;
