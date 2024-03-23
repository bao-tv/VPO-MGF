import { useMemo } from 'react';
import { ColDef } from 'ag-grid-community';

export const columnDefs: ColDef[] = [
    {
      headerName: 'VPO Line Number',
      field: 'LineNumber', // Transfer status
      width: 120,
      filter: false,
      editable: false,
      cellStyle: {
        padding: '0 8px !important', textAlign: 'left', borderRight: '1px solid #dde2eb',
      },
    },
    {
      headerName: 'Customer Style Nox',
      field: 'CustStyleNum', // Transfer status
      width: 120,
      filter: false,
      editable: false,
      cellStyle: {
        padding: '0 8px !important', textAlign: 'left', borderRight: '1px solid #dde2eb',
      },
    },
    {
      headerName: 'Customer Item No',
      field: 'CustItemId',
      width: 150,
      filter: false,
      editable: false,
      cellStyle: {
        padding: '0px 20px !important', textAlign: 'right', borderRight: '1px solid #dde2eb',
      },
    },
    {
        headerName: 'Assignment Status',
        field: 'POStatus', // Transfer status
        width: 100,
        filter: false,
        editable: true,
        cellStyle: {
          padding: '0px 20px !important', textAlign: 'right', borderRight: '1px solid #dde2eb',
        },
    },
    {
        headerName: 'CPO No',
        field: 'CPONumber', // Transfer status
        width: 100,
        filter: false,
        editable: true,
        cellStyle: {
          padding: '0px 20px !important', textAlign: 'right', borderRight: '1px solid #dde2eb',
        },
    },
    {
        headerName: 'Customer Item Description',
        field: 'CustDescr', // Transfer status
        width: 100,
        filter: false,
        editable: true,
        cellStyle: {
          padding: '0px 20px !important', textAlign: 'right', borderRight: '1px solid #dde2eb',
        },
    },
    {
        headerName: 'VPO Colorway',
        field: 'ColorDescription', // Transfer status
        width: 100,
        filter: false,
        editable: true,
        cellStyle: {
          padding: '0px 20px !important', textAlign: 'right', borderRight: '1px solid #dde2eb',
        },
    },
    {
        headerName: 'Customer Color Code',
        field: 'CustColorCode', // Transfer status
        width: 100,
        filter: false,
        editable: true,
        cellStyle: {
          padding: '0px 20px !important', textAlign: 'right', borderRight: '1px solid #dde2eb',
        },
    },
    {
        headerName: 'Customer Color Description',
        field: 'ColorDescription', // Transfer status
        width: 100,
        filter: false,
        editable: true,
        cellStyle: {
          padding: '0px 20px !important', textAlign: 'right', borderRight: '1px solid #dde2eb',
        },
    },
    {
        headerName: 'Customer Size Code',
        field: 'SizeCode', // Transfer status
        width: 100,
        filter: false,
        editable: true,
        cellStyle: {
          padding: '0px 20px !important', textAlign: 'right', borderRight: '1px solid #dde2eb',
        },
    },
    {
        headerName: 'Customer Size Description',
        field: 'SizeDescription', // Transfer status
        width: 100,
        filter: false,
        editable: true,
        cellStyle: {
          padding: '0px 20px !important', textAlign: 'right', borderRight: '1px solid #dde2eb',
        },
    },
    {
        headerName: 'Assigned Quanity',
        field: 'CPOQty', // Transfer status
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
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
          padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
        },
      },
      {
        headerName: 'CPO Status',
        field: '', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
          padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
        },
      },
      {
        headerName: 'Factory',
        field: 'FactoryName', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
          padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
        },
      },
      {
        headerName: 'Customer Ship To Address',
        field: '', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
          padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
        },
      },
      {
        headerName: 'Vender Address',
        field: '', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
          padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
        },
      },
      {
        headerName: 'Factory Address',
        field: '', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
          padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
        },
      },
      {
        headerName: 'Order Dates',
        field: '', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
          padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
        },
      },
      {
        headerName: 'Customer SKU No',
        field: 'CustSKU', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
          padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
        },
      },
      {
        headerName: 'Customer Class',
        field: '', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
          padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
        },
      },
      {
        headerName: 'Prepack',
        field: '', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
          padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
        },
      },
      {
        headerName: 'Prepack SKU',
        field: '', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
          padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
        },
      },
      {
        headerName: 'Ship Pack',
        field: '', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
          padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
        },
      },
      {
        headerName: 'Pack Type',
        field: 'PackType', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
          padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
        },
      },
      {
        headerName: 'Pack Ratio',
        field: 'PackRatio', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
          padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
        },
      },
      {
        headerName: 'Pack Instructions',
        field: '', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
          padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
        },
      },
      {
        headerName: 'Item Instructions',
        field: '', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
          padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
        },
      },
      {
        headerName: 'CPO Open Qty',
        field: '', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
          padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
        },
      },
      {
        headerName: 'VPO ATP Qty',
        field: '', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
          padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
        },
      },
  ]