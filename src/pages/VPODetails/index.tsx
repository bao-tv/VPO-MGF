import { Box } from '@mui/material';
import React, { useState } from 'react'
import {Colors} from 'assets';
import { AgGridReact } from 'ag-grid-react';
import { columnDefs } from './col';

function MyComponent({dataVPODetails}: any) {
    console.log('bao dataVPODetails: ', dataVPODetails);
    // Function to convert XML to JSON

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
                rowData={dataVPODetails}
                columnDefs={columnDefs}
                
            />
        </div>
    </>
    );
}

export default MyComponent;
