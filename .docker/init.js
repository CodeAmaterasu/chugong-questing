dbAdmin = db.getSiblingDB("admin");
dbAdmin.createUser({
    user: 'chugong-user',
    pwd: 'chugong-password',
    roles: [{role: 'readWrite', db: 'chugong'}],
});

db.getSiblingDB('chugong').createCollection('user');