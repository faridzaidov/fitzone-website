import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'

export default function Loader() {
    return (
        <div className='flex items-center justify-center w-full'>
            <InfinitySpin
                width='200'
                color="#6366f1"
            />
        </div>
    )
}
