import PropTypes from 'prop-types';
import css from './Filter.module.css';
// import { useSelector } from 'react-redux';

export const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contacts by name
      <input
        className={css.filterName}
        onChange={onChange}
        value={value}
        type="text"
        name="filter"
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
