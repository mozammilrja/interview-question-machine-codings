import "./Header.scss";

import { Headers } from "../../interfaces/commonLayouts";
const Header: React.FC<Headers> = (props) => {
  return (
    <header className='header'>
      <div className='header_inner'>
        <div className='header_logo d-lg-none'></div>
        <div className='header_inner_links'></div>
      </div>
      <h1>Header</h1>
    </header>
  );
};

export default Header;
