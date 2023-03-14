import Router from 'next/router';
import React from 'react';
import { Typography } from 'src/components/Typography';
import styled from 'styled-components';

export const IndexPage = () => {
  return (
    <Container>
      <Typography size="16">IndexPage</Typography>
      <button onClick={() => Router.push('/edit')}>editPage 가기</button>
      <button onClick={() => Router.push('/previewTest')}>previewTestPage 가기</button>
    </Container>
  );
};

const Container = styled.div``;
