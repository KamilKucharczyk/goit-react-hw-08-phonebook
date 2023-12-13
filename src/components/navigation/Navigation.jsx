import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import InfoUser from 'components/infoUser/InfoUser';
import { selectToken, selectUser } from '../../redux/constants';

import css from './navigation.module.css';

export const Navigation = () => {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken) ?? '';

  return (
    <>
      <nav className={css.navbar}>
        <div className={css.container}>
          <Link to="/login" className={css.logo}>
            Phonebook
          </Link>
          {!user && (
            <ul className={css.links}>
              {token && (
                <li>
                  <Link to="/contacts" className={css.link}>
                    Contacts
                  </Link>
                </li>
              )}
              <li>
                <Link to="/signup" className={css.link}>
                  Sign Up
                </Link>
              </li>
              <li>
                <Link to="/login" className={css.link}>
                  Login
                </Link>
              </li>
            </ul>
          )}
        </div>
        <InfoUser />
      </nav>
      <div>
        {user ? (
          <h1>Welcome {user.name} to your contacts</h1>
        ) : (
          <h1>Welcome guest, please login</h1>
        )}
      </div>
    </>
  );
};
