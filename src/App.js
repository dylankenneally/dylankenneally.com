import React from 'react';
import profilePic from './images/profile.png';
import './App.css';
import { Twitter, Github, Linkedin, Contact } from 'grommet-icons';

function App() {
	return (
		<div>
			<img src={profilePic} id="profile-pic" alt="Dylan Kenneally" />
			<h1>Hi, I'm Dylan</h1>
			<p>A software developer from Melbourne, Australia</p>
			<a href="https://twitter.com/dylankenneally" target="_blank" rel="noopener noreferrer">
				<Twitter className="external-link" />
			</a>
			<a href="https://github.com/dylankenneally" target="_blank" rel="noopener noreferrer">
				<Github className="external-link" />
			</a>
			<a href="https://www.linkedin.com/in/dylankenneally" target="_blank" rel="noopener noreferrer">
				<Linkedin className="external-link" />
			</a>
			<a href="mailto:dylan.kenneally+web-contact@gmail.com?Subject=Hi%2C%20Dylan" target="_blank" rel="noopener noreferrer">
				<Contact className="external-link" />
			</a>
		</div>
	);
}

export default App;
