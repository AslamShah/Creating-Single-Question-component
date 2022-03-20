import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './Question'

function App() {
	return ({{{{}}}}
		<main>
			<div className="container">
				<h3>FAQ</h3>
				<section className="info">
                 
  

					<SingleQuestion title="My Question" />
                     <div>{data.map(data => {
       return <h5>{data.title}</h5>
   })}</div>

				</section>
			</div>
		</main>
	)
}

export default App
