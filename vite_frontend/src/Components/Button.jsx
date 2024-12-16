function Button(props) {

    const signUp = () => {props.onsubmit()}

    return (<button type="submit" className="btn btn-primary" onClick={signUp}>{props.name}</button>)
}

export default Button;