import { Formik } from 'formik';
import {
  HeaderSearch,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
//   SearchFormLabel,
} from './search-bar.styled';

import { BiSearchAlt } from 'react-icons/bi';

// onSearch = () => {}

export const SearchBar = () => {
  return (
    <HeaderSearch>
      <Formik
        initialValues={{ input: 'Search images and photos' }}
        onSubmit={(values, actions) => {
          this.onSearch(values);
          actions.resetForm();
        }}
      >
        <SearchForm>
          <SearchFormButton type="submit">
            {/* <SearchFormLabel> */}
              <BiSearchAlt size={32}/>
            {/* </SearchFormLabel> */}
          </SearchFormButton>

          <SearchFormInput
            name="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Formik>
    </HeaderSearch>
  );
};
