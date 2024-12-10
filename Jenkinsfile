pipeline {
    agent {
        docker {
            image 'node:20'
            label 'docker' 
        }
    }
    environment {
    PATH = "/usr/bin/docker:$PATH"
}
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/YotoGarcia/universidad-app', branch: 'main'  
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                // Iniciar los servicios con Docker Compose
                sh 'docker-compose -f docker-compose.yml up -d'
            }
        }
    }
    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}