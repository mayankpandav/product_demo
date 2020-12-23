import { render, screen } from '@testing-library/react';
import Header from './header';

test('renders Header Home link test', () => {
  render(<Header />);
  const element = screen.getByText(/Home/i);
  expect(element).toBeInTheDocument();
});



test('renders Header Basket link test', () => {
    render(<Header />);
    const element = screen.getByText(/Basket/i);
    expect(element).toBeInTheDocument();
  });
  
  