import React from 'react'

const project = {
	name: 'Astra',
	screenshot: 'https://zupimages.net/up/20/05/0ty3.png',
	link: 'https://astranasa.netlify.com/'
}

class ProjectCard extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return (
			<div id='ProjectsComponent' className='flex-column'>
				<div id='Projects' className='width-max-100 space:stack'>
					<img
						src={project.screenshot}
						alt='Astra'
						className='width100 space:stack'
					/>
					<div className='space:inset-squish'>
						<h3 className='space:stack'>{project.name}</h3>
					</div>
				</div>
				<div className='width-max-100 space:stack'>
					<img
						src={project.screenshot}
						alt='Astra'
						className='width100 space:stack'
					/>
					<div className='space:inset-squish'>
						<h3 className='space:stack'>{project.name}</h3>
					</div>
				</div>
				<div className='width-max-100 space:stack'>
					<img
						src={project.screenshot}
						alt='Astra'
						className='width100 space:stack'
					/>
					<div className='space:inset-squish'>
						<h3 className='space:stack'>{project.name}</h3>
					</div>
				</div>
				<div className='width-max-100 space:stack'>
					<img
						src={project.screenshot}
						alt='Astra'
						className='width100 space:stack'
					/>
					<div className='space:inset-squish'>
						<h3 className='space:stack'>{project.name}</h3>
					</div>
				</div>
			</div>
		)
	}
}

export default ProjectCard
