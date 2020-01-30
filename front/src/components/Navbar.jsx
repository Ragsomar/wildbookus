import React from 'react'
import { Link } from 'react-scroll'

function Navbar() {
	return (
		<div className='flex-row space-evenly bord-top'>
			<Link
				activeClass='active'
				to='Wilders'
				spy={true}
				smooth={true}
				duration={500}
				containerId='Container'
				className='space-size:l space:inset-squish'
			>
				Wilders
			</Link>
			<Link
				activeClass='active'
				to='Projects'
				spy={true}
				smooth={true}
				duration={500}
				containerId='Container'
				className='space-size:l space:inset-squish'
			>
				Projects
			</Link>
		</div>
	)
}

export default Navbar
