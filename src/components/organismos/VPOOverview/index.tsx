import { Box, FormControl, Paper, TextField } from '@mui/material'
import React from 'react'
import {
    makeStyles, createStyles, styled,
} from '@mui/styles';
import { Controller, useForm } from 'react-hook-form';
import {Colors} from 'assets';

const useStyles = makeStyles((theme: any) => createStyles({
    root: {
        flexGrow: 1,
    },
    cssBoxPaper: {
        display: 'flex',
        flexDirection: 'row',
        gap: '1rem',
    },
    styleTitle: {
        margin: '0px 0px 0.35em'
    }
}));

export default function VPOOverview() {
    const classes = useStyles();
    const gridForm = useForm<any>({
        // resolver: yupResolver(validateSchemaForm),
        mode: 'all',
        defaultValues: {
        },
        shouldUnregister: false,
    });
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
            }}
        >
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '1rem',
            }}>
                <Box
                    sx={{
                        background: Colors.backGroundGroup,
                        borderRadius: '10px',
                        border: `1px solid ${Colors.borderColor}`,
                        flex: '2',
                        padding: '0.5rem',
                    }}
                >
                    <h4 className={classes.styleTitle}>Order ID</h4>
                    <Box
                        component={Paper}
                        sx={{
                            boxShadow: 'none',
                            borderRadius: '10px',
                            padding: '10px',
                            background: 'white',
                            border: `1px solid ${Colors.borderColor}`,
                            overflow: 'auto',
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr 1fr 1fr',
                            gap: '1rem',
                        }}
                    >
                        <FormControl
                            size="small"
                        >
                            <Controller
                                name="createDate"
                                control={gridForm.control}
                                render={({ ...rest }) => (
                                    <TextField
                                        size="small"
                                        id="outlined-basic"
                                        {...rest}
                                        fullWidth={true}
                                        variant="filled"
                                        inputProps={{
                                            'aria-label': 'Search',
                                            // style: {
                                            //   '-webkit-text-fill-color': 'inherit',
                                            // } as any,
                                        }}
                                        label="System Order No"
                                    />
                                )}
                            />
                        </FormControl>
                        <FormControl
                            size="small"
                        >
                            <Controller
                                name="createDate"
                                control={gridForm.control}
                                render={({ ...rest }) => (
                                    <TextField
                                        size="small"
                                        id="outlined-basic"
                                        {...rest}
                                        fullWidth={true}
                                        variant="filled"
                                        inputProps={{
                                            'aria-label': 'Search',
                                            // style: {
                                            //   '-webkit-text-fill-color': 'inherit',
                                            // } as any,
                                        }}
                                        label="VPO Number"
                                    />
                                )}
                            />
                        </FormControl>
                        <FormControl
                            size="small"
                        >
                            <Controller
                                name="createDate"
                                control={gridForm.control}
                                render={({ ...rest }) => (
                                    <TextField
                                        size="small"
                                        id="outlined-basic"
                                        {...rest}
                                        fullWidth={true}
                                        variant="filled"
                                        inputProps={{
                                            'aria-label': 'Search',
                                            // style: {
                                            //   '-webkit-text-fill-color': 'inherit',
                                            // } as any,
                                        }}
                                        label="Order Commit No"
                                    />
                                )}
                            />
                        </FormControl>
                        <FormControl
                            size="small"
                        >
                            <Controller
                                name="createDate"
                                control={gridForm.control}
                                render={({ ...rest }) => (
                                    <TextField
                                        size="small"
                                        id="outlined-basic"
                                        {...rest}
                                        fullWidth={true}
                                        variant="filled"
                                        inputProps={{
                                            'aria-label': 'Search',
                                            // style: {
                                            //   '-webkit-text-fill-color': 'inherit',
                                            // } as any,
                                        }}
                                        label="Production Office"
                                    />
                                )}
                            />
                        </FormControl>
                        {/**BLOCK 2 */}
                        <FormControl
                            size="small"
                        >
                            <Controller
                                name="createDate"
                                control={gridForm.control}
                                render={({ ...rest }) => (
                                    <TextField
                                        size="small"
                                        id="outlined-basic"
                                        {...rest}
                                        fullWidth={true}
                                        variant="filled"
                                        inputProps={{
                                            'aria-label': 'Search',
                                            // style: {
                                            //   '-webkit-text-fill-color': 'inherit',
                                            // } as any,
                                        }}
                                        label="Entity"
                                    />
                                )}
                            />
                        </FormControl>
                        <FormControl
                            size="small"
                        >
                            <Controller
                                name="createDate"
                                control={gridForm.control}
                                render={({ ...rest }) => (
                                    <TextField
                                        size="small"
                                        id="outlined-basic"
                                        {...rest}
                                        fullWidth={true}
                                        variant="filled"
                                        inputProps={{
                                            'aria-label': 'Search',
                                            // style: {
                                            //   '-webkit-text-fill-color': 'inherit',
                                            // } as any,
                                        }}
                                        label="Status"
                                    />
                                )}
                            />
                        </FormControl>
                        <FormControl
                            size="small"
                        >
                            <Controller
                                name="createDate"
                                control={gridForm.control}
                                render={({ ...rest }) => (
                                    <TextField
                                        size="small"
                                        id="outlined-basic"
                                        {...rest}
                                        fullWidth={true}
                                        variant="filled"
                                        inputProps={{
                                            'aria-label': 'Search',
                                            // style: {
                                            //   '-webkit-text-fill-color': 'inherit',
                                            // } as any,
                                        }}
                                        label="Vendor Acknowledged"
                                    />
                                )}
                            />
                        </FormControl>
                        <FormControl
                            size="small"
                        >
                            <Controller
                                name="createDate"
                                control={gridForm.control}
                                render={({ ...rest }) => (
                                    <TextField
                                        size="small"
                                        id="outlined-basic"
                                        {...rest}
                                        fullWidth={true}
                                        variant="filled"
                                        inputProps={{
                                            'aria-label': 'Search',
                                            // style: {
                                            //   '-webkit-text-fill-color': 'inherit',
                                            // } as any,
                                        }}
                                        label="Create Date"
                                    />
                                )}
                            />
                        </FormControl>
                        {/**BLOCK 3 */}
                        <FormControl
                            size="small"
                        >
                            <Controller
                                name="createDate"
                                control={gridForm.control}
                                render={({ ...rest }) => (
                                    <TextField
                                        size="small"
                                        id="outlined-basic"
                                        {...rest}
                                        fullWidth={true}
                                        variant="filled"
                                        inputProps={{
                                            'aria-label': 'Search',
                                            // style: {
                                            //   '-webkit-text-fill-color': 'inherit',
                                            // } as any,
                                        }}
                                        label="Created By"
                                    />
                                )}
                            />
                        </FormControl>
                        <FormControl
                            size="small"
                        >
                            <Controller
                                name="createDate"
                                control={gridForm.control}
                                render={({ ...rest }) => (
                                    <TextField
                                        size="small"
                                        id="outlined-basic"
                                        {...rest}
                                        fullWidth={true}
                                        variant="filled"
                                        inputProps={{
                                            'aria-label': 'Search',
                                            // style: {
                                            //   '-webkit-text-fill-color': 'inherit',
                                            // } as any,
                                        }}
                                        label="Modify Date"
                                    />
                                )}
                            />
                        </FormControl>
                        <FormControl
                            size="small"
                        >
                            <Controller
                                name="createDate"
                                control={gridForm.control}
                                render={({ ...rest }) => (
                                    <TextField
                                        size="small"
                                        id="outlined-basic"
                                        {...rest}
                                        fullWidth={true}
                                        variant="filled"
                                        inputProps={{
                                            'aria-label': 'Search',
                                            // style: {
                                            //   '-webkit-text-fill-color': 'inherit',
                                            // } as any,
                                        }}
                                        label="Modifed By"
                                    />
                                )}
                            />
                        </FormControl>
                        <FormControl
                            size="small"
                        >
                            <Controller
                                name="createDate"
                                control={gridForm.control}
                                render={({ ...rest }) => (
                                    <TextField
                                        size="small"
                                        id="outlined-basic"
                                        {...rest}
                                        fullWidth={true}
                                        variant="filled"
                                        inputProps={{
                                            'aria-label': 'Search',
                                            // style: {
                                            //   '-webkit-text-fill-color': 'inherit',
                                            // } as any,
                                        }}
                                        label="Production Office"
                                    />
                                )}
                            />
                        </FormControl>
                    </Box>
                </Box>

                <Box sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                }}>
                    <Box
                        sx={{
                            background: Colors.backGroundGroup,
                            borderRadius: '10px',
                            border: `1px solid ${Colors.borderColor}`,
                            padding: '0.5rem',
                        }}
                    >
                        <h4 className={classes.styleTitle}>Terms</h4>
                        <Box
                            component={Paper}
                            sx={{
                                boxShadow: 'none',
                                borderRadius: '10px',
                                padding: '10px',
                                background: 'white',
                                border: `1px solid ${Colors.borderColor}`,
                                overflow: 'auto',
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '0.5rem'
                            }}
                        >
                            <FormControl
                                size="small"
                            >
                                <Controller
                                    name="createDate"
                                    control={gridForm.control}
                                    render={({ ...rest }) => (
                                        <TextField
                                            size="small"
                                            id="outlined-basic"
                                            {...rest}
                                            fullWidth={true}
                                            variant="filled"
                                            inputProps={{
                                                'aria-label': 'Search',
                                                // style: {
                                                //   '-webkit-text-fill-color': 'inherit',
                                                // } as any,
                                            }}
                                            label="Vendor Pay Terms"
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormControl
                                size="small"
                            >
                                <Controller
                                    name="createDate"
                                    control={gridForm.control}
                                    render={({ ...rest }) => (
                                        <TextField
                                            size="small"
                                            id="outlined-basic"
                                            {...rest}
                                            fullWidth={true}
                                            variant="filled"
                                            inputProps={{
                                                'aria-label': 'Search',
                                                // style: {
                                                //   '-webkit-text-fill-color': 'inherit',
                                                // } as any,
                                            }}
                                            label="Pay Type"
                                        />
                                    )}
                                />
                            </FormControl>

                        </Box>
                    </Box>
                    <Box
                        sx={{
                            background: Colors.backGroundGroup,
                            borderRadius: '10px',
                            border: `1px solid ${Colors.borderColor}`,
                            padding: '0.5rem',
                        }}
                    >
                        <h4 className={classes.styleTitle}>Values</h4>
                        <Box
                            component={Paper}
                            sx={{
                                boxShadow: 'none',
                                borderRadius: '10px',
                                padding: '10px',
                                background: 'white',
                                border: `1px solid ${Colors.borderColor}`,
                                overflow: 'auto',
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '0.5rem'
                            }}
                        >
                            <FormControl
                                size="small"
                            >
                                <Controller
                                    name="createDate"
                                    control={gridForm.control}
                                    render={({ ...rest }) => (
                                        <TextField
                                            size="small"
                                            id="outlined-basic"
                                            {...rest}
                                            fullWidth={true}
                                            variant="filled"
                                            inputProps={{
                                                'aria-label': 'Search',
                                                // style: {
                                                //   '-webkit-text-fill-color': 'inherit',
                                                // } as any,
                                            }}
                                            label="Total Value"
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormControl
                                size="small"
                            >
                                <Controller
                                    name="createDate"
                                    control={gridForm.control}
                                    render={({ ...rest }) => (
                                        <TextField
                                            size="small"
                                            id="outlined-basic"
                                            {...rest}
                                            fullWidth={true}
                                            variant="filled"
                                            inputProps={{
                                                'aria-label': 'Search',
                                                // style: {
                                                //   '-webkit-text-fill-color': 'inherit',
                                                // } as any,
                                            }}
                                            label="Cur"
                                        />
                                    )}
                                />
                            </FormControl>

                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '1rem',
            }}>
                <Box
                    sx={{
                        background: Colors.backGroundGroup,
                        borderRadius: '10px',
                        border: `1px solid ${Colors.borderColor}`,
                        flex: '2',
                        padding: '0.5rem',
                    }}
                >
                    <h4 className={classes.styleTitle}>Parties</h4>
                    <Box
                        component={Paper}
                        sx={{
                            boxShadow: 'none',
                            borderRadius: '10px',
                            padding: '10px',
                            background: 'white',
                            border: `1px solid ${Colors.borderColor}`,
                            overflow: 'auto',
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr 1fr 1fr',
                            gap: '1rem',
                        }}
                    >
                        <FormControl
                            size="small"
                        >
                            <Controller
                                name="createDate"
                                control={gridForm.control}
                                render={({ ...rest }) => (
                                    <TextField
                                        size="small"
                                        id="outlined-basic"
                                        {...rest}
                                        fullWidth={true}
                                        variant="filled"
                                        inputProps={{
                                            'aria-label': 'Search',
                                            // style: {
                                            //   '-webkit-text-fill-color': 'inherit',
                                            // } as any,
                                        }}
                                        label="Merchandising"
                                    />
                                )}
                            />
                        </FormControl>
                        <FormControl
                            size="small"
                        >
                            <Controller
                                name="createDate"
                                control={gridForm.control}
                                render={({ ...rest }) => (
                                    <TextField
                                        size="small"
                                        id="outlined-basic"
                                        {...rest}
                                        fullWidth={true}
                                        variant="filled"
                                        inputProps={{
                                            'aria-label': 'Search',
                                            // style: {
                                            //   '-webkit-text-fill-color': 'inherit',
                                            // } as any,
                                        }}
                                        label="Vendor AX ID"
                                    />
                                )}
                            />
                        </FormControl>
                        <FormControl
                            size="small"
                        >
                            <Controller
                                name="createDate"
                                control={gridForm.control}
                                render={({ ...rest }) => (
                                    <TextField
                                        size="small"
                                        id="outlined-basic"
                                        {...rest}
                                        fullWidth={true}
                                        variant="filled"
                                        inputProps={{
                                            'aria-label': 'Search',
                                            // style: {
                                            //   '-webkit-text-fill-color': 'inherit',
                                            // } as any,
                                        }}
                                        label="VendorID"
                                    />
                                )}
                            />
                        </FormControl>
                        <FormControl
                            size="small"
                        >
                            <Controller
                                name="createDate"
                                control={gridForm.control}
                                render={({ ...rest }) => (
                                    <TextField
                                        size="small"
                                        id="outlined-basic"
                                        {...rest}
                                        fullWidth={true}
                                        variant="filled"
                                        inputProps={{
                                            'aria-label': 'Search',
                                            // style: {
                                            //   '-webkit-text-fill-color': 'inherit',
                                            // } as any,
                                        }}
                                        label="Vendor Name"
                                    />
                                )}
                            />
                        </FormControl>
                        {/**BLOCK 2 */}
                        <FormControl
                            size="small"
                        >
                            <Controller
                                name="createDate"
                                control={gridForm.control}
                                render={({ ...rest }) => (
                                    <TextField
                                        size="small"
                                        id="outlined-basic"
                                        {...rest}
                                        fullWidth={true}
                                        variant="filled"
                                        inputProps={{
                                            'aria-label': 'Search',
                                            // style: {
                                            //   '-webkit-text-fill-color': 'inherit',
                                            // } as any,
                                        }}
                                        label="Factory AX ID"
                                    />
                                )}
                            />
                        </FormControl>
                        <FormControl
                            size="small"
                        >
                            <Controller
                                name="createDate"
                                control={gridForm.control}
                                render={({ ...rest }) => (
                                    <TextField
                                        size="small"
                                        id="outlined-basic"
                                        {...rest}
                                        fullWidth={true}
                                        variant="filled"
                                        inputProps={{
                                            'aria-label': 'Search',
                                            // style: {
                                            //   '-webkit-text-fill-color': 'inherit',
                                            // } as any,
                                        }}
                                        label="Factory ID"
                                    />
                                )}
                            />
                        </FormControl>
                        <FormControl
                            size="small"
                        >
                            <Controller
                                name="createDate"
                                control={gridForm.control}
                                render={({ ...rest }) => (
                                    <TextField
                                        size="small"
                                        id="outlined-basic"
                                        {...rest}
                                        fullWidth={true}
                                        variant="filled"
                                        inputProps={{
                                            'aria-label': 'Search',
                                            // style: {
                                            //   '-webkit-text-fill-color': 'inherit',
                                            // } as any,
                                        }}
                                        label="Factory Name"
                                    />
                                )}
                            />
                        </FormControl>
                        <FormControl
                            size="small"
                        >
                            <Controller
                                name="createDate"
                                control={gridForm.control}
                                render={({ ...rest }) => (
                                    <TextField
                                        size="small"
                                        id="outlined-basic"
                                        {...rest}
                                        fullWidth={true}
                                        variant="filled"
                                        inputProps={{
                                            'aria-label': 'Search',
                                            // style: {
                                            //   '-webkit-text-fill-color': 'inherit',
                                            // } as any,
                                        }}
                                        label="Origin Country"
                                    />
                                )}
                            />
                        </FormControl>
                        {/**BLOCK 3 */}
                        <FormControl
                            size="small"
                        >
                            <Controller
                                name="createDate"
                                control={gridForm.control}
                                render={({ ...rest }) => (
                                    <TextField
                                        size="small"
                                        id="outlined-basic"
                                        {...rest}
                                        fullWidth={true}
                                        variant="filled"
                                        inputProps={{
                                            'aria-label': 'Search',
                                            // style: {
                                            //   '-webkit-text-fill-color': 'inherit',
                                            // } as any,
                                        }}
                                        label="Customer"
                                    />
                                )}
                            />
                        </FormControl>
                        <FormControl
                            size="small"
                        >
                            <Controller
                                name="createDate"
                                control={gridForm.control}
                                render={({ ...rest }) => (
                                    <TextField
                                        size="small"
                                        id="outlined-basic"
                                        {...rest}
                                        fullWidth={true}
                                        variant="filled"
                                        inputProps={{
                                            'aria-label': 'Search',
                                            // style: {
                                            //   '-webkit-text-fill-color': 'inherit',
                                            // } as any,
                                        }}
                                        label="Brand"
                                    />
                                )}
                            />
                        </FormControl>
                        <FormControl
                            size="small"
                        >
                            <Controller
                                name="createDate"
                                control={gridForm.control}
                                render={({ ...rest }) => (
                                    <TextField
                                        size="small"
                                        id="outlined-basic"
                                        {...rest}
                                        fullWidth={true}
                                        variant="filled"
                                        inputProps={{
                                            'aria-label': 'Search',
                                            // style: {
                                            //   '-webkit-text-fill-color': 'inherit',
                                            // } as any,
                                        }}
                                        label="Category"
                                    />
                                )}
                            />
                        </FormControl>
                        <FormControl
                            size="small"
                        >
                            <Controller
                                name="createDate"
                                control={gridForm.control}
                                render={({ ...rest }) => (
                                    <TextField
                                        size="small"
                                        id="outlined-basic"
                                        {...rest}
                                        fullWidth={true}
                                        variant="filled"
                                        inputProps={{
                                            'aria-label': 'Search',
                                            // style: {
                                            //   '-webkit-text-fill-color': 'inherit',
                                            // } as any,
                                        }}
                                        label="Production Office"
                                    />
                                )}
                            />
                        </FormControl>
                    </Box>
                </Box>
                <Box sx={{
                    flex: 1
                }}>
                    <Box
                        sx={{
                            background: Colors.backGroundGroup,
                            borderRadius: '10px',
                            border: `1px solid ${Colors.borderColor}`,
                            padding: '0.5rem',
                        }}
                    >
                        <h4 className={classes.styleTitle}>Other</h4>
                        <Box
                            component={Paper}
                            sx={{
                                boxShadow: 'none',
                                borderRadius: '10px',
                                padding: '10px',
                                background: 'white',
                                border: `1px solid ${Colors.borderColor}`,
                                overflow: 'auto',
                                display: 'grid',
                                gridTemplateColumns: '1fr',
                                gap: '0.5rem'
                            }}
                        >
                            <FormControl
                                size="small"
                            >
                                <Controller
                                    name="createDate"
                                    control={gridForm.control}
                                    render={({ ...rest }) => (
                                        <TextField
                                            size="small"
                                            id="outlined-basic"
                                            {...rest}
                                            fullWidth={true}
                                            variant="filled"
                                            inputProps={{
                                                'aria-label': 'Search',
                                                // style: {
                                                //   '-webkit-text-fill-color': 'inherit',
                                                // } as any,
                                            }}
                                            label="Order Type"
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormControl
                                size="small"
                            >
                                <Controller
                                    name="createDate"
                                    control={gridForm.control}
                                    render={({ ...rest }) => (
                                        <TextField
                                            size="small"
                                            id="outlined-basic"
                                            {...rest}
                                            fullWidth={true}
                                            variant="filled"
                                            inputProps={{
                                                'aria-label': 'Search',
                                                // style: {
                                                //   '-webkit-text-fill-color': 'inherit',
                                                // } as any,
                                            }}
                                            label="Speed Indicator"
                                        />
                                    )}
                                />
                            </FormControl>
                            <Box sx={{
                                display: 'flex',
                                gap: '0.5rem'
                            }}>
                                <FormControl
                                    size="small"
                                >
                                    <Controller
                                        name="createDate"
                                        control={gridForm.control}
                                        render={({ ...rest }) => (
                                            <TextField
                                                size="small"
                                                id="outlined-basic"
                                                {...rest}
                                                fullWidth={true}
                                                variant="filled"
                                                inputProps={{
                                                    'aria-label': 'Search',
                                                    // style: {
                                                    //   '-webkit-text-fill-color': 'inherit',
                                                    // } as any,
                                                }}
                                                label="Initial/Flow"
                                            />
                                        )}
                                    />
                                </FormControl>
                                <FormControl
                                    size="small"
                                >
                                    <Controller
                                        name="createDate"
                                        control={gridForm.control}
                                        render={({ ...rest }) => (
                                            <TextField
                                                size="small"
                                                id="outlined-basic"
                                                {...rest}
                                                fullWidth={true}
                                                variant="filled"
                                                inputProps={{
                                                    'aria-label': 'Search',
                                                    // style: {
                                                    //   '-webkit-text-fill-color': 'inherit',
                                                    // } as any,
                                                }}
                                                label="Risk Level"
                                            />
                                        )}
                                    />
                                </FormControl>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '1rem'
            }}>
                <Box
                    sx={{
                        background: Colors.backGroundGroup,
                        borderRadius: '10px',
                        border: `1px solid ${Colors.borderColor}`,
                        padding: '0.5rem',
                        flex: 1,
                    }}
                >
                    <h4 className={classes.styleTitle}>Notes to Vendor</h4>
                    <Box
                        component={Paper}
                        sx={{
                            boxShadow: 'none',
                            borderRadius: '10px',
                            padding: '10px',
                            background: 'white',
                            border: `1px solid ${Colors.borderColor}`,
                            overflow: 'auto',
                        }}
                    >
                        <FormControl
                            size="small"
                        >
                            <Controller
                                name="createDate"
                                control={gridForm.control}
                                render={({ ...rest }) => (
                                    <TextField
                                        size="small"
                                        id="outlined-basic"
                                        {...rest}
                                        fullWidth={true}
                                        variant="filled"
                                        minRows={3}
                                        rows={3}
                                        multiline={true}
                                        maxRows={6}
                                        inputProps={{
                                            'aria-label': 'Search',
                                            // style: {
                                            //   '-webkit-text-fill-color': 'inherit',
                                            // } as any,
                                        }}
                                    />
                                )}
                            />
                        </FormControl>
                    </Box>
                </Box>
                <Box
                    sx={{
                        background: Colors.backGroundGroup,
                        borderRadius: '10px',
                        border: `1px solid ${Colors.borderColor}`,
                        padding: '0.5rem',
                        flex: 1,
                    }}
                >
                    <h4 className={classes.styleTitle}>Notes From Vendor</h4>
                    <Box
                        component={Paper}
                        sx={{
                            boxShadow: 'none',
                            borderRadius: '10px',
                            padding: '10px',
                            background: 'white',
                            border: `1px solid ${Colors.borderColor}`,
                            overflow: 'auto',
                        }}
                    >
                        <FormControl
                            size="small"
                        >
                            <Controller
                                name="createDate"
                                control={gridForm.control}
                                render={({ ...rest }) => (
                                    <TextField
                                        size="small"
                                        id="outlined-basic"
                                        {...rest}
                                        fullWidth={true}
                                        variant="filled"
                                        minRows={3}
                                        rows={3}
                                        maxRows={6}
                                        multiline={true}
                                        inputProps={{
                                            'aria-label': 'Search',
                                            // style: {
                                            //   '-webkit-text-fill-color': 'inherit',
                                            // } as any,
                                        }}
                                    />
                                )}
                            />
                        </FormControl>
                    </Box>
                </Box>
                <Box sx={{
                    background: Colors.backGroundGroup,
                    borderRadius: '10px',
                    border: `1px solid ${Colors.borderColor}`,
                    padding: '0.5rem',
                    flex: 1,
                }}>
                    <h4 className={classes.styleTitle}>Total Units</h4>
                    <Box
                        component={Paper}
                        sx={{
                            boxShadow: 'none',
                            borderRadius: '10px',
                            padding: '10px',
                            background: 'white',
                            border: `1px solid ${Colors.borderColor}`,
                            overflow: 'auto',
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '1rem',
                        }}
                    >
                        <FormControl
                            size="small"
                        >
                            <Controller
                                name="createDate"
                                control={gridForm.control}
                                render={({ ...rest }) => (
                                    <TextField
                                        size="small"
                                        id="outlined-basic"
                                        {...rest}
                                        fullWidth={true}
                                        variant="filled"
                                        inputProps={{
                                            'aria-label': 'Search',
                                            // style: {
                                            //   '-webkit-text-fill-color': 'inherit',
                                            // } as any,
                                        }}
                                        label="Final Ordered"
                                    />
                                )}
                            />
                        </FormControl>
                        <FormControl
                            size="small"
                        >
                            <Controller
                                name="createDate"
                                control={gridForm.control}
                                render={({ ...rest }) => (
                                    <TextField
                                        size="small"
                                        id="outlined-basic"
                                        {...rest}
                                        fullWidth={true}
                                        variant="filled"
                                        inputProps={{
                                            'aria-label': 'Search',
                                            // style: {
                                            //   '-webkit-text-fill-color': 'inherit',
                                            // } as any,
                                        }}
                                        label="Open"
                                    />
                                )}
                            />
                        </FormControl>
                        <FormControl
                            size="small"
                        >
                            <Controller
                                name="createDate"
                                control={gridForm.control}
                                render={({ ...rest }) => (
                                    <TextField
                                        size="small"
                                        id="outlined-basic"
                                        {...rest}
                                        fullWidth={true}
                                        variant="filled"
                                        inputProps={{
                                            'aria-label': 'Search',
                                            // style: {
                                            //   '-webkit-text-fill-color': 'inherit',
                                            // } as any,
                                        }}
                                        label="AX Qty Received"
                                    />
                                )}
                            />
                        </FormControl>
                        <FormControl
                            size="small"
                        >
                            <Controller
                                name="createDate"
                                control={gridForm.control}
                                render={({ ...rest }) => (
                                    <TextField
                                        size="small"
                                        id="outlined-basic"
                                        {...rest}
                                        fullWidth={true}
                                        variant="filled"
                                        inputProps={{
                                            'aria-label': 'Search',
                                            // style: {
                                            //   '-webkit-text-fill-color': 'inherit',
                                            // } as any,
                                        }}
                                        label="VCI Qty Received"
                                    />
                                )}
                            />
                        </FormControl>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
