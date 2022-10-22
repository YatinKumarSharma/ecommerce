import { Typography, Box, Table, TableBody, TableRow, TableCell, styled } from "@mui/material";
import {LocalOffer as Badge} from '@mui/icons-material';
const date = new Date(new Date().getTime()+(5*24*60*60*1000));

const SmallText = styled(Box)`
    font-size: 14px;
    vertical-align: baseline;
    & > p {
        font-size: 14px;
        margin-top: 10px;
    }
`
const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    & > td {
        font-size: 14px;
        margin-top: 10px;
        border: none;
    }
`
const StyledBadge = styled(Badge)`
    margin-right: 10px;
    color: #00CC00;
    font-size: 15px;
`;

const ProductDetail = ({product}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    return (
        <>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}>
                8 Ratings & 1 Reviews
                <span><img src={fassured} style={{ width: 77, marginLeft: 20 }} /></span>
            </Typography>
            <Typography>
                <Box component="span" style={{ fontSize: 28 }}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: '#388E3C' }}>{product.price.discount} off</Box>
            </Typography>
            <Typography>Available offers</Typography>
            <SmallText>
                <Typography><StyledBadge />Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</Typography>
                <Typography><StyledBadge />Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply</Typography>
                <Typography><StyledBadge />Purchase this Furniture or Appliance and Get Extra ₹500 Off on Select ACs</Typography>
                <Typography><StyledBadge />Partner OfferExtra 10% off upto ₹500 on next furniture purchase</Typography>
                <Typography><StyledBadge />Partner OfferExtra 70% off upto ₹5500 on next furniture purchase</Typography>
            </SmallText>
            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style= {{color:'#878787'}}>Delievery</TableCell>
                        <TableCell style = {{fontWeight:600}}>Delievery by {date.toDateString()} | $40</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style= {{color:'#878787'}}>Warrenty</TableCell>
                        <TableCell>No Warrenty</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style= {{color:'#878787'}}>Seller</TableCell>
                        <TableCell>
                            <Box component="span" style = {{color: '#2874f0'}}>SuperComNet</Box>
                            <Typography>GST invoice avavilable</Typography>
                            <Typography>View mores sellers starting from ${product.price.cost}</Typography>
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell colSpan = {2}>
                            <img src = {adURL} style = {{width:390}} alt = "flipkartpoints" />
                        </TableCell>
                        
                    </ColumnText>
                    <ColumnText>
                        <TableCell style= {{color:'#878787'}}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </ColumnText>
                </TableBody>
            </Table>
        </>
    )
}

export default ProductDetail;