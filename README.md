# Flow-Router-SSR Request

Get access to the request object while server side rendering by calling the global method lastRequest (Server only).

## Install

```
meteor add timoruetten:flow-router-ssr-request
```

## Usage

```
FlowRouter.lastRequest();
```

### Return

Full request object.

![alt tag](https://picload.org/image/rgaccdaa/ezgif-72579726.gif)

## Using wildcard subdomains with nginx

Add a virtual host with

```
map $http_upgrade $connection_upgrade {
    default upgrade;
    '' close;
}

server {
  listen 80;
  server_name *.myapp.io;
  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_set_header Host $host;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection $connection_upgrade;
    proxy_set_header X-Forwarded-For $remote_addr; # preserve client IP
    proxy_set_header X-Forward-Proto https;                                               
  }
}

```

