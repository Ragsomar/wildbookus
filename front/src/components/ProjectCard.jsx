import React from 'react'

class ProjectCard extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div className='flex-column'>
				{this.props.projects.map(project => (
					<div
						key={project.id}
						id='Projects'
						className='width-max-100 space:stack'
					>
						{project.screenshot && (
							<img
								src={project.screenshot}
								alt={project.name}
								className='width100 space:stack'
							/>
						)}
						<div className='space:inset-squish'>
							<h3 className='space:stack'>{project.name}</h3>
						</div>
					</div>
				))}
			</div>
		)
	}
}

export default ProjectCard
