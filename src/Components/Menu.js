import React from 'react'

function Menu() {
  return (
    <div className="Menu">
        <div className='menu-header'>
        <div className='menu-header-text'>
            <h1>Enjoy Coffee</h1></div>
            <div className="menu-header-img">
             <img src="data:image/jpeg;base64,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" alt="" className="cup"/>
        </div>
        </div>
        <div className="menu-item1">
            <div className="item1-img">
                <img src="https://themes.muffingroup.com/be/cafe3/wp-content/uploads/2020/02/cafe3-offer-pic1.jpg" alt=""/>
            </div>
            <div className="item1-text">
              <h3 className="number">01-</h3>
              <h1>Aliquam fringilla</h1>
              <h4>Proin risus erat $2</h4>
              <p>Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis nibh magna. Proin risus erat, fringilla vel purus.</p>
              <h4>Phasellus fermentum in $4</h4>
              <p>Sed ultrices nisl velit, eu ornare est ullamcorper.</p>
              <h4>Proin risus erat $5</h4>
              <p>Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis nibh magna. Proin risus erat</p>
            </div>
        </div>
        <div className="menu-item2">
        <div className="item2-text">
              <h3 className="number">02-</h3>
              <h1>Nulla Imperdiet</h1>
              <h4>Proin risus erat $2</h4>
              <p>Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis nibh magna. Proin risus erat, fringilla vel purus.</p>
              <h4>Phasellus fermentum in $4</h4>
              <p>Sed ultrices nisl velit, eu ornare est ullamcorper.</p>
              <h4>Proin risus erat $5</h4>
              <p>Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis nibh magna. Proin risus erat</p>
            </div>
            <div className="item2-img">
                <img src="https://themes.muffingroup.com/be/cafe3/wp-content/uploads/2020/02/cafe3-offer-pic2.jpg" alt=""/>
            </div>
        </div>
        <div className="menu-item3">
            <div className="item3-img">
                <img src="https://themes.muffingroup.com/be/cafe3/wp-content/uploads/2020/02/cafe3-offer-pic3.jpg" alt=""/>
            </div>
            <div className="item3-text">
              <h3 className="number">03-</h3>
              <h1>Aliquam erat</h1>
              <h4>Proin risus erat $2</h4>
              <p>Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis nibh magna. Proin risus erat, fringilla vel purus.</p>
              <h4>Phasellus fermentum in $4</h4>
              <p>Sed ultrices nisl velit, eu ornare est ullamcorper.</p>
              <h4>Proin risus erat $5</h4>
              <p>Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis nibh magna. Proin risus erat</p>
            </div>
        </div>
           <div className="menu-item4">
        <div className="item4-text">
              <h3 className="number">04-</h3>
              <h1>Integer ultrices</h1>
              <h4>Proin risus erat $2</h4>
              <p>Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis nibh magna. Proin risus erat, fringilla vel purus.</p>
              <h4>Phasellus fermentum in $4</h4>
              <p>Sed ultrices nisl velit, eu ornare est ullamcorper.</p>
              <h4>Proin risus erat $5</h4>
              <p>Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis nibh magna. Proin risus erat</p>
            </div>
            <div className="item4-img">
                <img src="https://themes.muffingroup.com/be/cafe3/wp-content/uploads/2020/02/cafe3-offer-pic4.jpg" alt=""/>
            </div>
        </div>
        <hr className="menu-hr"/>
    </div>
  )
}

export default Menu