// token authentication to backend and define how we get the client in order to communicate with server
import { createClient } from "next-sanity";
import { config } from './config'

//set up the client for fetching data
export const sanityClient = createClient(config)

//set up the preview client 
export const previewClient = createClient({
    ...config,
    useCdn: false, // for the preview mode
    token: 'skpQzC7HoQxBPNmWF5HvMW3LPz08EIA6ddpxJHM7PmgSUzajybb7e5mKOCVg3JHnpkoVgexYnsYWYRqEKY0VfAEW3rBZVsQE1RpUsiPtAZkFHl6L92vKyVpYO2qz67J3rLGYT6nTGIkIm2eCruP92BA8XmE3cjSJAxJlCynXn47Nz5QNiPBN'
})

// for easy switching between 'normal' client and 'preview' clientWidth
export const getClient = ( usePreview ) => usePreview ? previewClient : sanityClient