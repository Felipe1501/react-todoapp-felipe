import React, {Component} from "react";
import Grid from "../template/grid";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import IconButton from "../template/iconButton";

import { changeDescription, search } from "./todoActions";

class TodoForm extends Component {
    constructor(props){
        super(props);
        this.keyHandler = this.keyHandler.bind(this);
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler = (e) => {
        if(e.key === 'Enter'){
            e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
        } else if (e.key === 'Escape'){
            props.handleClear()
        }
    }

    render(){
        return (
            <div role='form' className='todoForm'>
    
    
            <Grid cols='12 9 10'>
                    <input 
                    id="description" 
                    className="form-control"
                    placeholder="adicione uma tarefa"
                    onChange={this.props.changeDescription}
                    onKeyUp={this.keyHandler}
                    value={this.props.description} 
                    />
            </Grid>

            <Grid cols='12 3 2'>
                <IconButton 
                    style='primary' 
                    icon='plus' 
                    onCLick={this.props.handleAdd}
                />
                <IconButton 
                    style='info' 
                    icon='search' 
                    onCLick={this.props.handleSearch}
                />
                <IconButton 
                    style='default' 
                    icon='close' 
                    onCLick={this.props.handleClear}
                />
            </Grid>
    </div>
        )
    }
}



const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => 
    bindActionCreators({changeDescription, search}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(todoForm)