import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import { delContactsThunk } from 'redux/constants';

import css from './contacts.module.css';

const Contacts = ({ listContact }) => {
  const dispatch = useDispatch();

  if (!listContact || !Array.isArray(listContact) || listContact.length === 0) {
    return <p>No contacts found</p>;
  }

  return listContact.map(contact => {
    return (
      <ul className={css.list}>
        <li className={css.contact} key={contact.id}>
          {contact.name} - {contact.phone}
          <button
            className={css.btn}
            onClick={() => {
              dispatch(delContactsThunk(contact.id));
            }}
          >
            Delete
          </button>
        </li>
      </ul>
    );
  });
};

export default Contacts;

Contacts.propTypes = {
  listContact: PropTypes.array,
};
