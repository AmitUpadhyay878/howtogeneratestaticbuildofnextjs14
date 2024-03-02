import React from 'react'
import { getJobList } from '../api/joblisting/route';
import Link from 'next/link';





const New = async() => {

    const  response = await getJobList()

  return (
    <div>

        {
            response?.data?.jobs?.map((data,i)=>{
                return(
                    <div style={{display:"flex",flexDirection:"column"}}key={i}>

                        <Link href={`/new/${data?.slug}`} >{data?.slug}</Link>
                    </div>
                )
            })
        }
    </div>
  )
}

export default New