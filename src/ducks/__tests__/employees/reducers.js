import {types,reducer} from '../../employees';


describe('Fetching Employee',function(){

    describe('Request Start',function(){
        it('should set the loading property to `true` when the fetching starts',function(){
            const result = reducer(undefined,{
                type:types.FETCH_EMPLOYESS_REQUEST
            })
            expect(result.loading).toEqual(true);
        })
    });

    describe('Request Succesfull',function(){
        it('should set the loading property to `false` when the fetching completed',function(){
            const result = reducer(undefined,{
                type:types.FETCH_EMPLOYESS_SUCCESS
            })
            expect(result.loading).toEqual(false);
        });

        it('should set the data obtained from the the remote location',function(){
            const fakeData = [1,2,3];
            const result = reducer(undefined,{
                type:types.FETCH_EMPLOYESS_SUCCESS,
                payload:fakeData

            })
            expect(result.data).toEqual(fakeData);
        });


        it('should return error message in case of failure',function(){
            const err = "404 File not found";
            const result = reducer({loading:true},{
                type:types.FETCH_EMPLOYESS_FAILURE,
                err:err

            })
            expect(result.loading).toEqual(true);
            expect(result.err).toEqual(err);
        });
    });

});
