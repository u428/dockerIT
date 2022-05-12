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
#RUN npm config
RUN #npm install
RUN yarn --silent
COPY . /app
RUN yarn build
#FROM nginx:1.21.6

FROM nginx:1.21.6-alpine
#RUN rm -f /usr/share/nginx/html
#RUN mkdir "/usr/share/nginx/html"
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]