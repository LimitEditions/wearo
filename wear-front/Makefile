build:
	sudo docker build -t wear-front .

del:
	sudo docker rmi wear-front:latest

run:
	sudo docker run -d -p 3001:3000 --rm --name wear-front-app wear-front:latest

stop:
	sudo docker stop wear-front-app

list:
	sudo docker images

ps:
	sudo docker ps -a

serve:
	sudo serve build -p 8000