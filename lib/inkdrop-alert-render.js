'use babel';
import { getAlert, getBackground, getTitleColor, getIcon } from "./inkdrop-alert-map";
import { useState, useEffect } from "react"

export default function createCardAlert(OrigDiv) {
    return function cardAlert(props) {
      const { children } = props;
      const [label] = children instanceof Array ? children : [];
      const [nameAlert, setNameAlert] = useState([])
      const [bodyAlert, setBodyAlert] = useState([])
      
      useEffect(()=>{
        const data = label.toString().split(/\r\n|\r|\n/,-1)
        setNameAlert(getAlert(data[0]))
        const [, ...rest] = data;
        setBodyAlert(rest.join("\n"))
      }, [label])
    
      if (
        (typeof label === "string" && nameAlert !== undefined)
      ) {
        return (
        <div class="alert-container" style={{background : getBackground(nameAlert)}}>
            <div className="title-container" style={{color : getTitleColor(nameAlert)}}>
                <p className="icon">{getIcon(nameAlert)}</p>
                <p >{ nameAlert }</p>
            </div>            
            <div className="alert-content">{bodyAlert}</div>
        </div>
        );
      }
  
      if (OrigDiv) {
        return <OrigDiv {...props}>{children}</OrigDiv>;
      } else {
        return <p {...props}>{children}</p>;
      }
    };
  }
