import React from 'react'
import '../CSS/task1.css'
const Task1 = () => {
  return (
    <div>
        <h1 style={{textAlign:"center"}}>Website Outline</h1>
        <ol>
            <li>Home Page</li>
            <li>Link Page</li>
            <ol type="I">
                <li>Link to Search Engines</li>
                <li>Link to information site</li>
                <ol type='A'>
                    <li>News Site</li>
                    <ol type='i'>
                        <li>TV based</li>
                        <ol type='a'>
                            <li>CNN</li>
                            <li>Headline</li>
                        </ol>
                    </ol>
                    <li>Stock Site</li>
                </ol>
                <li>Links to fun sites</li>
            </ol>
            <li>Contact Page</li>
        </ol>
    </div>
  )
}

export default Task1
