
$: << File.dirname(__FILE__) unless $:.include? File.dirname(__FILE__)
require 'spec_helper'
require 'database'

describe Database do
  it 'can set the database connection' do
    Database.connection = EmbeddedMongo::Connection.new
    Database.connection.wont_be_nil
  end
  it 'can get the database info' do
    Database.connection = EmbeddedMongo::Connection.new
    Database.info
  end
end


