import React from 'react'
import './intro.css'

function Intro() {
	return (
		<div className='intro'>
			<h1>Online shopping even more than profitable</h1>
			<div className='intro__elements'>
				<div>
					<i className='far fa-hand-pointer' />
					<p>Choose the one you like on the site</p>
				</div>

				<div>
					<i className='far fa-credit-card' />
					<p>Pay fot the order with points and card directly on the website</p>
				</div>

				<div>
					<i className='fas fa-truck' />
					<p>Pay fot the order with points and card directly on the website</p>
				</div>
			</div>
		</div>
	)
}

export default Intro
