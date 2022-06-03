import { render, screen } from '@testing-library/react';
import { SearchProduct } from './SearchProduct';

describe('<SearchProduct />', () => {
  it('should render input', () => {
    render(<SearchProduct />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
