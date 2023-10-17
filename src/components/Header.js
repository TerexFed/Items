
export default function Header({ scrollToBottom }) {
  return (
    <div className='Header'>
        <h1>Products</h1>
        <button onClick={scrollToBottom}>Scroll to bottom</button>
    </div>
  )
}
