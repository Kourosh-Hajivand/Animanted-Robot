import React from 'react'
import dynamic from 'next/dynamic'
const Scene = dynamic(() => import('@/components/Scene'), { ssr: false })
function page() {
  return (
    <main className='h-screen w-full bg-black'><Scene /></main>
  )
}

export default page