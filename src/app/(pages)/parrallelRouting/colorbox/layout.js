export default function parrallelRoutingColorboxLayout({children,left,right}) {
    const islogic = false
  return (
    <div>
        {/* Simple  displaying Slot */}

      {children}
      {/* {left}
      {right} */}

        {/* Conditional displaying Slot */}

        {islogic ? left : right}
    </div>
  )
}