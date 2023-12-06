

create table product(
	prd_id varchar(20) not null,
	prd_name varchar(40),
	prd_description varchar(100),
	prd_price decimal(10,2),
	prd_quant INTEGER,
	id INTEGER not null,
	created_date date,
	modified_by varchar(40),
	modified_date date,
	primary key(prd_id)
	
)
//history of order table
create table order_info(
	order_id INTEGER not null,
	ordered_date date,
	prd_id varchar(20),
	total_price decimal(10, 2),
	id INTEGER not null,
	created_date date,
	modified_by varchar(40),
	modified_date date,
	primary key(order_id),
	foreign key(prd_id) references product(prd_id)
)
//orderdetails table for user
create table OrderDetail (
    order_detailId INTEGER,
    order_id INTEGER,
    prd_id varchar,
    purchased_count INTEGER,
    specific_price DECIMAL(10, 2),
    total_price DECIMAL(10, 2),
    expected_date date,
    actual_date date,
    primary key(order_detailId),
    foreign key (order_id) references order_info(order_id),
    foreign key (prd_id) references product(prd_id)
)

INSERT INTO public.product
(prd_id, prd_name, prd_description, prd_price, prd_quant, id, created_date, modified_by, modified_date)
VALUES('P1', 'Mobile', 'mobilephone', 10000, 5, 1, '2000-09-09', '', '2000-09-09')

INSERT INTO public.product
(prd_id, prd_name, prd_description, prd_price, prd_quant, id, created_date, modified_by, modified_date)
VALUES('P2', 'mac', 'an apple prd', 20000, 15, 2, '2000-03-01', '', '2000-09-09')

INSERT INTO public.product
(prd_id, prd_name, prd_description, prd_price, prd_quant, id, created_date, modified_by, modified_date)
VALUES('P3', 'pen', 'stationary item', 5000, 25, 10, '1000-09-09', '', '1000-09-09')

select * from product

select * from product
order by prd_description desc

select prd_name from product
where prd_name like '%n'

select prd_id from product 
where prd_price between 10000 and 20000

UPDATE public.product
SET prd_name='newmac'
WHERE prd_id='P1'

//creating index
CREATE INDEX product_index
ON product(prd_id, prd_name)

INSERT INTO public.order_info
(order_id, ordered_date, prd_id, total_price, id, created_date, modified_by, modified_date)
VALUES(1, '2000-09-22', 'P1', 10000, 1, '1999-09-22', '', '2000-09-22');

INSERT INTO public.order_info
(order_id, ordered_date, prd_id, total_price, id, created_date, modified_by, modified_date)
VALUES(2, '2010-09-22', 'P2', 1000, 2, '1989-09-22', '', '2010-09-22');

select * from order_info 

//join based on id
select * from product 
join order_info 
on product.id = order_info.id

//left join based on quantity
select * from product 
left join order_info 
on product.id = order_info.id 
where product.prd_quant >= 15

INSERT INTO public.orderdetail
(order_detailid, order_id, prd_id, purchased_count, specific_price, total_price, expected_date, actual_date)
VALUES(1, 1, 'P2', 5, 0, 0, '2003-09-09', '2002-09-13')

INSERT INTO public.orderdetail
(order_detailid, order_id, prd_id, purchased_count, specific_price, total_price, expected_date, actual_date)
VALUES(2, 2, 'P1', 15, 1000.56, 133.23, '2003-12-29', '2012-09-23')

INSERT INTO public.orderdetail
(order_detailid, order_id, prd_id, purchased_count, specific_price, total_price, expected_date, actual_date)
VALUES(3, 2, 'P1', 15, 13000.56, 1333.23, '2003-12-29', '2012-09-23')

select * from orderdetail 

//displaying the total product sum has been purchased using order detail
select product.prd_id, product.prd_name, sum(orderdetail.purchased_count) as totalsold_product_count
from product 
join orderdetail on product.prd_id = orderdetail.prd_id
group by product.prd_id, product.prd_name

//displaying the specific sold product sum based on product and history of order
select order_info.order_id, order_info.ordered_date, SUM(orderdetail.specific_price) AS total_amount_specific_product
from order_info
JOIN orderdetail ON order_info.order_id = orderdetail.order_id
GROUP BY order_info.order_id





