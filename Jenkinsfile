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
                withEnv(['NODEJS_HOME=/usr/local/bin/node', 'PATH+NODE=/usr/local/bin/npm']) {
                    sh 'npm install'
                }
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                sh 'node index.js &'
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
