import { reducer, actions } from '../../orders';
import { VANILLA } from '../../../constants/flavors';

describe('Orders Reducer', function () {

    it('should store the order data in the state', function () {
        const newState = reducer(undefined, actions.placeOrder({
            customerName: 'Vamsi',
            cone: true,
            scoops: {
                VANILLA: 1
            }
        }))

        expect(newState.length).toEqual(1);
        expect(newState[0].customerName).toEqual('Vamsi');
        expect(newState[0].cone).toEqual(true);
        expect(newState[0].scoops.VANILLA).toEqual(1);
    })
});



describe('Order Full Fill', function () {

    it('should change the status of the order to full filled', function () {
        const existingState = [{
            customerName: 'Vamsi',
            status: 'pending'
        }];
        const newState = reducer(existingState, actions.fullFillOrder(0))

        expect(newState[0].status).toEqual('fullFilled');

    })
});

describe('Order Payement', function () {

    it('mark the order as payed', function () {
        const existingState = [{
            customerName: 'Vamsi',
            status: 'fullFilled'
        }];
        const newState = reducer(existingState, actions.payOrder(0))

        expect(newState[0].status).toEqual('paid');

    })
});

describe('Cancel Order', function () {

    it('it should cancel the order', function () {
        const existingState = [{
            customerName: 'Vamsi',
            status: 'fullFilled'
        }];
        const newState = reducer(existingState, actions.cancelOrder(0))

        expect(newState).toEqual([]);

    })
});