import './styles.css';

function Sidebar(prop) {
  const menu = ["Feature"];

  const navigation = () => {
    return menu.map((item, idx) => {
      return <button onClick={() => prop.onClick(idx+1)} >{item}</button>
    }) 
  }
  return(
    <div>
      <sidebar className='sidebar-wrapper'>
        <h1 className='sidebar-title' >Ini Sidebar</h1>
        <nav className='navigation'>{navigation()}</nav>
      </sidebar>
    </div>
  );
}

export default Sidebar;