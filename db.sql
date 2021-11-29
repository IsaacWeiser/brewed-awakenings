Table Employees {
  id int [pk]
  name varchar
  email varchar
  hourlyRate float
}

Table Products {
  id int [pk]
  name varchar
  price float
}

Table Orders {
  id int [pk]
  productId int
  employeeId int
  timestamp int
}

Ref: "Employees"."id" < "Orders"."employeeId"

Ref: "Products"."id" < "Orders"."productId"