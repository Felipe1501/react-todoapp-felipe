import React from "react";
import Grid from "../template/grid";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import IconButton from "../template/iconButton";

import { changeDescription } from "./todoActions";

const todoForm = props => {
    const keyHandler = (e) => {
        if(e.key === 'Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape'){
            props.handleClear()
        }
    }

   return (
        <div role='form' className='todoForm'>
    
    
                <Grid cols='12 9 10'>
                        <input 
                        id="description" 
                        className="form-control"
                        placeholder="adicione uma tarefa"
                        onChange={props.changeDescription}
                        onKeyUp={keyHandler}
                        value={props.description} 
                        />
                </Grid>
    
                <Grid cols='12 3 2'>
                    <IconButton 
                        style='primary' 
                        icon='plus' 
                        onCLick={props.handleAdd}
                    />
                    <IconButton 
                        style='info' 
                        icon='search' 
                        onCLick={props.handleSearch}
                    />
                    <IconButton 
                        style='default' 
                        icon='close' 
                        onCLick={props.handleClear}
                    />
                </Grid>
        </div>
    )
}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => 
    bindActionCreators({changeDescription}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(todoForm)