require 'rubygems'
require 'bundler/setup'
require 'sinatra'
require 'mongo'
require 'json'
require 'sinatra/assetpack'
require 'sass'

class MongoMunch < Sinatra::Base

  set :root, File.dirname(__FILE__)
  register Sinatra::AssetPack

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
      '/js/routers/*.js'
    ]
    css :application, ['/css/style.css','/css/application.css']
    js_compression  :jsmin
    css_compression :sass
  end

  helpers do
    def json_status(code, reason)
      status code
      {
        :status => code,
        :reason => reason
      }.to_json
    end
  end
  
  get '/' do
    erb :index
  end

  get '/databases' do
    content_type :json
    connection = Mongo::Connection.new
    connection.database_info.to_a.map{|db| {id:db[0],name:db[0],size:db[1]} }.to_json
  end

  get '/databases/:name' do |name|
    content_type :json
    connection = Mongo::Connection.new
    db = connection.db(name)
    if !db.nil?
      { id:db.name,name:db.name }.to_json
    else
      json_status 404, "Not found"
    end
  end
  
  delete '/databases/:name' do |name|
    connection = Mongo::Connection.new
    connection.drop_database(name)
    status 204
  end

  get '/databases/:name/collections' do |name|
    content_type :json
    connection = Mongo::Connection.new
    db = connection.db(name)
    if !db.nil?
      db.collection_names.map { |name| { id:name, name:name } }.to_json
    else
      json_status 404, "Not found"
    end
  end
 end
