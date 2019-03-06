import * as React from "react";

import Modal from "./AddPhrase";
//import DataTable from "./DataTable"; //use this: <DataTable headings={this.headings} rows={this.rows} />
import Cell from "./Cell";
//import PhrasesTable from "./PhrasesTable";

import './Phrases.css';

// 'PhrasesProps' describes the shape of props.
// State is never set so we use the '{}' type.

class Phrases extends React.Component {

    state = { show: false , count: 2 as number, phrase : undefined as (string|undefined)};

    headings : string[] = ["id","phrase"];
    rows : [number, string, any][] = [
        [1,"line number 1", undefined],
        [2,"this is line 2", undefined]];

    handleCheck = (e: any) => {
        alert(e.target.id);
    }

    removeRow = (e: any) => {
        this.rows.splice(Number(e.target.id),1);
        //e.target.parentElement.parentElement.load(); //does not work
        this.forceUpdate();
    }

    showModal = () => {
        this.setState({ show: true, phrase: "" });
    }

    hideModal = (e: any) => {
        //alert(e.target.id+" -> "+e.target.value);
        if(e.target.id=="addButton") {
            this.state.count += 1;
            this.rows.push([this.state.count,this.state.phrase,undefined]);
        }
        this.setState({ show: false, phrase: undefined });
    }

    render() {
        return (
            <main className='phrases'>
                <h1>Phrases</h1>
                <h2>Table of Phrases</h2>
                { this.rows.length == 0 ? (<h3>No Phrases</h3>) :
                    (<table className='phrases-table'>
                        <tr>
                            <th>Id</th>
                            <th>Phrase</th>
                            <th></th>
                        </tr>

                        {this.rows.map((_cell: any, rowIndex: number) => {
                            return (
                                <tr key={`row-${rowIndex}`}>
                                    <td>{this.rows[rowIndex][0]}</td>
                                    <td>{this.rows[rowIndex][1]}</td>
                                    <td>
                                        <button id={`${rowIndex}`} key={`but-${rowIndex}`}
                                                onClick={this.removeRow}>DELETE
                                        </button>
                                    </td>
                                </tr>
                            )
                        }, this)}
                    </table>)
                }
                <div>&nbsp;</div>
                <button className='phrases-button' type='button' onClick={this.showModal}>Add Phrase</button>

                <Modal show={this.state.show} handleClose={this.hideModal} >
                    <h2>Enter a new phrase and click on the add button</h2>
                    <input type="text" value={this.state.phrase}
                           onChange={ e => this.setState({phrase: e.target.value}) }/>
                </Modal>
            </main>
        )
    }
}

export default Phrases;
