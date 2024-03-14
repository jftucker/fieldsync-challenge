import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import HomePage from '../../components/HomePage';
import AllProviders from '../AllProviders';
import { server } from '../mocks/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('HomePage', () => {
  it('should render a download button when placeholderUsers is falsey', () => {
    render(<HomePage />, { wrapper: AllProviders });
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/download/i);
  });
});
