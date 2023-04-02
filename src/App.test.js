import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Magnus Byrkjeland/i);
  expect(linkElement).toBeInTheDocument();
});
