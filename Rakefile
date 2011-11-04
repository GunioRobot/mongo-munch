
APP_FILE  = 'mongomunch.rb'
APP_CLASS = 'MongoMunch'

require 'sinatra/assetpack/rake'
require 'rake/testtask'

Rake::TestTask.new do |t|
  t.libs.push 'models'
  t.test_files = FileList['spec/*_spec.rb']
  t.verbose = true
end
