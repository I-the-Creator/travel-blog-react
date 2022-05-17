// token authentication to backend and define how we get the client in order to communicate with server
import { createClient } from "next-sanity";
import { config } from './config'

//set up the client for fetching data
export const sanityClient = createClient(config)

//set up the preview client 
export const previewClient = createClient({
    ...config,
    useCdn: false, // for the preview mode
    token: process.env.NEXT_PUBLIC_SANITY
})

// for easy switching between 'normal' client and 'preview' clientWidth
export const getClient = ( usePreview ) => usePreview ? previewClient : sanityClient