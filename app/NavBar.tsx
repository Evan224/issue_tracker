import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className='flex'>
        <Link href="/">Logo</Link>
        <ul>
            <li>
                <Link href="/">dashboard</Link>
                <Link href="/issues">issues</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar