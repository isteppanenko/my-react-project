const Message = ({username='Inkognito',message,isOnline}) => {
    return (
        <div>
            <h3>{author}</h3>
            <p>{message}</p>
            <p>{isOnline? 'Online':'Offline'}</p>
        </div>
    )
}
export default Message;