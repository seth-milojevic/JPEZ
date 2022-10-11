#!/bin/sh

mkdir -p backup

./dockers/postgres-kill.sh
./dockers/postgres-run.sh headless
sleep 3
docker exec jpez-postgres pg_dump -U root --format custom jpez > ./backup/postgres-dump.pgdata-new
mv --backup=numbered ./backup/postgres-dump.pgdata-new ./backup/postgres-dump.pgdata