import React from 'react'
import axios from 'axios'
import WilderCard from './components/WilderCard'
import ProjectCard from './components/ProjectCard'
import Header from './components/Header'
import Navbar from './components/Navbar'
import './style/Image.css'
import './style/Layout.css'
import './style/Border.css'
import './style/Space.css'
import './style/Color.css'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			wilders: [],
			projects: [],
			isLoaded: false
		}
	}
	componentDidMount() {
		const url = [
			`http://localhost:3000/wilders`,
			`http://localhost:3000/projects`
		]

		axios.all([axios.get(url[0]), axios.get(url[1])]).then(
			axios.spread((wilderRes, projectRes) => {
				this.setState({
					wilders: wilderRes.data,
					projects: projectRes.data,
					isLoaded: true
				})
			})
		)
	}
	render() {
		return this.state.isLoaded !== true ? (
			<h2>Loading ...</h2>
		) : (
			<div className='flex-column height-max-100 general-bg'>
				<Header />
				<main id='Container' className='flex1 overflow height-max-100'>
					<WilderCard wilders={this.state.wilders} />
					<ProjectCard projects={this.state.projects} />
				</main>
				<Navbar />
			</div>
		)
	}
}

export default App
