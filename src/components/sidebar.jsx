// DATA
import { Route_Client } from "#data/links";
// REACT
import { NavLink } from 'react-router-dom';
//
//
//
//
//
export default function Sidebar() {
  //
  //
  // BUILDER
  //
  //
  ///
  const buttons = Route_Client.map((item, index) => (
    <NavLink className="btn" to={`${item.url}`} key={index}>
    <item.icon width="24" height="24"/>
      {item.label}
    </NavLink>
  ));
  ///
  const content = (
    <>
      <aside className="sidebar">
          <img
            src="logo_limber.png"
            alt="Limber Logo"
            className="logo img-fluid"
          />
        <div className="list_btn_nav">
          {buttons}
        </div>
        
      </aside>
    </>
  );
  //
  //
  // RETURN
  //
  //
  return content;
}
