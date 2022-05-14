import React from 'react'
import ListGifC from './component';
import useFetch from 'src/hooks/useFetch';

const ListGifV: React.FC = () => {
    const url = 'https://api.giphy.com/v1/stickers/packs/3138/stickers?api_key=rz2Ry3Nzml0qMQQ31d09Qkfyx0sWLimq&limit=25&offset=0'
    const { data }: any = useFetch(url)
    const list = data?.data?.map((e: { 'id': string, 'username': string, 'title': string, 'images': { 'original': { 'url': string } } }) => {
        return ({ 'id': e.id, 'username': e.username, 'title': e.title, 'images': e.images.original.url });
    })

    console.log(list, 'dataaa');


    return (
        <ListGifC data={list} />
    )
}

export default ListGifV