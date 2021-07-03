import { Container } from '@material-ui/core';
import React from 'react';
import DevelopersList from '../../components/DevelopersList';

export default function Developers() {
  return (
    <Container maxWidth="md">
      <DevelopersList />
    </Container>
  );
}
