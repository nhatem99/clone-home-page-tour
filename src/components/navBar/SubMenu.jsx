import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const SubMenu = ({ submenus }) => {
  return (
    <ul id="sub-menu" className="sub-menu">
      {submenus.map((submenu, index) => (
        <li key={index} className="menu-items">
          <a href={submenu.url} style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between'
          }}>
            {submenu.title}{" "}
            {submenu.submenu ? (
              <span>
                {" "}
                <KeyboardArrowRightIcon sx={{
                  fontSize:'x-large',
                  paddingTop:'5px'
                }} />
              </span>
            ) : (
              ""
            )}
          </a>
          {submenu.submenu ? (
            <ul className="sub-menu">
              {submenu.submenu.map((item) => (
                <li key={item.title} className="menu-items">
                  <a href={item.url}>{item.title}</a>
                </li>
              ))}
            </ul>
          ) : (
            ""
          )}
        </li>
      ))}
    </ul>
  );
};

export default SubMenu;
