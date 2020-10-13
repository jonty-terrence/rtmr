import React from 'react'

function InfoBoxes () {
  return (
    <div className="info-boxes">
      <div className="first-about">
        <div className="text-box">
        <h3>The Living Wage</h3>
        <p>
          "A living wage is the income necessary to provide workers and their families with the basic 
          necessities of life. A living wage will enable workers to live with dignity and to 
          participate as active citizens in society. We call upon the Government, employers and society 
          as a whole to strive for a living wage for all households as a necessary and important step in the 
          reduction of poverty in New Zealand.”
        </p>
        </div>
        <img src="market.jpg" alt="market"/>
      </div>
      <div className="second-about">
      <img src="bookstore.jpg" alt="book store"/>
        <div className="text-box">
        <h3>Support The Living Wage Aotearoa</h3>
        <p>
        The Living Wage has emerged as a response to growing poverty and inequality that continues to hold back so 
        many Kiwi workers, their families and our economy. <br></br>
        Living Wage Movement Aotearoa New Zealand brings together community/secular, union and faith-based groups 
        to campaign for a Living Wage.<br></br>
        <a href="https://www.livingwage.org.nz/">Find out more about The Living Wage Aotearoa and view a full list of accredited employers here</a>
        </p>
        </div>
      </div>
    </div>
  )
}

export default InfoBoxes
