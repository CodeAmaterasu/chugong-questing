dbAdmin = db.getSiblingDB("admin");
dbAdmin.createUser({
    user: 'chugong-user',
    pwd: 'chugong-password',
    roles: [{role: 'readWrite', db: 'chugong'}],
});

db = new Mongo().getDB('security');

dbAdmin.createUser({
    user: 'security-user',
    pwd: 'security-password',
    roles: [{role: 'readWrite', db: 'security'}],
});

db.getSiblingDB('security').createCollection('application.user')

db.getSiblingDB('chugong').createCollection('users');
db.getSiblingDB('chugong').createCollection('quests');
db.getSiblingDB('chugong').createCollection('questlines');