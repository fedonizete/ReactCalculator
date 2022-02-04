import './Buttons.css'
 

function Buttons (props) {

    let classes = 'buttons '
    classes += props.double ? 'double ' : '';
    classes += props.operation ? 'operation ' : '';

    return(
            <div className={classes} onClick={e => props.onClick(props.label)}>
            {props.label}

            
            </div>
        
    )
}

export default Buttons