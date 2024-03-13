-- CREATE TABLE statement
CREATE TABLE users (
    id INTEGER PRIMARY KEY NOT NULL,
    name VARCHAR(100),
    company JSON,
    email VARCHAR(100),
    phone VARCHAR(50)
);

-- INSERT statement
INSERT INTO users (id, name, company, email, phone)
VALUES (
    1,
    'Leanne Graham',
    '{"name": "Romaguera-Crona", "catchPhrase": "Multi-layered client-server neural-net", "bs": "harness real-time e-markets"}',
    'Sincere@april.biz',
    '1-770-736-8031 x56442'
);