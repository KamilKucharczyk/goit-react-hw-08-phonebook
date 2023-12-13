import { useSelector, useDispatch } from 'react-redux';
import { logoutThunk } from '../../redux/user/userThunk';
import { selectUser } from '../../redux/constants';

import css from './infoUser.module.css';
const InfoUser = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(logoutThunk());
  };

  return (
    <div className={css.container}>
      {user && (
        <div className={css.info}>
          <h4>HI, {user.name}</h4>
          <button className={css.btn} onClick={handleSubmit}>
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default InfoUser;
