import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { query } from '../../redux/sliceFilter';
import PropTypes from 'prop-types';
import css from './filter.module.css';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleInputChange = evt => {
    dispatch(query(evt.currentTarget.value));
  };

  return (
    <div className={css.filter}>
      <label className={css.label}>
        <input
          className={css.input}
          type="text"
          name="filter"
          placeholder="Search"
          onChange={handleInputChange}
          value={filter}
        />
      </label>
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
};
