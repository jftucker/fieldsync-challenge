import { render, screen } from '@testing-library/react';
import HomePage from '../../components/HomePage';
import AllProviders from '../AllProviders';
import '@testing-library/jest-dom/vitest';

describe('HomePage', () => {
  it('should render a download button when placeholderUsers is falsey', () => {
    render(<HomePage />, { wrapper: AllProviders });
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/download/i);
  });
});
