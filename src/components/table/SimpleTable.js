import React from 'react';
import {
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
} from "@material-ui/core";
import styled from "styled-components";

const DisplayBox = styled.div`
  display: block;
  text-align: right;
  padding: 0 0 4px;
`;

const DisplayTableCell = (props) => {

    return (
        <TableCell>
            {props.content}
        </TableCell>
    )
};

const SimpleTableHead = (props) => {

    return (
        <TableHead>
            <TableRow>
                {
                    props.headCells
                        .map((headCell) => (

                            <TableCell
                                key={headCell.id}
                                align={headCell.numeric ? 'right' : 'left'}
                                padding={headCell.disablePadding ? 'none' : 'default'}
                                style={{width: headCell.width, 'min-width': headCell.min_width}}
                            >
                                {
                                    <span>{headCell.label}</span>
                                }
                            </TableCell>
                        ))
                }
            </TableRow>
        </TableHead>
    );
}


export const SimpleTable = (props) => {

    const getProperty = (field) => {
        const findCell = props.headCells.find((cell)=>{
            return cell.id === field
        })
        return findCell?.label
    }
    return (
        <div>
            <Paper>
                <Grid container justify="flex-end" className="displaySort">
                    {
                        props.notShowOrderbyItem ? '' :
                            props.orderBy.map((orderObject, index) => {
                                return (
                                    <span key={index}>{getProperty(orderObject.field)}：{orderObject.order === "desc" ? "降順" : "昇順"}　</span>
                                )
                            })
                    }
                </Grid>
                <TableContainer>
                    <Table aria-labelledby="tableTitle" size="small" className="tablePaginate" >
                        <SimpleTableHead
                            rowCount={props.rows.length}
                            headCells={props.headCells}
                        />
                        <TableBody>
                            {
                                props.rows
                                    .map((row, index) => {
                                        return (
                                            <TableRow
                                                hover
                                                tabIndex={-1}
                                                key={index}
                                            >
                                                {
                                                    props.headCells.map((headCell, index) =>{
                                                        return (
                                                            <DisplayTableCell
                                                                key={index}
                                                                id={row.id}
                                                                index={index}
                                                                content={row[headCell.id]}
                                                                headCell={headCell}
                                                            />
                                                        )
                                                    })
                                                }
                                            </TableRow>
                                        )
                                    })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                {/*{ props.notShowPageNation ? '':
                    <TablePagination
                        rowsPerPageOptions={[10, 20, 30, 50]}
                        component="div"
                        count={props.pageInfo?.total ?? props.rows?.length}
                        rowsPerPage={props.pageCount}
                        page={props.pageNum-1}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                        labelRowsPerPage="１ページの行数："
                    />
                }*/}
            </Paper>
        </div>
    );
}
