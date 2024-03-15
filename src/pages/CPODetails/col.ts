import { useMemo } from 'react';
import { ColDef } from 'ag-grid-community';

export const columnDefs: ColDef[] = [
    {
      headerName: 'VPO Line Number',
      field: 'index', // Transfer status
      width: 200,
      filter: false,
      editable: false,
      cellStyle: {
        padding: '0 8px !important', textAlign: 'left', borderRight: '1px solid #dde2eb',
      },
    },
    {
      headerName: 'Customer Style No',
      field: 'index', // Transfer status
      width: 200,
      filter: false,
      editable: false,
      cellStyle: {
        padding: '0 8px !important', textAlign: 'left', borderRight: '1px solid #dde2eb',
      },
    },
    {
      headerName: 'Customer Item No',
      field: 'CustItemId.#text', // Transfer status
      width: 100,
      filter: false,
      editable: false,
      cellStyle: {
        padding: '0px 20px !important', textAlign: 'right', borderRight: '1px solid #dde2eb',
      },
    },
    {
        headerName: 'Assignment Status',
        field: 'POLineStatus', // Transfer status
        width: 100,
        filter: false,
        editable: true,
        cellStyle: {
          padding: '0px 20px !important', textAlign: 'right', borderRight: '1px solid #dde2eb',
        },
    },
    {
        headerName: 'CPO No',
        field: 'description', // Transfer status
        width: 100,
        filter: false,
        editable: true,
        cellStyle: {
          padding: '0px 20px !important', textAlign: 'right', borderRight: '1px solid #dde2eb',
        },
    },
    {
        headerName: 'Customer Item Description',
        field: 'CustDescr.#text', // Transfer status
        width: 100,
        filter: false,
        editable: true,
        cellStyle: {
          padding: '0px 20px !important', textAlign: 'right', borderRight: '1px solid #dde2eb',
        },
    },
    {
        headerName: 'VPO Colorway',
        field: 'ColorDescription.#text', // Transfer status
        width: 100,
        filter: false,
        editable: true,
        cellStyle: {
          padding: '0px 20px !important', textAlign: 'right', borderRight: '1px solid #dde2eb',
        },
    },
    {
        headerName: 'Customer Color Code',
        field: 'TSColorCode.#text', // Transfer status
        width: 100,
        filter: false,
        editable: true,
        cellStyle: {
          padding: '0px 20px !important', textAlign: 'right', borderRight: '1px solid #dde2eb',
        },
    },
    {
        headerName: 'Customer Color Description',
        field: 'ColorDescription.#text', // Transfer status
        width: 100,
        filter: false,
        editable: true,
        cellStyle: {
          padding: '0px 20px !important', textAlign: 'right', borderRight: '1px solid #dde2eb',
        },
    },
    {
        headerName: 'Customer Size Code',
        field: 'SizeCode.#text', // Transfer status
        width: 100,
        filter: false,
        editable: true,
        cellStyle: {
          padding: '0px 20px !important', textAlign: 'right', borderRight: '1px solid #dde2eb',
        },
    },
    {
        headerName: 'Customer Size Description',
        field: 'SizeDescription.#text', // Transfer status
        width: 100,
        filter: false,
        editable: true,
        cellStyle: {
          padding: '0px 20px !important', textAlign: 'right', borderRight: '1px solid #dde2eb',
        },
    },
    {
        headerName: 'Assigned Quanity',
        field: 'CPOQty.#text', // Transfer status
        width: 100,
        filter: false,
        editable: true,
        cellStyle: {
          padding: '0px 20px !important', textAlign: 'right', borderRight: '1px solid #dde2eb',
        },
    },
    {
        headerName: 'CPO Date',
        field: 'CPODate', // Transfer status
        width: 40,
        filter: false,
        editable: false,
        cellStyle: {
          padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
        },
      },
  ]