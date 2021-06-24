# hostedapi

Api's for a sales system of ecommerce 

getOrderByID :- https://hostedapi-assignment.herokuapp.com/getorderbyid/60d4c79451e7fa0015f4eebe

GetAllBooks :- https://hostedapi-assignment.herokuapp.com/getbooks?page=1&limit=5

CreateOrder :- https://hostedapi-assignment.herokuapp.com/createorder

Body:{
  "user_first_name": "akku",
  "user_last_name": "gupta",
  "user_email": "akku@gmail.com",
  "user_phone_number": "8976445344",
  "user_cc": "91",
  "user_address":"sahakar nagar delhi ",
  "Books": [
    {
      "book_id": "60d4b1c48eb3f24f2469d3b1",
      "Quantity": "2",
      "price": "100"
    },
    {
      "book_id": "60d4b1a78eb3f24f2469d3af",
      "Quantity": "1",
      "price": "300"
    },
    {
      "book_id": "60d4bd20b196eb0df8854384",
      "Quantity": "1",
      "price": "500"
    }
  ]
}
