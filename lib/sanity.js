import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'zglgr2ev',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'skzHriUEPvh7NrcMuf1aInFcECyEIListmJSkfJ2sJFMfDH7qv5CFnyjmr25Fu9Dyid3aIyg2LyDQTWzPn9RdBzpDwCNqNaiJQP40HKOFI86DWRi1g13GfEwU0FfMKEXeb7AHJwlL1BBhVsJYRWmKgfrlGBZ24hfIJ0p1AA7sx2nVzNGrNmh',
    useCdn: false
})