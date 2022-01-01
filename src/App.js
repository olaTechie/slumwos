import styled from 'styled-components';
import { InstantSearch, Pagination, SearchBox } from 'react-instantsearch-dom';
import { searchClient } from './typesenseAdapter';
import MoviesHits from './components/moviesHits';
import 'instantsearch.css/themes/satellite.css';

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
        <h4>Search Movies</h4>
        <SearchBox />

        <MoviesHits />
        <Pagination />
      </InstantSearch>
    </AppContainer>
  );
}

export default App;
