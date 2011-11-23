$: << File.join(File.dirname(__FILE__), 'models') unless $:.include? File.join(File.dirname(__FILE__), 'models')

require 'rubygems'
require 'bundler/setup'
Bundler.require(:default)
require 'database'
require 'collection'

class MongoMunch < Sinatra::Base

  set :root, File.dirname(__FILE__)
  register Sinatra::AssetPack
  register Sinatra::JstPages
  # register Sinatra::RestAPI

  serve_jst '/jst.js'

  assets do
    js :application, [
      '/js/modernizr.js',
      '/js/jquery.js',
      '/js/underscore.js',
      '/js/backbone.js',
      '/js/application.js',
      '/js/models/*.js',
      '/js/views/*.js',
      '/js/collections/*.js',
      '/js/routers/*.js',
      '/jst.js'
    ]
    css :application, ['/css/style.css','/css/application.css', '/css/theme.css']
    js_compression  :jsmin
    css_compression :sass
  end

  before do
    Database.connection = Mongo::Connection.new
  end

  get '/' do
    erb :index
  end

  get '/databases' do
    # rest_respond Database.all.sort_by(&:name)
    content_type :json
    connection = Mongo::Connection.new
    connection.database_info.to_a.map{|db| {name:db[0]} }.to_json
  end

  # rest_create '/databases' do
  #   Database.new
  # end

  # rest_resource '/databases/:name' do |name|
  #   Database.find(:name => name)
  # end

end

MongoMunch.run! if __FILE__ == $0
