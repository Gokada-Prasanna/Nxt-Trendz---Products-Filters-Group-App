import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const onEnter = event => {
    const {enterSearchInput} = props

    if (event.key === 'Enter') {
      if (event.target.value !== ' ') {
        enterSearchInput()
      }
    }
  }

  const onChangeSearchInput = event => {
    const {changeSearchInput} = props

    changeSearchInput(event.target.value)
  }

  const renderSearchInput = () => {
    const {searchInput} = props

    return (
      <div className="search-input-container">
        <input
          type="search"
          value={searchInput}
          onChange={onChangeSearchInput}
          onKeyDown={onEnter}
          className="search-input"
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }

  const renderCategoryView = () => {
    const {categoryOptions} = props

    return (
      <>
        <h1 className="category-heading">Category</h1>
        <ul className="categories-list">
          {categoryOptions.map(category => {
            const {changeCategory, activeCategoryId} = props
            const onClickCategoryItem = () =>
              changeCategory(category.categoryId)
            const isActive = category.categoryId === activeCategoryId
            const categoryClassName = isActive
              ? `category-name active-category-name`
              : `category-name`

            return (
              <li
                className="category-item"
                key={category.categoryId}
                onClick={onClickCategoryItem}
              >
                <p className={categoryClassName}>{category.name}</p>
              </li>
            )
          })}
        </ul>
      </>
    )
  }

  const renderRatingsList = () => {
    const {ratingsList} = props
    return (
      <>
        <h1 className="rating-heading">Rating</h1>
        <ul className="ratings-list">
          {ratingsList.map(rating => {
            const {activeRatingId, changeRatingId} = props
            const onClickRatingItem = () => {
              changeRatingId(rating.ratingId)
            }
            const ratingClassName =
              activeRatingId === rating.ratingId
                ? `and-up active-rating`
                : `and-up`

            return (
              <li
                className="rating-item"
                key={rating.ratingId}
                onClick={onClickRatingItem}
              >
                <img
                  src={rating.imageUrl}
                  alt={`rating ${rating.ratingId}`}
                  className="rating-image"
                />
                <p className={ratingClassName}>& up</p>
              </li>
            )
          })}
        </ul>
      </>
    )
  }
  const {clearFilters} = props

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderCategoryView()}
      {renderRatingsList()}
      <button
        type="button"
        className="clear-filters-button"
        onClick={clearFilters}
      >
        Clear Filters
      </button>
    </div>
  )
}
export default FiltersGroup
