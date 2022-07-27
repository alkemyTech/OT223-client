import React from 'react';
import DataTable from 'react-data-table-component';

function Table({
  columns, data
}) {

  const customStyles = {
  	headCells: {
      style: {
        color: '#000',
        fontSize: '18px',
      },
    },
    rows: {
      highlightOnHoverStyle: {
        backgroundColor: 'rgb(83, 96, 99)',
        borderBottomColor: '#FFFFFF',
        borderRadius: '25px',
        outline: '1px solid #FFFFFF',
      },
    },
  };

  const paginationComponentOptions = {
  	rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
  };

  return (
    <DataTable
      columns={columns}
      data={data}
      customStyles={customStyles}
      pagination
      paginationComponentOptions={paginationComponentOptions}
    />
  )
}

export default Table;