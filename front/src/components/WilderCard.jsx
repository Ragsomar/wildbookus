import React from 'react'

const wilder = {
	name: 'Pierre-Alban',
	picture: 'https://zupimages.net/up/20/05/nv4m.jpg'
}

class WilderCard extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div id='WildersComponent' className='flex-column'>
				<div
					id='Wilders'
					className='flex-row space:inset-squish space:stack flex-both:center'
				>
					<div className='flex-column full-bord space:inline flex:50/50 round-bord profile-card-bg-color'>
						<img
							src={wilder.picture}
							alt='PA'
							className='profile-pic-size round-pic space:inset-squish'
						/>
						<h3 className='space:inset-stretch space:stack space-size:s space:inset-squish'>
							{wilder.name}
						</h3>
					</div>
					<div className='flex-column full-bord space:inline flex:50/50 round-bord'>
						<img
							src={wilder.picture}
							alt='PA'
							className='profile-pic-size round-pic space:inset-squish'
						/>
						<h3 className='space:inset-stretch space:stack  space-size:s space:inset-squish'>
							{wilder.name}
						</h3>
					</div>
				</div>
				<div className='flex-row  space:inset-squish space:stack flex-both:center'>
					<div className='flex-column full-bord space:inline flex:50/50 round-bord'>
						<img
							src={wilder.picture}
							alt='PA'
							className='profile-pic-size round-pic space:inset-squish'
						/>
						<h3 className='space:inset-stretch space:stack space-size:s space:inset-squish'>
							{wilder.name}
						</h3>
					</div>
					<div className='flex-column full-bord space:inline flex:50/50 round-bord'>
						<img
							src={wilder.picture}
							alt='PA'
							className='profile-pic-size round-pic space:inset-squish'
						/>
						<h3 className='space:inset-stretch space:stack  space-size:s space:inset-squish'>
							{wilder.name}
						</h3>
					</div>
				</div>
				<div className='flex-row  space:inset-squish space:stack flex-both:center'>
					<div className='flex-column full-bord space:inline flex:50/50 round-bord'>
						<img
							src={wilder.picture}
							alt='PA'
							className='profile-pic-size round-pic space:inset-squish'
						/>
						<h3 className='space:inset-stretch space:stack space-size:s space:inset-squish'>
							{wilder.name}
						</h3>
					</div>
					<div className='flex-column full-bord space:inline flex:50/50 round-bord'>
						<img
							src={wilder.picture}
							alt='PA'
							className='profile-pic-size round-pic space:inset-squish'
						/>
						<h3 className='space:inset-stretch space:stack  space-size:s space:inset-squish'>
							{wilder.name}
						</h3>
					</div>
				</div>
				<div className='flex-row  space:inset-squish space:stack flex-both:center'>
					<div className='flex-column full-bord space:inline flex:50/50 round-bord'>
						<img
							src={wilder.picture}
							alt='PA'
							className='profile-pic-size round-pic space:inset-squish'
						/>
						<h3 className='space:inset-stretch space:stack space-size:s space:inset-squish'>
							{wilder.name}
						</h3>
					</div>
					<div className='flex-column full-bord space:inline flex:50/50 round-bord'>
						<img
							src={wilder.picture}
							alt='PA'
							className='profile-pic-size round-pic space:inset-squish'
						/>
						<h3 className='space:inset-stretch space:stack  space-size:s space:inset-squish'>
							{wilder.name}
						</h3>
					</div>
				</div>
			</div>
		)
	}
}

export default WilderCard
