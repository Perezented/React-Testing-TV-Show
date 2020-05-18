import axios from 'axios';

export const fetchData = () => {
    return axios
        .get(
            'https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes'
        )
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            return err;
        });
};
