import React, { useContext } from 'react';
import Container from '../../components/Container';
import PeopleTable from '../../components/PeopleTable';
import PeopleContext from '../../contexts/PeopleContext';

const Home: React.FC = () => {
  const { people, isLoading } = useContext(PeopleContext);

  if (isLoading) return null;

  return (
    <Container>
      <PeopleTable rows={people || []} />
    </Container>
  );
};

export default Home;
