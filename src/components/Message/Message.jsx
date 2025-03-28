const Message = ({author='unnamed',message,isOnline}) => {
    return (
        <div>
            <h3>{author}</h3>
            <p>{message}</p>
            <p>{isOnline? 'Online':'Offline'}</p>
        </div>
    )
}
export default Message;