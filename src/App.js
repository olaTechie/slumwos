import styled from 'styled-components';

import { searchClient } from './typesenseAdapter';

import 'instantsearch.css/themes/satellite.css';
import PropTypes from 'prop-types';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Configure,
  DynamicWidgets,
  RefinementList,
  Pagination,
  Highlight,
} from 'react-instantsearch-dom';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em 0;
`;

function App() {
  return (
    <AppContainer>
      <h2>React/Typesense Movies InstantSearch</h2>
      <InstantSearch indexName="articles" searchClient={searchClient}>
        <RefinementList attribute="doc" />
        <h4>Search Movies</h4>
        <SearchBox
          className="searchbox"
          translations={{
            placeholder: '',
          }}
        />

        <Hits hitComponent={Hit} />
        <Pagination />
      </InstantSearch>
    </AppContainer>
  );
}

export default App;

function Hit(props) {
  return (
    <article>
      <h1>
        <Highlight attribute="abstract" hit={props.hit} />
      </h1>
      <p>
        <Highlight attribute="cited" hit={props.hit} />
      </p>
    </article>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};
