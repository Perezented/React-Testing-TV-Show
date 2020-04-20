import axios from 'axios';

export const fetchShow = () => {
    return axios
        .get(
            'https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes'
        )
        .then((res) => {
            // setShow(res);
            // setSeasons(formatSeasons(res.data._embedded.episodes));
            return res;
        })
        .catch((err) => {
            console.log(
                'Error fetching the data from api, error: ',
                err.message
            );
            return err;
        });
};
