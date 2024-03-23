import { Box } from '@mui/material';
import React, { useState } from 'react'
import {Colors} from 'assets';
import { AgGridReact } from 'ag-grid-react';
import { columnDefs } from './col';

type Props = {
    data?: any
}

const CPODetails = ({dataCPODetails}: any) => {
    // console.log('bao dataCPODetails: ', dataCPODetails);
    const rowData = dataCPODetails?.CPOLineDetailJson?.map((item: any) => ({
        ...item,
        LineNumber: dataCPODetails.LineNumber,
        CustStyleNum: dataCPODetails.CustStyleNum,
        POStatus: dataCPODetails.POStatus,
        CPONumber: dataCPODetails.CPONumber,
        CPODate: dataCPODetails.CPODate,
        FactoryName: dataCPODetails.FactoryName,
    }))
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
                rowData={rowData}
                columnDefs={columnDefs}
                
            />
        </div>
    </>
  )
}

export default CPODetails