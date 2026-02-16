pipeline {
  agent any

  environment {
    VERCEL_DEPLOY_HOOK_URL = credentials('vercel-deploy-hook-music-app')
  }

  options {
    buildDiscarder(logRotator(numToKeepStr: '10'))
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install dependencies') {
      steps {
        bat '''
          if exist package-lock.json (
            call npm ci
          ) else (
            call npm install
          )
        '''
      }
    }

    // Remove this whole stage for now
    // stage('Test') {
    //   when {
    //     expression { fileExists('package.json') }
    //   }
    //   steps {
    //     bat '''
    //       call npm test -- --watch=false || echo "Tests failed or not configured, continuing..."
    //     '''
    //   }
    // }

    stage('Build') {
      steps {
        bat 'call npm run build'
      }
    }

    stage('Trigger Vercel Deploy') {
      when {
        branch 'main'
      }
      steps {
        echo "Triggering Vercel deployment via Deploy Hook..."
        bat "curl -X POST \"%VERCEL_DEPLOY_HOOK_URL%\""
      }
    }
  }

  post {
    failure {
      echo "Build failed. Notifying (if you add notifications)."
    }
  }
}
