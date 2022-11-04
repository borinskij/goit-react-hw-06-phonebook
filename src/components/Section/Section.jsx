// import PropTypes from 'prop-types';
import css from './Section.module.css';
export const Section = ({ title, children }) => {
  return (
    <section>
      <h2 className={css.title}>{title}</h2>
      <div className={css.section}> {children}</div>
    </section>
  );
};

// Section.propTypes = {
//   title: PropTypes.string.isRequired,
//   children: PropTypes.node.isRequired,
// };
