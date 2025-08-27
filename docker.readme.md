#### To check docker status
```
docker ps
```
* returns all the actively running container

#### To list all the running and stopped container
```
docker ps -a
```
```
docker images
```
* Will get list of images downoaded from docker hub(public repo)```
docker exec -it containerName/containerId executableCommand
#### To pull a image from docker hub
```
docker pull imageName:tag
```
### To start a new container
```
docker run imageName(redis)
```
* Create+start a new container
* Basicaly does 2 jobs- pulls the image and ccreate a new container
* When we use this command, docker pull command is not mandate, it will automatically pull the image from docker hub
* Every time your docker run redis, you get a fresh container.!!!!!!!!

#### To run a container in interactive mode
```
docker run -it imageName:tag
```
* -i = keep STDIN open → you can type commands.

 * -t= allocate a pseudo-terminal (TTY) → makes it look like a normal shell.
* You are attached to the container → you see its output and can type input.

#### To run a container in detached mode
```
docker run -d imageName:tag
```

#### To start an exsisting container
```
docker start containerId
```
#### To stop a container quickly
```
docker kill containerId/containerName
```
#### To restart a container
```
docker restart containerId/containerName
```
#### To run a new command inside an already running container

* "docker exec -it" is like saying “hey container, while you’re already running, let me jump inside and run this command interactively.”
* (unlike docker run which starts a new container)

```
docker exec -it containerName/containerId executableCommand(sh)
```
#### To remove/delate a container
* By default we can just remove a stopped container
* If the container is still running, you’ll get an error.
```
docker rm containerId/containerName
```
#### To forcefully remove a running container
```
docker rm -f containerId/containerName-it
```
#### To forcefully remove an image
* Forceful removal although :-
* The image is tagged in multiple repositories.

* The image is being used by stopped containers.
```
docker rmi -f imageId
```
#### To run a container in background with interactive terminal while mounting a local folder into container's file system
* -v localpath:/containerPath →  whatever files you put in the local path will appear inside the container at container path
* Why use -v (bind mounts)?→  Share source code between host and container.

```
docker run -itd -v localpath:/containerPath imageName 
```
#### To push
* Docker pushes your image to your configured registry.(Dockerhub/AWS/private registry)
```
docker push  
```

#### To build a docker image
```
docker build -t myfirstapp .
```
* docker build → Builds a Docker image from a Dockerfile (and context).
* -t myfirstapp → tags the image (myfirstapp) with it's version.If no version, docker by default takes it's latest version
* . → current directory
* Docker sends the files from this directory (and subdirs) to the Docker daemon to build the image.

* Docker expects a Dockerfile inside this directory unless you specify otherwise (-f Dockerfile.dev).

* In short, docker build -t myfirstapp . builds a new Docker image from the Dockerfile in the current directory and tags it as myfirstapp:latest.

 * myFirstapp is my custom application image
```
