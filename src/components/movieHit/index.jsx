import React from 'react';

import styled from 'styled-components';
import MovieHighlight from '../movieHighlight';

const HitContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  margin: 2em 1em;
`;

const Title = styled.div`
  font-weight: black;
  font-size: 24px;
  margin-top: 10px;
  text-align: center;
`;

const Overview = styled.div`
  /* max-height: 9px; */
  text-overflow: ellipsis;
  overflow: hidden;
  margin-top: 1em;
  line-height: 1.3;
  font-size: 14px;
`;

const Rating = styled.b`
  font-size: 16px;
  color: #2ecc71;
  margin-top: 1rem;
`;

export function MovieHit(props) {
  const { hit } = props;

  return (
    <HitContainer>
      <Title>
        <MovieHighlight hit={hit} attribute="title" />
      </Title>
      <Overview>
        <MovieHighlight hit={hit} attribute="abstract" />
      </Overview>
      <Rating>
        <MovieHighlight hit={hit} attribute="cited" />
      </Rating>
    </HitContainer>
  );
}
