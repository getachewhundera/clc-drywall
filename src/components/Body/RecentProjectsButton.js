import React from "react"; 
import PropTypes from "prop-types";
import { Button, withStyles } from "@material-ui/core"; 


const styles = () => ({

})


const RecentProjectsButton = ( { color, children }) => {
    return (
        <Button variant="contained" color={color} disabledElevation> 
        {children}
        </Button> 
    );
}; 

RecentProjectsButton.PropTypes = { 
    color: PropTypes.string
}; 

export default withStyles(styles)(RecentProjectsButton); 


