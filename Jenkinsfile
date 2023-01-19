pipeline {
 environment {
  appName = "LambdaTest"
  projectPath = "/jenkins/data/workspace/lamt"
 }

 agent any

 stages {

  stage('Basic Information') {
   steps {
    sh "echo Starting Lambda build"
   }
  }

  stage('Build Zip') {
   steps {
    script {
        sh """
        zip funtion.zip index.js
        """
    }
   }
  }

  stage('Deploy Lambda')
  {
    steps{
      script{
  sh '''
  aws lambda create-function --function-name hello --zip-file fileb://function.zip --runtime nodejs16.x --role arn:aws:iam::940621196142:role/service-role/mailer-role-9lpvyo4c --handler index.handler
  '''
      }
    }
  }

  stage('Garbage Collection') {
   steps {
    sh "rm function.zip"
   }
  }


}
}
