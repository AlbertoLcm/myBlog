import { NavLink, useSearchParams } from "react-router-dom";


export const Navbar = () => {
  const [params, setParams] = useSearchParams();

  return (
    <nav className="head__options">
      <input type="search" placeholder="Busca un articulo..." />
      <ul className="head__options__list">
        <li>
          <NavLink to='/'>Todos</NavLink>
        </li>
        <li>
          <NavLink to='/tag/tecnology'>
            Tecnología
          </NavLink>
        </li>
        <li>
          <NavLink to='/tag/ciencie'>Ciencia</NavLink>
        </li>
        <li>
          <NavLink to='/tag/design'>Diseño</NavLink>
        </li>
        <li>
          <NavLink to='/tag/sposts'>Deportes</NavLink>
        </li>
        <li>
          <NavLink to='/tag/politica'>Política</NavLink>
        </li>
      </ul>
    </nav>
  );
};
