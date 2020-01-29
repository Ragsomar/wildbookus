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
			<div className='width-max-100'>
				<img
					src={project.screenshot}
					alt='Astra'
					className='width100'
				/>
				<h3>{project.name}</h3>
				<a href={project.link}>Astra</a>
			</div>
		)
	}
}

export default ProjectCard
