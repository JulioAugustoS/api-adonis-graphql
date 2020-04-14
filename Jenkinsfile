node {
  def app_name = "api-adonis-graphql"
  def app_url = "xpass.app"
  def git_url = "api-adonis-graphql.git"
  
  stage('Clone Repository') {
    git branch: 'master',
    credentialsId: 'jenkins',
    url: "git@github.com:JulioAugustoS/${git_url}"
  }
  
  stage('Build in Stage') {
    sh "cd .. && cp -r ${app_name}/* /var/www/"
  }
}
