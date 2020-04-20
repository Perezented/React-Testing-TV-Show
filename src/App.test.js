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

const res = {
    data: {
        _embedded: {
            episodes: [
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
                    id: 578663,
                    url:
                        'http://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-the-weirdo-on-maple-street',
                    name: 'Chapter Two: The Weirdo on Maple Street',
                    season: 1,
                    number: 2,
                    airdate: '2016-07-15',
                    airtime: '',
                    airstamp: '2016-07-15T12:00:00+00:00',
                    runtime: 60,
                    image: {
                        medium:
                            'http://static.tvmaze.com/uploads/images/medium_landscape/72/181376.jpg',
                        original:
                            'http://static.tvmaze.com/uploads/images/original_untouched/72/181376.jpg',
                    },
                    summary:
                        '<p>While the search for the missing Will continues, Joyce tells Jim about a call she apparently received from her son. Meanwhile, Jane warns Mike that there are bad people after her, and he realizes that she knows what happened to Will.</p>',
                    _links: {
                        self: {
                            href: 'http://api.tvmaze.com/episodes/578663',
                        },
                    },
                },
                {
                    id: 1576472,
                    url:
                        'http://www.tvmaze.com/episodes/1576472/stranger-things-3x04-chapter-four-the-sauna-test',
                    name: 'Chapter Four: The Sauna Test',
                    season: 3,
                    number: 4,
                    airdate: '2019-07-04',
                    airtime: '',
                    airstamp: '2019-07-04T12:00:00+00:00',
                    runtime: 53,
                    image: {
                        medium:
                            'http://static.tvmaze.com/uploads/images/medium_landscape/204/511312.jpg',
                        original:
                            'http://static.tvmaze.com/uploads/images/original_untouched/204/511312.jpg',
                    },
                    summary:
                        "<p>Mike, Lucas, and Will recruit El and Max to help them learn who the Mind Flayer's host is. Robin, Steve, and Dustin recruit someone to sneak into Lynx, and Nancy and Jonathan are fired.</p>",
                    _links: {
                        self: {
                            href: 'http://api.tvmaze.com/episodes/1576472',
                        },
                    },
                },
                {
                    id: 1576473,
                    url:
                        'http://www.tvmaze.com/episodes/1576473/stranger-things-3x05-chapter-five-the-flayed',
                    name: 'Chapter Five: The Flayed',
                    season: 3,
                    number: 5,
                    airdate: '2019-07-04',
                    airtime: '',
                    airstamp: '2019-07-04T12:00:00+00:00',
                    runtime: 52,
                    image: {
                        medium:
                            'http://static.tvmaze.com/uploads/images/medium_landscape/204/510102.jpg',
                        original:
                            'http://static.tvmaze.com/uploads/images/original_untouched/204/510102.jpg',
                    },
                    summary:
                        "<p>The Scoop Group explore the tunnels beneath Starcourt, while Nancy and Jonathan recruit Mike and the others to help them discover what happen to the Holloways and find the Mind Flayer's base of operations.</p>",
                    _links: {
                        self: {
                            href: 'http://api.tvmaze.com/episodes/1576473',
                        },
                    },
                },
                {
                    id: 1576474,
                    url:
                        'http://www.tvmaze.com/episodes/1576474/stranger-things-3x06-chapter-six-e-pluribus-unum',
                    name: 'Chapter Six: E Pluribus Unum',
                    season: 3,
                    number: 6,
                    airdate: '2019-07-04',
                    airtime: '',
                    airstamp: '2019-07-04T12:00:00+00:00',
                    runtime: 60,
                    image: {
                        medium:
                            'http://static.tvmaze.com/uploads/images/medium_landscape/204/511681.jpg',
                        original:
                            'http://static.tvmaze.com/uploads/images/original_untouched/204/511681.jpg',
                    },
                    summary:
                        '<p>Dr. Alexei reveals what the Russians have been building, and Eleven sees where Billy has been. Dustin and Erica stage a daring rescue.</p>',
                    _links: {
                        self: {
                            href: 'http://api.tvmaze.com/episodes/1576474',
                        },
                    },
                },
                {
                    id: 1576475,
                    url:
                        'http://www.tvmaze.com/episodes/1576475/stranger-things-3x07-chapter-seven-the-bite',
                    name: 'Chapter Seven: The Bite',
                    season: 3,
                    number: 7,
                    airdate: '2019-07-04',
                    airtime: '',
                    airstamp: '2019-07-04T12:00:00+00:00',
                    runtime: 55,
                    image: {
                        medium:
                            'http://static.tvmaze.com/uploads/images/medium_landscape/204/511708.jpg',
                        original:
                            'http://static.tvmaze.com/uploads/images/original_untouched/204/511708.jpg',
                    },
                    summary:
                        '<p>El and the others defend themselves as the Flayer tracks them down. The Scoop Group escape the Russian base and hide in a movie theater, but the Russians close in on them.</p>',
                    _links: {
                        self: {
                            href: 'http://api.tvmaze.com/episodes/1576475',
                        },
                    },
                },
                {
                    id: 1576476,
                    url:
                        'http://www.tvmaze.com/episodes/1576476/stranger-things-3x08-chapter-eight-the-battle-of-starcourt',
                    name: 'Chapter Eight: The Battle of Starcourt',
                    season: 3,
                    number: 8,
                    airdate: '2019-07-04',
                    airtime: '',
                    airstamp: '2019-07-04T12:00:00+00:00',
                    runtime: 78,
                    image: {
                        medium:
                            'http://static.tvmaze.com/uploads/images/medium_landscape/204/510105.jpg',
                        original:
                            'http://static.tvmaze.com/uploads/images/original_untouched/204/510105.jpg',
                    },
                    summary:
                        '<p>The Flayer comes to the mall to get El, and Dustin contacts Suzie to provide Jim and Joyce with needed information. El reminds Billy of his past, and Jim and Joyce have an argument about not arguing.</p>',
                    _links: {
                        self: {
                            href: 'http://api.tvmaze.com/episodes/1576476',
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
        },
    },
};

jest.mock('./api/fetchShow');

// console.log(mockFetchShow);

test('Check the status of the list', () => {
    console.log(res);
});

test('Renders up page', async () => {
    mockFetchShow.mockResolvedValueOnce(res);
    const { getByText } = render(<App />);
    await waitFor(() => expect(getByText(/stranger things/i)).toBeInDocument());
});
