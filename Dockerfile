# Step 1: Get Node.js image
FROM node:18

# Step 2: Create working directory inside container
WORKDIR /app

# Step 3: Copy files from your PC to container
COPY . .

# Step 4: Expose port
EXPOSE 3000

# Step 5: Run your app
CMD ["node", "app.js"]
