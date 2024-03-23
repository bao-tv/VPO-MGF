import { useMemo } from 'react';
import { ColDef } from 'ag-grid-community';

export const columnDefs: ColDef[] = [
    {
      headerName: 'Line',
      field: 'LineNumber', // Transfer status
      width: 200,
      filter: false,
      editable: false,
      cellStyle: {
        padding: '0 8px !important', textAlign: 'left', borderRight: '1px solid #dde2eb',
      },
    },
    {
      headerName: 'Status',
      field: 'POLineStatus', // Transfer status
      width: 200,
      filter: false,
      editable: false,
      cellStyle: {
        padding: '0 8px !important', textAlign: 'left', borderRight: '1px solid #dde2eb',
      },
    },
    {
      headerName: 'Customer Style No',
      field: 'CustStyleNum', // Transfer status
      width: 100,
      filter: false,
      editable: false,
      cellStyle: {
        padding: '0px 20px !important', textAlign: 'right', borderRight: '1px solid #dde2eb',
      },
    },
    {
        headerName: 'Internal Style No',
        field: '', // Transfer status
        width: 100,
        filter: false,
        editable: true,
        cellStyle: {
          padding: '0px 20px !important', textAlign: 'right', borderRight: '1px solid #dde2eb',
        },
    },
    {
        headerName: 'Description',
        field: 'ItemDescription', // Transfer status
        width: 100,
        filter: false,
        editable: true,
        cellStyle: {
          padding: '0px 20px !important', textAlign: 'right', borderRight: '1px solid #dde2eb',
        },
    },
    {
        headerName: 'Size Range',
        field: '', // Transfer status
        width: 100,
        filter: false,
        editable: true,
        cellStyle: {
          padding: '0px 20px !important', textAlign: 'right', borderRight: '1px solid #dde2eb',
        },
    },
    {
        headerName: 'VPO Colorway',
        field: 'VPOColorway', // Transfer status
        width: 100,
        filter: false,
        editable: true,
        cellStyle: {
          padding: '0px 20px !important', textAlign: 'right', borderRight: '1px solid #dde2eb',
        },
    },
    {
        headerName: 'CPO Number',
        field: 'CPONumber', // Transfer status
        width: 100,
        filter: false,
        editable: true,
        cellStyle: {
          padding: '0px 20px !important', textAlign: 'right', borderRight: '1px solid #dde2eb',
        },
    },
    {
        headerName: 'Original Quantity',
        field: 'FinalQty', // Transfer status
        width: 100,
        filter: false,
        editable: true,
        cellStyle: {
          padding: '0px 20px !important', textAlign: 'right', borderRight: '1px solid #dde2eb',
        },
    },
    {
        headerName: 'Final Quantity',
        field: 'FinalQty', // Transfer status
        width: 100,
        filter: false,
        editable: true,
        cellStyle: {
          padding: '0px 20px !important', textAlign: 'right', borderRight: '1px solid #dde2eb',
        },
    },
    {
        headerName: 'OM',
        field: 'FinalQtyUOM', // Transfer status
        width: 100,
        filter: false,
        editable: true,
        cellStyle: {
          padding: '0px 20px !important', textAlign: 'right', borderRight: '1px solid #dde2eb',
        },
    },
    {
        headerName: 'FOB',
        field: 'FOBPrice', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
          padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
        },
    },
    {
        headerName: 'Cur',
        field: 'FOBCur', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
            padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
            },
    },
    {
        headerName: 'Extended',
        field: '', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
            padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
            },
    },
    {
        headerName: 'Middleman %',
        field: '', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
            padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
            },
    },
    {
        headerName: 'Middleman Amt',
        field: '', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
            padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
            },
    },
    {
        headerName: 'FSFE Cost Amt',
        field: '', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
            padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
            },
    },
    {
        headerName: 'Factory Shipping Terms',
        field: 'FactoryDeliveryTerms', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
            padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
            },
    },
    {
        headerName: 'Customer Shipping Terms',
        field: 'CustDeliveryTerms', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
            padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
            },
    },
    {
        headerName: 'Garment Weight',
        field: '', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
            padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
            },
    },
    {
        headerName: 'Gross Weight',
        field: 'GrossWeight', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
            padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
            },
    },
    {
        headerName: 'UM',
        field: 'GrossWeightUOM', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
            padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
            },
    },
    {
        headerName: 'Hts No',
        field: '', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
            padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
            },
    },
    {
        headerName: 'Trans Mode',
        field: 'TransportationMode', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
            padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
            },
    },
    {
        headerName: 'Mode Qlf',
        field: 'ModeQlf', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
            padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
            },
    },
    {
        headerName: 'Port of Origin',
        field: 'PortOfOrigin', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
            padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
            },
    },
    {
        headerName: 'Customer Ship To',
        field: 'CustShipTo', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
            padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
            },
    },
    {
        headerName: 'Factory GAC',
        field: 'FactoryGACDate', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
            padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
            },
    },
    {
        headerName: 'Plan ID',
        field: '', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
            padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
            },
    },
    {
        headerName: 'Request Number',
        field: 'RequestNumber', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
            padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
            },
    },
    {
        headerName: 'Offer Number',
        field: '', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
            padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
            },
    },
    {
        headerName: 'Dept',
        field: 'Department', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
            padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
            },
    },
    {
        headerName: 'VCI Qty Received',
        field: '', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
            padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
            },
    },
    {
        headerName: 'AX Qty Received',
        field: '', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
            padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
            },
    },
    {
        headerName: 'Customer AX ID',
        field: '', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
            padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
            },
    },
    {
        headerName: 'Comments',
        field: '', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
            padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
            },
    },
    {
        headerName: 'Gender',
        field: '', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
            padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
            },
    },
    {
        headerName: 'Product Type',
        field: 'Class', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
            padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
            },
    },
    {
        headerName: 'Material Category',
        field: '', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
            padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
            },
    },
    {
        headerName: 'Subclass',
        field: '', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
            padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
            },
    },
    {
        headerName: 'Chief Value Material',
        field: '', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
            padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
            },
    },
    {
        headerName: 'Class',
        field: '', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
            padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
            },
    },
    {
        headerName: 'Row No',
        field: 'RowNumber', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
            padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
            },
    },
    {
        headerName: 'Season',
        field: 'Season', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
            padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
            },
    },
    {
        headerName: 'Ship-to Country',
        field: 'LSPPurchaseLinesAddresses[0].Country', // Transfer status
        width: 120,
        filter: false,
        editable: false,
        cellStyle: {
            padding: '0 8px !important', textAlign: 'center', borderRight: '1px solid #dde2eb',
            },
    },
  ]