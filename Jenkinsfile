pipeline {
    agent {
        docker {
            image 'node:20' 
            args '-v /tmp/npm:/home/jenkins/.npm -e NPM_CONFIG_USERCONFIG=/home/jenkins/.npmrc'  
        }
    }
    environment {
        
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