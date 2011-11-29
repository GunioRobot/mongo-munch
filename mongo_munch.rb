$: << File.join(File.dirname(__FILE__), 'models') unless $:.include? File.join(File.dirname(__FILE__), 'models')

require 'rubygems'
require 'bundler/setup'
Bundler.require(:default)
require 'database'
require 'collection'

class MongoMunch < Sinatra::Base

  set :root, File.dirname(__FILE__)
  # register Sinatra::AssetPack
  register Sinatra::JstPages
  register Sinatra::RestAPI

  serve_jst '/jst.js'

  before do
    Database.connection = Mongo::Connection.new
  end

  get '/' do
    erb :index
  end

  get '/application.css' do
    scss :application, :style => :expanded
  end

  get '/databases' do
    rest_respond Database.all.sort_by(&:name)
  end

  get '/database/:id/collections' do
    database = Database.create(id:params[:id],name:params[:id])
    rest_respond Collection.all(database).sort_by(&:name)
  end

end

if __FILE__ == $0
  MongoMunch.run!
end
