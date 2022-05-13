import { createPreviewSubscriptionHook, createCurrentUserHook } from "next-sanity"
import createImageUrlBuilder from '@sanity/image-url'
import { config } from './config'

// helper function to generate image URLs with only 'asset reference data' from our DB - source
export const urlFor = ( source ) => createImageUrlBuilder(config).image(source)

//set up the live preview subscription hook
export const usePreviewSubscription = createPreviewSubscriptionHook(config)

//helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config)