import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { dataResponse } from '../App.test';
import userEvent from '@testing-library/user-event';

import App from '../App';
import { fetchData as mockFetchShows } from '../api/fetchShows';

test('Able to select a specific season to view the episodes', async () => {
    mockFetchShows.mockResolvedValueOnce(dataResponse);
    const { getByText, rerender, debug } = render(<App />);
    await waitFor(() => {
        rerender(<App />);
    });
    // debug();
    userEvent.click(getByText(/select a season/i));
    userEvent.click(getByText(/season 3/i));
    expect(getByText(/suzie, do you copy/i)).toBeInTheDocument();
});
