import {DataGrid, GridColDef, GridPaginationModel, GridRowParams} from '@mui/x-data-grid';
import React from 'react';

type TColumns = GridColDef;
interface ITableProps {
  /**
   * The data of the table
   * @default []
   */
  data: any[];
  /**
   * The columns of the table
   * @default []
   */
  columns: TColumns[];
  /**
   * A function that will be called when a row is clicked
   * @param rowData
   * @returns a data object from the row
   */
  onRowClick?: (rowData: any) => void;

  props?: any;
}

const Table = ({columns = [], data = [], onRowClick = () => null, ...props}: ITableProps) => {
  // Function that will be called when a row is clicked
  const handleRowClick = (rowData: GridRowParams<any>) => {
    onRowClick(rowData.row);
  };
  // State for the pagination
  const [pageSizeOptions] = React.useState([10, 25, 50]);
  const [paginationModel, setPaginationModel] = React.useState<GridPaginationModel>({page: 1, pageSize: 10});

  // Function that will be called when the page size is changed
  const handlePaginationChange = (event: GridPaginationModel) => {
    setPaginationModel(event);
  };

  // Component from the Material-UI DataGrid
  return (
    <DataGrid
      pagination
      rows={data}
      columns={columns.map(column => ({
        ...column,
        headerAlign: 'left',
        renderHeader: () => <div style={{fontWeight: 900}}>{column.headerName}</div>,
      }))}
      rowSelection={false}
      onRowClick={handleRowClick}
      pageSizeOptions={pageSizeOptions}
      paginationModel={paginationModel}
      onPaginationModelChange={handlePaginationChange}
      {...props}
    />
  );
};

export default Table;
