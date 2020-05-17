import NavItem from "./NavItem";
const Nav = ({ NavLinks }) =>
  NavLinks.map(({ urlname, title }, index) => (
    <NavItem urlname={urlname} title={title} key={index} />
  ));

export default Nav;
