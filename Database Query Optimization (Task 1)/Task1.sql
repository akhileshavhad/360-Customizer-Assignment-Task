SELECT u.user_id, SUM(o.amount) AS total_amount
FROM users u
JOIN orders o ON u.user_id = o.user_id
WHERE o.order_date >= NOW() - INTERVAL '1 month'
GROUP BY u.user_id
ORDER BY total_amount DESC
LIMIT 5;
