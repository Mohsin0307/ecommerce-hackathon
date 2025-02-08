import { createClient } from 'next-sanity';

export const client = createClient({
    projectId: "499jjgjj",
    dataset: "production",
    apiVersion: "2024-02-12",
    useCdn: true,
});
