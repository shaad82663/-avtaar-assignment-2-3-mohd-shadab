# avtaar-assignment-2-3-mohd-shadab.

##  Steps to run the code (Windows OS)

You'll need to have node.js installed in the machine. Git Bash is suggested as a terminal

- After clonning the repository, Navigate to the project folder by running following command in terminal:
```sh
 cd avtaar-assignment-2-3-mohd-shadab/
```

- Run the following command to install the all the node.js packages that are used in the code.
```sh
npm install
```

- Run the server by running following command:
```sh
npm run start
```

- The ouput in the termnal will be :
>Listening Server over port 4000 in DEVELOMENT mode.
>
>mongoDB Database is connected with mongodb://localhost:27017/avtaar-mohd-shadab

# REST API

The REST API used in the code is described below.

## Insert into User table

### Request

`POST /api/v1/user/new`

     http://localhost:4000/api/v1/user/new

### Response
  
    HTTP/1.1 200 OK
    success : true
    user : {...user}
    
## Insert into Event table

### Request

`POST /api/v1/event/new`

     http://localhost:4000/api/v1/event/new  

### Response
  
        success : true,
        event : {...event}
  
## Get all the events for today

### Request

`GET /api/v1/events/today`

     http://localhost:4000/api/v1/events/today  

### Response
  
        HTTP/1.1 200 OK
        success : true,
        count : events.length,
        events : [...events]
        
## Get all users for list of uid

### Request

`GET /api/v1/events`

     http://localhost:4000/api/v1/events

### Response
  
         HTTP/1.1 200 OK
         success : true,
         count : eventsForUid.length,
         eventsForUid : {...eventsForUid} 
         
## Get all users for list of uid

### Request

`GET /api/v1/events`

     http://localhost:4000/api/v1/events

### Response
  
         HTTP/1.1 200 OK
         success : true,
         count : eventsForUid.length,
         eventsForUid : {...eventsForUid}          

## Features

- Provides the unique ID to each user

## Installation

Web App requires [Node.js](https://nodejs.org/) to run.
[Git Bash](https://git-scm.com/) is suggested as a terminal.

Install the dependencies and devDependencies and start the server.

```sh
cd <foler path>
npm install
node index.js
```

## Output
[Output-1](https://res.cloudinary.com/shaad82663/image/upload/v1636696214/Avtaar-Internship-Assisnments/OP1_jglvtb.png)
[Output-2](https://res.cloudinary.com/shaad82663/image/upload/v1636696214/Avtaar-Internship-Assisnments/OP2_ro2vfm.png)
