import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import { Collapse } from "react-bootstrap";
export default function Sidebar() {
    const [open, setOpen] = useState(false);
    
    return (
      <>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          className="sidebar-btn"
        >
          click <i className="fas fa-angle-right arrow"></i>
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </Collapse>
      </>
    );
}