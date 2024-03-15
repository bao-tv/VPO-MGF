import { Box } from '@mui/material';
import React, { useState } from 'react'
import {Colors} from 'assets';
import { AgGridReact } from 'ag-grid-react';
import { columnDefs } from './col';

type Props = {
    data?: any
}

const CPODetails = (props: Props) => {
    console.log('bao data: ', props?.data.LSPPurchaseLines.LSPPurchaseLine);
    // const [rowData, setRowData] = useState<any>([]);
    const cloneRowData = props?.data.LSPPurchaseLines.LSPPurchaseLine.CPOLineDetails.CPOLineDetail.map((item: any) => {
        // console.log('bao item: ', item);
        return ({
            ...item,
            index: +item.CPORowNum['#text'] + 1,
            POLineStatus: props?.data.LSPPurchaseLines.LSPPurchaseLine.POLineStatus['#text'],
            CPODate: props?.data.LSPPurchaseLines.LSPPurchaseLine.CPODate['#text'],
        })
    })
    // setRowData(cloneRowData);
  return (
    <>
        <Box sx={{backgroundColor: Colors.backGroundGroup, padding: 0}}>
            CPO Details
        </Box>
        <div
            className="ag-theme-quartz"
            style={{
                width: '100%',
                height: 'calc(100vh - 164px)',
                boxSizing: 'border-box',
                marginTop: '10px',
            }}
            id="myGrid"
        >
            <AgGridReact
                defaultColDef={{
                    filter: true,
                    sortable: true,
                    resizable: true,
                    editable: true,
                    menuTabs: [],
                    headerComponentParams: { menuIcon: 'fa-bars' },
                }}
                animateRows={true}
                suppressPaginationPanel={true}
                singleClickEdit={true}
                rowData={cloneRowData}
                columnDefs={columnDefs}
                
            />
        </div>
    </>
  )
}

export default CPODetails