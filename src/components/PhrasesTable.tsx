
import * as React from 'react';

type PhrasesTableProps = {
    headings: string[];
    rows: [number,string][];
    buttonclose: (id: number) => void;
};

class DataTable extends React.Component <PhrasesTableProps, {}> {

    renderHeadingRow = (_cell: any, cellIndex: number) => {
        const {headings, rows, buttonclose} = this.props;

        return (
            <th>{headings[cellIndex]}</th>
        )
    };
  
    renderRow = (_row: any, rowIndex: number) => {
        const {headings, rows, buttonclose} = this.props;

        return (
            <tr key={`row-${rowIndex}`}>
            {rows[rowIndex].map((_cell: any, cellIndex: number) => {
                return (
                    <td>{rows[rowIndex][cellIndex]}</td>
                )
            })}
            <td><button>dELETE</button></td>
            </tr>
        )
    };

    render() {
        const {headings, rows, buttonclose} = this.props;

        this.renderHeadingRow = this.renderHeadingRow.bind(this);
        this.renderRow = this.renderRow.bind(this);
    
        const theadMarkup = (
            <tr key="heading">
            {headings.map(this.renderHeadingRow)}
            </tr>
        );

        const tbodyMarkup = rows.map(this.renderRow, this);
  
        return (
            <table>
                <thead>{theadMarkup}</thead>
                <tbody>{tbodyMarkup}</tbody>
            </table>
        );
    }
}

export default DataTable;
