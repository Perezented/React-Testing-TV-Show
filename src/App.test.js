import React from 'react';
import { render, waitFor } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

import App from './App';

import { fetchShow as mockFetchShow } from './api/fetchShow';

const strangerThingsList = {
    data: [
        [
            {
                id: 553946,
                url:
                    'http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers',
                name: 'Chapter One: The Vanishing of Will Byers',
                season: 1,
                number: 1,
                airdate: '2016-07-15',
                airtime: '',
                airstamp: '2016-07-15T12:00:00+00:00',
                runtime: 60,
                image: {
                    medium:
                        'http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg',
                    original:
                        'http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg',
                },
                summary:
                    "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
                _links: {
                    self: {
                        href: 'http://api.tvmaze.com/episodes/553946',
                    },
                },
            },

            {
                id: 578666,
                url:
                    'http://www.tvmaze.com/episodes/578666/stranger-things-1x05-chapter-five-the-flea-and-the-acrobat',
                name: 'Chapter Five: The Flea and the Acrobat',
                season: 1,
                number: 5,
                airdate: '2016-07-15',
                airtime: '',
                airstamp: '2016-07-15T12:00:00+00:00',
                runtime: 60,
                image: {
                    medium:
                        'http://static.tvmaze.com/uploads/images/medium_landscape/67/168922.jpg',
                    original:
                        'http://static.tvmaze.com/uploads/images/original_untouched/67/168922.jpg',
                },
                summary:
                    '<p>Jim searches for Will at Hawkins Laboratory, but finds something unexpected. Meanwhile, Lonnie helps Joyce bury Will but reveals an ulterior motive for returning to town, while the boys find a way to locate Will but discover that Jane is opposing them.</p>',
                _links: {
                    self: {
                        href: 'http://api.tvmaze.com/episodes/578666',
                    },
                },
            },

            {
                id: 1752754,
                url:
                    'http://www.tvmaze.com/episodes/1752754/stranger-things-4x01-chapter-one-the-hellfire-club',
                name: 'Chapter One: The Hellfire Club',
                season: 4,
                number: 1,
                airdate: '',
                airtime: '',
                airstamp: null,
                runtime: 60,
                image: null,
                summary: null,
                _links: {
                    self: {
                        href: 'http://api.tvmaze.com/episodes/1752754',
                    },
                },
            },
        ],
    ],
};
jest.mock('./api/fetchShow');
console.log(mockFetchShow);
test('Check the status of the list', () => {
    console.log(strangerThingsList);
});
