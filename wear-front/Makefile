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
	$(SUDO) serve build -p 8000