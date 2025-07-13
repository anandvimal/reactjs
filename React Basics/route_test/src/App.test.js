import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders navigation links', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const homeLink = screen.getByText(/home/i);
  const contactLink = screen.getByText(/contact/i);
  expect(homeLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
});
