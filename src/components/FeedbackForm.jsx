import Card from "./shared/Card";
import {useState} from 'react'
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

function FeedbackForm({handleAdd}) {
const [text, setText] = useState('')
const [rating, setRating] = useState(10)
const [btnDisabled, setbtnDisabled] = useState(true)
const [message, setMessage] = useState('')

const handleTextChange= (e)=> {
  if(text ===''){
    setbtnDisabled(true)
    setMessage(null)
  }
  else if(text!=='' && text.trim().length < 9){
    setMessage('Review Must be atleast 10 Characters')
    setbtnDisabled(true)
  }
  else{
    setMessage(null)
    setbtnDisabled(false)
  }
  setText(e.target.value)
}
  const handleSubmit =(e) => {
    e.preventDefault()
    if(text.trim().length >= 10 ){
      const newFeedback ={
        text,
        rating
      }
      handleAdd(newFeedback)
      setText('')
    }
  }
  return  <Card>
    <form onSubmit={handleSubmit}>
      <h2 style={{color:"black",paddingBottom:7}}>
        How would you rate your service with us ? 
      </h2>
      <RatingSelect select ={(rating)=>setRating(rating)}/>
      <div className="input-group">
        <input onChange={handleTextChange} type="text" placeholder="Write a Review" value={text}/>
        <Button type="Submit" isDisabled={btnDisabled} >Send</Button>
      </div>
      {message && <div className="message">{message}</div>}
    </form>
  </Card>;
}

export default FeedbackForm;
