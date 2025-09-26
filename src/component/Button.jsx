import React from 'react'
import PropTypes from 'prop-types'



/***
 * Primary button
 */

const ButtonPrimary = ({

href,
target ='_self',
label,
icon,
classes
}) => {
  if(href){
    return(
        <a 
  href={href} 
  target={target} 
  rel={target === "_blank" ? "noopener noreferrer" : undefined}
  className={`btn btn-primary ${classes || ""}`}
>
  {label}

  {icon ? (
    <span className="material-symbols-rounded" aria-hidden="true">
      {icon}
    </span>
  ) : null}
</a>
    )
  } else{
     return(
        <button className={"btn btn-primary " + classes}>
            {label}


            {icon ? 
                <span className="material-symbols-rounded"
                aria-hidden="true">
                    {icon}
                </span>
                : undefined
             }

        </button>
    )
  }
}

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string
}





/***
 * Primary buttonOutline
 */

const ButtonOutline = ({

href,
target ='_self',
label,
icon,
classes
}) => {
  if(href){
    return(
        <a href={href} target={target} className={"btn btn-outline " + classes}>
            {label}

            {icon ? 
                <span className="material-symbols-rounded"
                aria-hidden="true">
                    {icon}
                </span>
                : undefined
             }
        </a>
    )
  } else{
     return(
        <button className={"btn btn-outline " + classes}>
            {label}


            {icon ? 
                <span className="material-symbols-rounded"
                aria-hidden="true">
                    {icon}
                </span>
                : undefined
             }

        </button>
    )
  }
}

ButtonOutline.PropTypes={
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}

export {
    ButtonPrimary,
    ButtonOutline
}
