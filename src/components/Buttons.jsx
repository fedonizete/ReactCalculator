import './Buttons.css'
 

function Buttons (props) {

    let classes = 'buttons '
    classes += props.double ? 'double ' : '';
    classes += props.triple ? 'triple ' : '';
    classes += props.operation ? 'operation ' : '';
    classes += props.equal ? 'equal ' : '';

    const create = document.createElement("p")

    return(
            <div className={classes}>
            {props.label}

            
            </div>
        
    )
}

export default Buttons