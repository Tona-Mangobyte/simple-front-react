import React, {useEffect} from "react";
import Helmet from "react-helmet";
import {SimpleTable} from "../../components/table/SimpleTable";
import {Paper, Grid, Button, TextField} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import {useForm} from "react-hook-form";

const ProductList = (props) => {
    const { register, handleSubmit, reset, control } = useForm({
        validateCriteriaMode: "all",
        defaultValues: {},
    });

    const [products, setProducts] = React.useState([]);

    const headCells = [
        { id: 'id', label: 'No', width: '20px' },
        { id: 'name', label: 'Name', width: '20px' },
        { id: 'price', label: 'Price', width: '20px' },
    ];

    useEffect(() => {
        setProducts([
            {
                id: 1,
                name: 'Cocacola Can',
                price: 0.5
            },
            {
                id: 2,
                name: 'Pepsi Can',
                price: 0.5
            },
            {
                id: 3,
                name: 'Tiger Can',
                price: 1.5
            }
        ]);
    }, []);

    const handleSearch = (data) => {
        console.log(`execute search params `, data);
    }

    return(
        <React.Fragment>
            <Helmet title="Product list" />
            <div className="page-header">
                <Paper className="paper">
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <form noValidate autoComplete="off" className="root" onSubmit={handleSubmit(handleSearch)}>
                                <Grid item xs={12} sm={10}>
                                    <Grid container spacing={4} className="gridMargin">
                                        <Grid item xs={12} sm={6} className="textField">
                                            <TextField
                                                inputRef={register}
                                                id="product_code"
                                                name="product_code"
                                                defaultValue=""
                                                label="Product Code"
                                                variant="outlined"
                                                fullWidth
                                                InputLabelProps={{shrink: true}}
                                                size="small"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6} className="textField">
                                            <TextField
                                                inputRef={register}
                                                id="product_name"
                                                name="product_name"
                                                defaultValue=""
                                                label="Product Name"
                                                variant="outlined"
                                                fullWidth
                                                InputLabelProps={{shrink: true}}
                                                size="small"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6} className="textField">
                                            <TextField
                                                inputRef={register}
                                                id="supplier_name"
                                                name="supplier_name"
                                                defaultValue=""
                                                label="Supplier Name"
                                                variant="outlined"
                                                fullWidth
                                                InputLabelProps={{shrink: true}}
                                                size="small"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6} className="textField">
                                            <TextField
                                                inputRef={register}
                                                id="supplier_code"
                                                name="supplier_code"
                                                defaultValue=""
                                                label="Supplier Code"
                                                variant="outlined"
                                                fullWidth
                                                InputLabelProps={{shrink: true}}
                                                size="small"
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={4}>
                                    <Grid item xs={12} className="buttonRight">
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            className="buttonSearch"
                                            startIcon={<SearchIcon />}
                                        >
                                            Search
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
            <div className="form-area">
                <SimpleTable
                    headCells={headCells}
                    rows={products}
                    pageCount={3}
                    pageNum={1}
                    notShowOrderbyItem={true}
                />
            </div>
        </React.Fragment>
    )
}

export default ProductList;
