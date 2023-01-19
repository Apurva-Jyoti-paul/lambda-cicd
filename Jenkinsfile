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
        ls
        """
    }
   }
  }

  stage('Deploy Lambda')
  {
    steps{
      script{
  sh '''
  aws --version
  '''
      }
    }
  }

//   stage('Garbage Collection') {
//    steps {
//     sh "rm "
//    }
//   }
//  }


}
