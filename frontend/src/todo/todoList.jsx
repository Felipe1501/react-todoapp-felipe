import React from "react";
import { connect } from "react-redux";
import IconButton from "../template/iconButton";
import { bindActionCreators } from "redux";
import { markAsDone, markAsPending, remove } from "./todoActions";


const todoList = props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton 
                        style='sucess'
                        hide={todo.done} 
                        icon='check'
                        onCLick={() => props.markAsDone(todo)}
                    />
                    <IconButton 
                        style='warning' 
                        icon='undo'
                        hide={!todo.done}
                        onCLick={() => props.markAsPending(todo)}
                    />
                    <IconButton 
                        style='danger' 
                        icon='trash-o'
                        hide={!todo.done}
                        onCLick={() => props.remove(todo)}
                    />
                </td>
            </tr>
        ))
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="tableActions">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapDispatchToProps = dispatch => 
      bindActionCreators({markAsDone, markAsPending, remove}, dispatch)

const mapStateToProps = state => ({list: state.todo.list})

export default connect(mapStateToProps, mapDispatchToProps)(todoList)