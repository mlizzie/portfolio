## Starting the Web App Locally
` $ npm start `

## Building the application
` $ npm run build `

## Building the container
` $ docker build -f Dockerfile -t $DOCKER_USER_ID/frontend-porfolio . `

## Running the container
` $ docker run -d -p 80:80 $DOCKER_USER_ID/frontend-porfolio `

## Pushing the container
` $ docker push $DOCKER_USER_ID/frontend-porfolio `