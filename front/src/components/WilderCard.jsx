import React from 'react'

class WilderCard extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div className='flex-column'>
				{this.props.wilders.map(wilder => (
					<div
						key={wilder.id}
						id='Wilders'
						className='flex-row space:inset-squish space:stack flex-both:center'
					>
						<div className='flex-column full-bord space:inline flex:50/50 profile-bg-color round-bord shadow'>
							<img
								src={wilder.picture}
								alt={wilder.name}
								className='profile-pic-size round-pic space:inset-squish'
							/>
							<h3 className='space:inset-stretch space:stack space-size:s space:inset-squish'>
								{wilder.name}
							</h3>
						</div>
					</div>
				))}
			</div>
		)
	}
}

export default WilderCard
