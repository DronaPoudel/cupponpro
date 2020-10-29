import React, { useEffect, Fragment } from 'react';

// redux
import { connect } from 'react-redux';

// actions
import { getCategories } from '../../redux/actions/getCategoriesAction';

const Categories = ({ categories, getCategories }) => {
  useEffect(() => {
    getCategories();
  }, []);

  console.log(categories, 'categories items');
  return (
    <Fragment>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h1> category </h1>
        {categories?.map((categoryItem) => (
          <div
            style={{ flexDirection: 'row', display: 'flex' }}
            key={categoryItem.id}>
            <h2>{categoryItem.id}</h2>
            <h2>{categoryItem.name}</h2>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getCategories: (data) => dispatch(getCategories(data)),
});

const mapStateToProps = (state) => ({
  categories: state.getCategories.categories,
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
