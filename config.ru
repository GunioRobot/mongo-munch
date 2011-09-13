require './mongomunch.rb'
disable :run
set :environment, ENV['RACK_ENV'].to_sym
set :root, Pathname(__FILE__).dirname
run MongoMunch
