/*Reducer for the actions*/
const data = (state = [], action) => {
    switch (action.type) {
        case 'SET_RESULTS':
            return Object.assign({}, state, {
                results: action.data,
            });
        case 'SET_LIMIT':
            return Object.assign({}, state, {
                filterType: action.data,
            });
        case 'SET_INPUT':
            return Object.assign({}, state, {
                inputValue: action.data,
            });
        case 'SET_CLEAR':
            return Object.assign({}, state, {
                inputValue: '',
                results:'',
            });
        case 'ADD_TO_CART':
            console.log('action',state.cart);
            var index = state.cart.indexOf(action.data)
            if (index === -1) {
                var cart_new = [...state.cart,action.data];
                var apples = cart_new.filter(product => product.type === 'apples');
                var bananas = cart_new.filter(product => product.type === 'bananas');
                var pears = cart_new.filter(product => product.type === 'pears');
                var oranges = cart_new.filter(product => product.type === 'oranges');
                var apples_sum=0,bananas_sum=0,pears_sum=0,oranges_sum=0,add;
                add = apples.map(function(apple) {
                    apples_sum+=Number(apple.price);
                });
                add = bananas.map(function(banana) {
                    bananas_sum+=Number(banana.price);
                });
                add = pears.map( function(pear) {
                    pears_sum+=Number(pear.price);
                });
                add = oranges.map( function(orange) {
                    oranges_sum+=Number(orange.price);
                });
                var discount=0;
                var total = apples_sum+bananas_sum+pears_sum+oranges_sum;
                var after_discount=total;
                if(apples.length>=7){
                    discount+=0.10*(apples_sum)
                }
                if(pears.length>=4 && bananas.length>=2){
                    discount+=0.30*(pears_sum)+0.30*(bananas_sum)
                }
                after_discount = total-discount;
                if(after_discount<0){
                    total=0;
                }
                if(discount<0){
                    discount=0;
                }

                return Object.assign({}, state, {
                    cart: cart_new,
                    total:total,
                    discount: discount,
                    afterDiscount:after_discount,
                });
            }else{
                return Object.assign({}, state, {
                    cart: state.cart
                });
            }

        case 'SET_ERROR':
            return Object.assign({}, state, {
                results:'',
            });

        case 'LOGGED_IN':
            return Object.assign({}, state, {
                signin:true,
            });
       

        case 'GO_TO_CART':
            return Object.assign({}, state, {
                cart_view:action.data
            });

        case 'REMOVE_TO_CART':
            console.log('REMOVE_TO_CART',state.cart)
            var cart_new = [...state.cart];
            var index = cart_new.indexOf(action.data)
            if (index !== -1) {
                cart_new.splice(index, 1);
            }
            var apples = cart_new.filter(product => product.type === 'apples');
            var bananas = cart_new.filter(product => product.type === 'bananas');
            var pears = cart_new.filter(product => product.type === 'pears');
            var oranges = cart_new.filter(product => product.type === 'oranges');
            var apples_sum=0,bananas_sum=0,pears_sum=0,oranges_sum=0,add;
            add = apples.map(function(apple) {
                  apples_sum+=Number(apple.price);
            });
            add = bananas.map(function(banana) {
                bananas_sum+=Number(banana.price);
            });
            add = pears.map( function(pear) {
                pears_sum+=Number(pear.price);
            });
            add = oranges.map( function(orange) {
                oranges_sum+=Number(orange.price);
            });
            var discount=0;
            var total = apples_sum+bananas_sum+pears_sum+oranges_sum;
            var after_discount=total;
            if(apples.length>=7){
                discount+=0.10*(apples_sum)
            }
            if(pears.length>=4 && bananas.length>=2){
                discount+=0.30*(pears_sum)+0.30*(bananas_sum)
            }
            after_discount = total-discount;
            if(after_discount<0){
                total=0;
            }
            if(discount<0){
                discount=0;
            }    
            return Object.assign({}, state, {
                cart:cart_new,
                total:total,
                discount: discount,
                afterDiscount:after_discount,
            });

        default:
            return state;
    }
};

export default data
