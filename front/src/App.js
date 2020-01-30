import React from 'react'
import axios from 'axios'
import WilderCard from './components/WilderCard'
import ProjectCard from './components/ProjectCard'
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
			wilder: [],
			projects: []
		}
	}
	render() {
		return (
			<div className='flex-column height-max-100'>
				<main id='Container' className='flex1 overflow height-max-100'>
					<WilderCard />
					<ProjectCard />
				</main>
				<Navbar />
			</div>
		)
	}
}

export default App
