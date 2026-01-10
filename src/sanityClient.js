import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from '@sanity/image-url'

export const client = createClient({
  projectId: '9vwj1j8e',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-01-01',
});

const builder = createImageUrlBuilder(client)

export const urlFor = (source) => {
  return builder.image(source);
};