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

```
