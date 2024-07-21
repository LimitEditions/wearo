OS := $(shell uname)
ifeq ($(OS), Linux)
    SUDO := sudo
endif

build:
	$(SUDO) docker build -t wear-front .

del:
	$(SUDO) docker rmi wear-front:latest

run:
	$(SUDO) docker run -d -p 3001:3000 --rm --name wear-front-app wear-front:latest

stop:
	$(SUDO) docker stop wear-front-app

list:
	$(SUDO) docker images

ps:
	$(SUDO) docker ps -a

serve:
	serve build -p 8000

swagger: 
	npx swagger-typescript-api -p http://vne.su:8081/swagger/v1/swagger.json -o ./src/api -n wearApi.ts --route-types --modular --axios

cleanCache:
	rm -rf node_modules/.cache

https:
	HTTPS=true npm run start