#! /bin/bash

create_container:
	docker run -it --name acorn-piano -v $(PWD):/app acorn-piano /bin/bash
up_server:
	docker run -itd --name acorn-piano -v $(PWD):/app -p 3000:3000 acorn-piano npm run dev
remove_container:
	docker rm acorn-piano
build:
	docker build -t acorn-piano .
