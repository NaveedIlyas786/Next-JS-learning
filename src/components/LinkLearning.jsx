import Link from 'next/link'

const LinkLearning = () => {
    const id =2
  return (
    <div className='linkDiv'>
        <Link href={`/dynamicRouting/userprofile/${id}`}>Goto User profile</Link>
        <Link href={`/simpleRouting/blogs`}>Goto Blog Page</Link>
        <Link href={`/capturePageOnAllRoutes/mydetails`}>Goto MyDetails</Link>
        <Link href={`/optionalExtendedRoute/optionalRoute`}>Goto Optional Route</Link>
        <Link href={`/parrallelRouting/colorbox`}>Parrallel Routing</Link>
        <Link href={`/layout_Learning/`}>Layout Learning Page</Link>
    </div>
  )
}

export default LinkLearning