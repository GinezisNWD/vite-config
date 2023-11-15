import { App } from '../App';
import { render, screen } from '@testing-library/react';

describe('test Products cards', () => {
  test('should have four cards', async () => {
    render(<App />);

    const clickBtn = await screen.findByText('click');
    expect(clickBtn).toBeInTheDocument();
  });
});
