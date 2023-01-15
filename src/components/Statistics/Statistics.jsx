import propTypes from 'prop-types';
import { Container, EventName, StatList, StatItem, Label, Percentage } from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <Container>
      {title && <EventName>{title}</EventName>}

      <StatList>
        {stats.map(({ id, percentage, label }) => {
          return (
            <StatItem key={id}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </StatItem>
          );
        })}
      </StatList>
    </Container>
  );
}

Statistics.propTypes = {
  label: propTypes.string.isRequired,
  percentage: propTypes.number.isRequired,
};
