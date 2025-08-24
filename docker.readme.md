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
#### To run a container in detached mode
```
docker run -d imageName:tag
```

#### To start an exsisting container
```
docker start containerId
```
#### To....
```
docker kill containerId/containerName
```
#### To restart a container
```
docker restart containerId/containerName
```
docker exec -it containerName/containerId executableCommand
docker rm containerId/containerName
docker rm -f containerId/containerName-it
docker rmi -f imageId
docker run -itd -v localpath:/containerPath imageName 
docker push command, Docker pushes your image to your configured registry.

docker build -t myfirstapp .
* Default dockerfile name is Dockerfile
 docker build -t myfirstapp --file dev.dockerfile .
 * Custom file name- dev.dockerfile
 * myFirstapp is my custom application image
```
