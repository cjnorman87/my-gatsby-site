import * as React from 'react'
import Greeting from '../components/greetings'

const SayHello = () => {
	return (
		<div>
			<Greeting name="Count Dooku"/>
			<Greeting name="Master Yoda"/>
			<Greeting name="Luke"/>
			<Greeting name="Skywalker"/>
		</div>
	)
}

export default SayHello 
