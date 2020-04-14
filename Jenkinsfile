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
    sh "cd .. && ls && cp -R ${app_name} /var/www/"
  }
  
  stage('Install in Stage'){
    sh "cd /var/www/${app_name} && npm install"
  }
  
  stage('Put on'){
    // Se o serviço já existir vocé usara restart caso contrario usará start (vou manter com start)
    sh "cd /var/www/${app_name} && pm2 start npm -- start --name ${app_name}"
  }
}
