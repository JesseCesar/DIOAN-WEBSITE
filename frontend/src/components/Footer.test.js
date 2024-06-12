import 'act' from 'react'
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

test('renders Footer', () => {
  render(<Footer />);
  const element = screen.getByText(/Anytown, USA/i);
  expect(element).toBeInTheDocument();
});

test('has correct class', () => {
  render(<Footer />);
  const element = screen.getByText(/About Us/i);
  expect(element).toHaveClass('gap-x-3.5');
});
