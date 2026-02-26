import React from 'react'
import latest1 from './latest1.png'
import latest2 from './latest2.png'
import latest from './latest.png'
import './latest.css'

function Latest() {
  return (
    <>
      <section className='latest'>
              <div className='container'>
                  <div className='latest-container'>
                      <h3 className='latest-title-name'>Latest News</h3>
                      <ul className='latest-list'>
                         <li className='latest-item'>
                             <img src={latest1} alt="" />
                             <h3 className='latest-title'>Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor.</h3>
                             <p className='latest-text'>Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus.</p>
                             <button className='latest-btn'><a className='latest-link' href="#">Read more</a></button>
                         </li>
                         <li className='latest-item'>
                             <img src= {latest2} alt="" />
                             <h3 className='latest-title'>Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor.</h3>
                             <p className='latest-text'>Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus.</p>
                             <button className='latest-btn'><a className='latest-link' href="#">Read more</a></button>
                         </li>
                         <li className='latest-item'>
                             <img src={latest} alt="" />
                             <h3 className='latest-title'>Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor.</h3>
                             <p className='latest-text'>Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus.</p>
                             <button className='latest-btn'><a className='latest-link' href="#">Read more</a></button>
                         </li>
                      </ul>
                  </div>
              </div>
      </section>
    </>
  )
}

export default Latest