import React from 'react';
import {
    render,
    waitFor,
    getByPlaceholderText,
    getByText,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

import { fetchShow as mockFetchShow } from './api/fetchShow';

jest.mock('./api/fetchShow');

// console.log(mockFetchShow);

test('Check the status of the list', () => {});
