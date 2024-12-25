
import Protypes from 'prop-types';
function UserGreeting(props) {
    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>
    const lognPrompt = <h2 className="login-promt">Please login continue</h2>;
    return (props.isLoggedIn ? welcomeMessage:lognPrompt);
  
}

UserGreeting.Protypes={
    isLoggedIn:Protypes.bool,
    username:Protypes.string
}

UserGreeting.defaultProps={
    isLoggedIn:false,
    username:"Unknown",
}
export default UserGreeting;
