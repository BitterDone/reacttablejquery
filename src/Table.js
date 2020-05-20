import '../../node_modules/datatables.net-dt/css/jquery.dataTables.css'
import React, {Component} from 'react'

var $       = require( 'jquery' );
var dt      = require( 'datatables.net' );

export class Table extends Component {
    componentDidMount() {
        this.$el = $(this.el)
        this.$el.DataTable({
            data: this.props.data,
            columns: this.props.columns,
            lengthMenu: [[-1], ["All"]],
            scrollY:        '75vh',
            scrollCollapse: true,
        })
    }

    updateTableData(data) {
        this.$el.dataTable().api().clear();
        this.$el.dataTable().api().rows.add(data);
        this.$el.dataTable().api().draw();
    }

    render() {
        if(this.$el) {
            this.updateTableData(this.props.data)
        }
        return (
            <div style={this.props.style}>
                <table className="display" width="100%" ref = {el => this.el = el }></table>

            </div>
        );
    }
}
