'use client' // Error components must be Client Components
 
import Effects from '@/components/Effects'
import { Fragment, useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
       <Fragment> <Effects pageClassName="Projects"/>   

     {/* center the div */}
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '82vh' }}>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        <span>Try again </span>
      </button>
    </div>
    </Fragment>
  )
}