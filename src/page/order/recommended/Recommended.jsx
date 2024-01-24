import Button from '../utils/Button'
import './Recommended.css'

const Recommended = ({handleClick}) => {
  return (
   <>
    <div>
      <h2 className='recommended-title'>Recommended</h2>
      <div className="recommended-flex">

      <Button onClickHandler={handleClick} value='' title='All Products'/>
      <Button onClickHandler={handleClick} value='Gucci' title='Gucci'/>
      <Button onClickHandler={handleClick} value='Ego' title='Ego'/>
      <Button onClickHandler={handleClick} value='Simmi' title='Simmi'/>
      <Button onClickHandler={handleClick} value='Zara' title='Zara'/>

      </div>
      
    </div>
   </>
  )
}

export default Recommended
