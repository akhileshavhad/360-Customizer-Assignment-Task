# Task 1: Database Query Optimization

## SQL Query Scenario:
 You have a PostgreSQL database with a users table and an orders table. The orders table has a foreign key reference to the users table. Write a SQL query to fetch the top 5 users with the highest total order amount in the last month. Assume that the orders table has columns user_id, amount, and order_date.

## Indexing Strategy
Explain how you would index the tables to optimise the query.
Solution :
 1. Index on orders(user_id):
   Since we're joining users and orders on the user_id, creating an index on orders(user_id) will speed up the join operation by making it faster to look up the relevant rows from the orders table.

2. Index on orders(order_date):
   The query has a date filter on order_date (to get the last month's data). Indexing this column helps the database quickly find the relevant rows based on the date condition, avoiding a full table scan.

3. Composite Index on orders(user_id, order_date):
   A composite index on both user_id and order_date may further improve performance because it allows PostgreSQL to optimize both the join and the date filtering in one step.