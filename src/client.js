import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: "78ct684z",
    dataset: "production",
    useCdn: true,
    apiVersion: '2021-08-31',
    token: process.env.REACT_PUBLIC_TOKEN
})