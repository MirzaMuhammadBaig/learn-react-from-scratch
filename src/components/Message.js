import React from 'react'

function Message() {

    const [Message, setMessage] = React.useState(["a", "b" ,"a", "b"])

  return (
    <div>
        {
            Message.length === 0 ?
            <h1>You have read all msg</h1> :
            <h1> You have {Message.length} unread {Message.length > 1 ? 'messages' : 'message'}</h1>
        }
    </div>
  )
}

export default Message