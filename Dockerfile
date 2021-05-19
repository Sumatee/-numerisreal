#nodedocker
FROM node:12.18.1
#สร้างdirectoryเพื่อใช้งานเก็บไว้ในdocker no see
WORKDIR /app 
COPY package.json ./
# Create app directory ลงnode module
RUN npm install
# Copy app source codeไม่มีbackend
COPY . ./ 
#Expose port and start application
EXPOSE 3000
CMD [ "npm", "start" ]
