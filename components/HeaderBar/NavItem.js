import Link from "next/link";

const NavItem = ({ urlname, title,size }) => {
  const { linkstyle } = styles;
  return (
    <Link href={`/${urlname}`}>
      <a style={linkstyle}>{title}</a>
    </Link>
  );
};

const styles = {
  linkstyle: {
    textDecoration: "none",
    color: "black",
    
  },
};

export default NavItem;
