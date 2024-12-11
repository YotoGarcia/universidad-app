pipeline {
    agent any
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
