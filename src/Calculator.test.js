import { render, fireEvent, screen } from '@testing-library/react';
import Calculator from './Calculator';

test('renders calculator display', () => {
  render(<Calculator />);
  expect(screen.getByTestId('display')).toBeInTheDocument();
});

test('clicking buttons updates display', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByText('A'));
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('1'));
  expect(screen.getByTestId('display')).toHaveTextContent('A+1');
});

test('clear button resets display', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByText('9'));
  fireEvent.click(screen.getByText('Clear'));
  expect(screen.getByTestId('display')).toHaveTextContent('');
});
