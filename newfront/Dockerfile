# FROM node:latest

# WORKDIR './app'

# ENV PATH /app/node_modules/.bin:$PATH

# COPY package.json .

# COPY package-lock.json .

# RUN npm install --silent

# RUN npm install react-scripts@5.0.0 -g --silent

# COPY . . 

# # CMD echo "Hello to Muhammad Amin from docker"

# CMD ["npm", "start"]


FROM node:14-alpine3.14 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./*.json /app/
#COPY ./*.lock /app/
#COPY ./.npmrc /app/
#RUN npm config set -- "//gitlab.com/api/v4/projects/30733369/packages/npm/:_authToken" "2Q5vR1ShQ-sv9img5khy"
RUN npm config
RUN npm install
COPY . /app
RUN npm run build

COPY --from=build /app/build /usr/share/nginx/html


