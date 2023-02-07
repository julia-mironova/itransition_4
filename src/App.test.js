import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const mc = screen.getByText(/My contacts/i);
  expect(mc).toBeInTheDocument();
});
