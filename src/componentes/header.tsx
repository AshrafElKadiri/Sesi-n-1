interface HeaderProps {
    title: string;
}
  
function Header({ title }: HeaderProps) {
    return (
      <div className="header">
        <div className="menuIcon">
          <div className="dashTop"></div>
          <div className="dashTop"></div>
          <div className="dashTop"></div>
        </div>
  

        <h2>{title}</h2>
  
        <div className="fa fa-search searchIcon"></div> 

      </div>
    );
}
  
export default Header;
  