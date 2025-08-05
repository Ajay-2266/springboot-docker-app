# Use OpenJDK as the base image
FROM openjdk:17-jdk-slim

# Set working directory inside container
WORKDIR /app

# Copy jar file
COPY target/*.jar app.jar

# Expose the port your app runs on
EXPOSE 8087

# Run the jar file
ENTRYPOINT ["java", "-jar", "app.jar"]
