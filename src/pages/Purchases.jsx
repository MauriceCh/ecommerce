import React, { useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector} from 'react-redux';
import { getPurchasesThunk } from '../store/slices/purchases.slice';

const Purchases = () => {
    const dispatch = useDispatch();
    const records = useSelector(state => state.purchases);
    useEffect(() => {
        dispatch(getPurchasesThunk());
    }, []);
    return (
        <div>
            <h1>Purchases</h1>
            <ListGroup>
            {
                records.map(record =>(
                    <ListGroup.Item>
                        {record.cart.products.map(product =>(
                           <p>
                            {product.title}
                           </p>
                        ))}
                    </ListGroup.Item>
                ))
            }
            </ListGroup>
            
        </div>
    );
};

export default Purchases;