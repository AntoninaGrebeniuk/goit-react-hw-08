import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './AuthNav.module.css';

export default function AuthNav() {
  const getLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <div className={css.wrapper}>
      <NavLink className={getLinkClass} to="/register">
        Register
      </NavLink>
      <NavLink className={getLinkClass} to="/login">
        Log In
      </NavLink>
    </div>
  );
}
