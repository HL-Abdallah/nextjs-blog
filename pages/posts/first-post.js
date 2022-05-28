import React from 'react'
import Link from 'next/link'

function FirstPost() {
    return (
        <>
            <h1>First Post</h1>
            <Link href="/">
                <a>{`👈🏼 Home Page ( using next.js's <Link> tag )`}</a>
            </Link>
            <br />
            <a href="/">{`👈🏼 Home Page ( using native <a> tag )`}</a>
        </>
    )
}

export default FirstPost