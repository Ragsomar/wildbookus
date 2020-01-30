import React from 'react'
import WilderCard from './components/WilderCard'
import ProjectCard from './components/ProjectCard'
import Navbar from './components/Navbar'
import './style/Image.css'
import './style/Layout.css'
import './style/Border.css'
import './style/Space.css'
import './style/Color.css'

function App() {
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

export default App
