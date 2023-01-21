## Packaging the application
` $ mvn install`

## Running the application
` $ java -jar web-app-0.0.1-SNAPSHOT.jar  ` 

## Building the container
` $ docker build -f Dockerfile -t $DOCKER_USER_ID/web-app-portfolio . `

## Running the container
``` 
$ docker run -d -p 8080:8080  $DOCKER_USER_ID/web-app-portfolio
```

#### Native docker support needs the Container IP
CONTAINER_IP: To forward messages to the sa-logic container we need to get  its IP. To do so execute:

` $ docker container list`

Copy the id of sa-logic container and execute:

` $ docker inspect <container_id> `

The Containers IP address is found under the property NetworkSettings.IPAddress, use it in the RUN command.

#### Docker Machine on a VM 
Get Docker Machine IP by executing:

` $ docker-machine ip `

Use this one in the command.


## Pushing the container
` $ docker push $DOCKER_USER_ID/web-app-portfolio `


