import Api from '@/services/Api'
//get the data from db
const response = await Api().get('/clients');

let orderInfo = response.data;
//array for orders
var orders = new Array();
//reassignig returned data to match the order card
for (let index = 0; index < orderInfo.length; index++) {

    orders.push({
        id: orderInfo[index].id,
        orderType: orderInfo[index].product,
        address: orderInfo[index].street + ' ' + orderInfo[index].homeNumber + '/' + orderInfo[index].localNumber,
        city: orderInfo[index].city,
        postCode: orderInfo[index].postCode,
        name: orderInfo[index].name,
        nrtel: orderInfo[index].phone,
        date: '1-1-2020',
        description: orderInfo[index].message
    })

}

export default orders