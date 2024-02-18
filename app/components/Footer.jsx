import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="dark:bg-neutral-900 bg-white py-2 w-full flex items-center sticky bottom-0">
        <div className="container mx-auto text-center text-neutral-800 dark:text-slate-200 max-w-6xl font-semibold">
            Copyright © 2024 created by 
            <span>
                <Link href={'https://www.linkedin.com/in/perdana-wahyu-jatmiko/'}> Perdana Erda</Link>
            </span>
        </div>
    </footer>
  )
}

export default Footer