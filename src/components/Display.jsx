import './Display.css'


export default props => {

    let classes = 'display '
    classes += props.fontSize === 'small' ? 'small' : '';
    classes += props.fontSize === 'smaller' ? 'smaller' : '';

    return(
        <div className={classes}>
            {props.value}
        </div>
    )
    
}
