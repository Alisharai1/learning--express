#### to check docker status
```
docker ps
```
* returns all the actively running container

```
docker ps -a
docker images-- will get list of images downoaded from docker hub(public repo)
docker pull imageName:tag
docker run -it imageName:tag
docker run -d imageName:tag
docker kill containerId/containerName
docker restart containerId/containerName
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
