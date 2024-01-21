// import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { JobPosition } from './JobPosition';
import { selectVisiblePositions } from 'store/positions/position-selectors';

// import { selectFilters } from 'store/filters/filter-selectors';

import { addFilter } from 'store/filters/filter-actions';

const _JobList = ({ positions, addFilter }) => {
  // const dispatch = useDispatch();
  // const currentFilters = useSelector(selectFilters);
  // const positions = useSelector((state) =>
  //   selectVisiblePositions(state, currentFilters)
  // );

  // const handleAddFilter = (filter) => {
  //   dispatch(addFilter(filter));
  // };

  // oop - opt
  const handleAddFilter = (filter) => {
    addFilter(filter);
  };

  return (
    <div className='job-list'>
      {positions.map((item) => (
        <JobPosition
          key={item.id}
          {...item}
          handleAddFilter={handleAddFilter}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  positions: selectVisiblePositions(state, state.filters),
});

const JobList = connect(mapStateToProps, {
  addFilter,
})(_JobList);

export { JobList };
