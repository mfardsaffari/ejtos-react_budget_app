import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaPlusCircle, FaTimesCircle, FaDotCircle } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch, Currency} = useContext(AppContext);

    const handleDeleteItem = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'DELETE_ITEM',
            payload: item,
        });
    };

    const handleIncreaseBoudget = () => {
        
    };

    const handleDecreaseBoudget = () => {
        
    };


    return (
        <tr>
        <td>{props.name}</td>
        <td>{Currency}{parseInt(props.budget)}</td>
        <td><FaPlusCircle size='2.2em' color="green" onClick={handleIncreaseBoudget}></FaPlusCircle></td>
        <td><FaDotCircle size='2.2em' color="red" onClick={handleDecreaseBoudget}></FaDotCircle></td>
        <td><FaTimesCircle size='2.2em' color="black" onClick={handleDeleteItem}></FaTimesCircle></td>
        </tr>
    );
};

export default ExpenseItem;