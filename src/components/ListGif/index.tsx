import React from 'react'
import ListGifC from './component';
import useFetch from 'src/hooks/useFetch';

const ListGifV: React.FC<{ 'formState': object }> = ({ formState }) => {
    const { inputSearch } = formState as { 'inputSearch': string }

    const url = `https://api.giphy.com/v1/gifs/search?api_key=rz2Ry3Nzml0qMQQ31d09Qkfyx0sWLimq&q=${inputSearch}&limit=25&offset=0&rating=g&lang=en`

    const { data }: any = useFetch(url)

    const list = data?.data?.map((e: { 'id': string, 'username': string, 'title': string, 'images': { 'original': { 'url': string } } }) => {
        return ({ 'id': e.id, 'username': e.username, 'title': e.title, 'images': e.images.original.url });
    })

    console.log(formState, 'formState');

    return (
        <ListGifC data={list} formState={formState} />
    )
}

export default ListGifV 