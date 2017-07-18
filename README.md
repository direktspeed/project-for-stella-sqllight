# POC Clustering SQLlight via Docker + NodeJS

Goal is to have a FaultTollerant SQLlight Deployment on Docker



# Dependencys
- Docker
- docker-compose
- linux kernel v3 +

# Deployment
```
git clone
docker-compose build
docker-compose up -d
```
# Using
http://frontendip

# Concepts
you can link as many backend containers as you like to your current choosen master and the slave gets overwritten by master on start
- if a query with type CREATE, UPDATE, INSERT gets used it will get executed on all instances
- if a query with type SELECT gets used it will get executed only on the target instance
- the frontend gets all known backends from every instance
