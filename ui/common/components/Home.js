import React, { Component } from 'react'
import styles from './Home.scss'
// import fetch from 'isomorphic-fetch'


class Home extends Component {
	// state = {
	//     lists: []
	// }


	// componentDidMount() {
 //    	fetch('http://127.0.0.1:8000/api/lists')
 //      		.then((response) => response.json())
 //      		.then((lists) => this.setState({ lists }))
 //  	}

	render() {
	    return (
	    	<div>
	    		<h1>Home</h1>
				{
		            // this.state.lists.map((list) => (
		            // 	<div key={list._id}>
		            // 		<h2>{list._id}</h2>
			           //  	<h2>{list.description}</h2>
			           //  	<h2>{list.ownerID}</h2> 
		            // 	</div>
		            // ))
		        }
	    	</div>
	    )
	}
}

export default Home