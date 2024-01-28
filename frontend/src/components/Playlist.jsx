import React from 'react'
import { Card } from './Card'
function Playlist({title,CardsData}) {
    
  return (
    <div className='w-full flex flex-col gap-4'>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <div className='flex  gap-3'>
            {
                CardsData.map((item) => {
                    return (
                        <Card
                           name={item.name}
                           des={item.des}
                           img={item.img}
                           song={item.song}
                           key={item.name}
                           item={item}
                           />
                    )
                })
            }
        </div>
    </div>
  )
}

export default Playlist