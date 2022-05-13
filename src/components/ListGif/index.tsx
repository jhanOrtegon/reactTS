import React from 'react'
import ListGifC from './component';
import useFetch from 'src/hooks/useFetch';

const ListGifV = () => {
    const url = 'https://api.giphy.com/v1/stickers/packs/3138/stickers?api_key=rz2Ry3Nzml0qMQQ31d09Qkfyx0sWLimq&limit=25&offset=0'
    const { data }: any = useFetch(url)
    const list = data
        ?.data?.map((e: { 'id': string, 'embed_url': string, 'username': string, 'title': string }) =>
            ({ 'id': e.id, 'embed_url': e.embed_url, 'username': e.username, 'title': e.title }))
    return (
        <ListGifC data={list} />
    )
}

export default ListGifV